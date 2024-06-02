import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconArrowDown, IconArrowDownBar, IconArrowUp, IconArrowUpBar, IconMicrophone, IconMicrophoneFilled, IconMicrophoneOff, IconPlayerRecordFilled, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { FaMicrophone } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';
import { Bars } from 'react-loader-spinner';

const InfoModal = ({ icon, title, description, showModal, setShowModal, centered = false, duration = 2000 }) => {

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [showModal, duration]);

    return <AnimatePresence>
        {showModal && (
            <motion.div
                className={` ${centered ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-10 left-10'} flex flex-col items-center gap-3 column fixed z-30 bg-sky-400 opacity-25 text-white text-center p-10 rounded-xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p>{icon}</p>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p>{description}</p>
            </motion.div>
        )}
    </AnimatePresence>
}

const InstructionModal = ({ setShowModal }) => {
    return <AnimatePresence>
        <motion.div
            className={`top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-30 bg-sky-500 font-Jost text-slate-800 p-10 rounded-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* close button */}
            <button onClick={() => setShowModal(false)} className='absolute top-10 right-10 text-xl'>
                <IconX size={20} />
            </button>
            <h3 className='text-center text-3xl font-bold mb-4'>Basic Instructions</h3>
            <p className='text-lg mb-2'>{`1. Say "Open <page name> page" to open navigate to any page`}</p>
            <p className='text-lg mb-2'>{`2. Say "I want to create an account" to navigate to the signup page`}</p>
            <p className='text-lg mb-2'>{`3. Say "I want to login" to navigate to the login page`}</p>
            <p className='text-lg mb-2'>{`4. Say "Move down" to scroll down and vice-versa`}</p>
            <p className='text-lg mb-2'>{`5. Say "Move to bottom" to scroll to bottom of page and vice-versa`}</p>
        </motion.div>
    </AnimatePresence>
}

const pageDetails = [
    {
        pageName: 'home',
        pagePath: '/'
    },
    {
        pageName: 'signup',
        pagePath: '/signup'
    },
    {
        pageName: 'login',
        pagePath: '/login'
    },
    {
        pageName: 'contact',
        pagePath: '/contact'
    },
    {
        pageName: 'about',
        pagePath: '/about'
    },
    {
        pageName: 'resetPassword',
        pagePath: '/resetPassword'
    },
    {
        pageName: 'productView',
        pagePath: '/productView'
    },
    {
        pageName: 'viewCart',
        pagePath: '/viewCart'
    },
    {
        pageName: 'manageProduct',
        pagePath: '/admin/manageProduct'
    },
    {
        pageName: 'checkout',
        pagePath: '/checkout'
    },
    {
        pageName: 'MyShop',
        pagePath: '/MyShop'
    },
    {
        pageName: 'uploadProduct',
        pagePath: '/admin/uploadProducts'
    },
   
    {
        pageName: 'profile',
        pagePath: '/user/profile'
    }

]

const speech = new SpeechSynthesisUtterance();
const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);
    const [showInstruction, setShowInstruction] = useState(false);

    const [modalOptions, setModalOptions] = useState({
        icon: <FaMicrophone size={50} />,
        title: '',
        description: '',
        centered: true
    })

    const hasRun = useRef(false);
    const router = useRouter();

    const [voices, setVoices] = useState([]);

    const triggerModal = (title, description, centered = true, icon = <FaMicrophone size={50} />) => {
        setModalOptions({
            icon,
            title,
            description,
            centered
        });
        setShowModal(true);
    }

    const commands = [
        {
            command: 'Open :pageName page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator(pageName)
            }
        },
        {
            command: 'I want to create an account',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('signup')
            }
        },
        {
            command: 'I want to login',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('login')
            }
        },
        {
            command: 'I want to buy something',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('MyShop')
            }
        },
        {
            command: 'I want to contact you',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('contact')
            }
        },
        {
            command: 'open manage product page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('manageProduct')
            }
        },
        {
            command: 'open login page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('login')
            }
        },
        {
            command: 'open checkout page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('checkout')
            }
        },
        {
            command: 'open cart page',
            callback: (pageName) => {
              console.log('Opening page: ', pageName);
              voicePageNavigator('MyCart')
            }
          },

        {
            command: 'open contact page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('contact')
            }
        },
        {
            command: 'open reset password page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('resetPassword')
            }
        },
        {
            command: 'open product view page',            
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('viewCart')
            }
        },
        {
            command: 'open signup page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('signup')
            }
        },
        {
            command: 'open admin dashboard',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('admindashboard')
            }
        },
        {
            command: 'open manage user',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('manageuser')
            }
        },
        {
            command: 'open admin profile',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('adminprofile')
            }
        },
        {
            command: 'open add product',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('addProduct')
            }
        },
        {
            command: 'open manage product',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('manageProduct')
            }
        },
        {
            command: 'open seller dashboard',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('sellerdashboard')
            }
        },
        {
            command: 'open seller sign up',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('sellersignup')
            }
        },
        {
            command: 'open user profile',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('profile')
            }
        },
        {
            command: 'open my shop page',
            callback: (pageName) => {
                console.log('Opening page: ', pageName);
                voicePageNavigator('MyShop')
            }
        },
        {
            command: 'show me products',
            callback: (pageName) => {
                router.push('/productView');
                voiceResponse('Showing all products');
            }
        },
        {
            command: 'move page :direction',
            callback: (direction) => {
                console.log('Moving in direction: ', direction);
                if (direction === 'up') {
                    window.scrollBy(0, -window.innerHeight);
                } else if (direction === 'down') {
                    window.scrollBy(0, window.innerHeight);
                }
            }
        },
        {
            command: 'scroll :direction',
            callback: (direction) => {
                console.log('Scrolling in direction: ', direction);
                if (direction === 'up') {
                    window.scrollBy(0, -window.innerHeight);
                } else if (direction === 'down') {
                    window.scrollBy(0, window.innerHeight);
                }
            }
        }
    ]

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        finalTranscript
    } = useSpeechRecognition({ commands, continuous: true });

    if (!browserSupportsSpeechRecognition) {
        console.log('Your browser does not support speech recognition software! Please try again with a different browser.');
    }

    const voicePageNavigator = (pageName) => {
        const page = pageDetails.find(page => pageName.toLowerCase().includes(page.pageName.toLowerCase()));
        if (page) {
            voiceResponse(`Navigating to ${pageName} page...`);
            triggerModal('Navigating...', `Navigating to ${pageName} page...`);
            router.push(page.pagePath);
        } else {
            console.log('Page not found!');
        }
    }

    const fillInputUsingVoice = (cb) => {
        if (finalTranscript.toLowerCase().startsWith('enter')) {
            cb();
        }
    }

    const performActionUsingVoice = (triggerCommand, command, cb) => {
        if (finalTranscript.toLowerCase().startsWith(triggerCommand) && finalTranscript.toLowerCase().includes(command)) {
            cb();
        }
    }

    useEffect(() => {
        if (!hasRun.current) {
            hasRun.current = true;
            // SpeechRecognition.startListening({ continuous: true });
            // voiceResponse('Welcome to Own Your cap. What are you shopping today?');
            // triggerModal('Voice Assistant', 'I am listening');
        }
    }, [])

    // open instruction modal after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            setShowInstruction(true);
        }, 3000);
    }, [])


    useEffect(() => {
        if (finalTranscript === 'start listening') {
            voiceResponse('I am listening');
            SpeechRecognition.startListening({ continuous: true });
            triggerModal('Voice Assistant', 'I am listening');
        }
        if (finalTranscript.includes('top listening')) {
            voiceResponse('Okay, I will stop listening now');
            SpeechRecognition.stopListening();
            triggerModal('Voice Assistant', 'Good Bye! Have a nice day!', false, <IconMicrophoneOff size={50} />);
        }
        if (finalTranscript.includes('hello shinchan')) {
            resetTranscript();
            voiceResponse('Hello! How can I help you today?');
            SpeechRecognition.startListening({ continuous: true });
        }
        if (finalTranscript.includes('goodbye box')) {
            voiceResponse('Goodbye! Have a nice day!');
            SpeechRecognition.stopListening();
            triggerModal('Voice Assistant', 'Good bye! have a nice Day', false, <IconMicrophoneOff size={50} />);
        }
        if (finalTranscript.includes('scroll up')) {
            window.scrollBy(0, -window.innerHeight / 2);
            // trigger info modal here
            setShowModal(true);
            triggerModal('Scrolling Up');
            resetTranscript();
            triggerModal('Scrolling Up', '', true, <IconArrowUp size={50} />);
        }

        if (finalTranscript.includes('scroll down')) {
            window.scrollBy(0, window.innerHeight / 2);
            setShowModal(true);
            triggerModal('Scrolling Down');
            resetTranscript();
            triggerModal('Scrolling Down', '', true, <IconArrowDown size={50} />);
        }

        if (finalTranscript.includes('move to bottom')) {
            window.scrollTo(0, document.body.scrollHeight);
            resetTranscript();
            triggerModal('Moving to Bottom', '', true, <IconArrowDownBar size={50} />);
        }

        if (finalTranscript.includes('move to top')) {
            window.scrollTo(0, 0);
            resetTranscript();
            triggerModal('Moving to Top', '', true, <IconArrowUpBar size={50} />);
        }
        if (finalTranscript.includes('browse products') || finalTranscript.includes('view all products')) {
            resetTranscript();
            voiceResponse('Showing all products');
            router.push('/productView');
        }
    }, [finalTranscript])

    const voiceResponse = (text) => {
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }

    const interpretVoiceCommand = () => {
        // const last = event.results.length - 1;
        // const command = event.results[last][0].transcript;
        console.log('Voice Command: ', transcript);
        if (transcript.includes('home')) {
            voicePageNavigator('home');
        } else if (transcript.includes('sign up')) {
            voicePageNavigator('signup');
        } else if (transcript.includes('login')) {
            voicePageNavigator('login');
        } else if (transcript.includes('contact')) {
            voicePageNavigator('contact');
        } else if (transcript.includes('reset password')) {
            voicePageNavigator('reset password');
        } else if (transcript.includes('hello')) {
            voiceResponse('Hello! How can I help you?');
        } else if (transcript.includes('goodbye')) {
            voiceResponse('Goodbye! Have a nice day!');
        } else {
            voiceResponse('Sorry, I did not understand that command. Please try again.');
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            // console.log(e.code);
            if (e.code === 'Space' && e.ctrlKey) {
                SpeechRecognition.startListening();
            }
        });
    }, [])


    useEffect(() => {
        const synth = window.speechSynthesis;
        if ("onvoiceschanged" in synth) {
            setVoices(voices);
            console.log(voices);
            synth.onvoiceschanged = loadVoices;
        }
    }, [])

    const loadVoices = () => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        setVoices(voices);
        // console.log(voices);
        speech.voice = voices[12];
    }

    const checkExistenceInTranscript = (commandArray) => {
        const command = commandArray.find(command => finalTranscript.includes(command));
        return command;
    }




    return (


        <VoiceContext.Provider value={{
            transcript,
            resetTranscript,
            interpretVoiceCommand,
            fillInputUsingVoice,
            performActionUsingVoice,
            finalTranscript,
            voiceResponse,
            voices,
            triggerModal,
            checkExistenceInTranscript
        }}>



            <button
                type="button"
                className="bg-sky-500 size-[62px] rounded-full items-center justify-center flex flex-shrink-0"
                style={{
                    position: 'fixed',
                    bottom: (20),
                    right: (20),
                    zIndex: 1000
                }}
                onClick={() => {
                    if (listening) {
                        SpeechRecognition.stopListening();
                    } else {
                        SpeechRecognition.startListening();
                    }
                }}>{listening ?
                    (
                        <span className='text-white'>
                            <Bars
                                height="30"
                                width="30"
                                color="black"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </span>
                    ) : (
                        <span> <IconMicrophone className='text-2xl text-white' /></span>
                    )
                }   </button>
            <span className='text-white'>{transcript}</span>
            {children}


            {/* <div className='bg-[#8C52FF] text-white text-center'>
                <button className='floating-mic ' onClick={() => {
                    if (listening) {
                        SpeechRecognition.stopListening();
                    } else {
                        SpeechRecognition.startListening();
                    }
                }}>{listening ?
                    (
                        <span >
                            <IconPlayerRecordFilled style={{ display: 'inline', color: 'white' }} color='#f00' /> listening... {transcript}
                        </span>
                    ) : (
                        <span className='text-xl'><FaMicrophone /></span>
                    )}</button>
                {/* <p>Microphone: </p> */}
            {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
            {/* </div> */}

            {/* // {children} */}
            <InfoModal {...modalOptions} showModal={showModal} setShowModal={setShowModal} />
            {/* {
                showInstruction &&
                <div className='fixed top-0 left-0 w-full h-full bg-slate-900 opacity-90 z-50'>
                    <div className='h-full backdrop-blur-md'>
                        <InstructionModal setShowModal={setShowInstruction} />
                    </div>
                </div>
            } */}
        </VoiceContext.Provider>
    )
}

const useVoiceContext = () => useContext(VoiceContext);

export default useVoiceContext;