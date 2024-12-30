'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, HeartIcon, X } from 'lucide-react'
import StoryPage from './StoryPage'
import { TimeCounter } from './TimeCounter'
import { FlipWords } from './ui/flip-words'

export default function MainContent() {
    const [currentPage, setCurrentPage] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 5))
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0))

    const pages = [
        // Cover Page
        <StoryPage key="cover" backgroundColor="bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-44 h-44 mb-8 rounded-full overflow-hidden shadow-md"
                >
                    <Image
                        src="https://images.pexels.com/photos/8849283/pexels-photo-8849283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Heart icon"
                        priority={true}
                        width={176}
                        height={176}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 relative z-10">
                    A Special Journey
                </h1>
                <div className="text-2xl md:text-3xl text-purple-700 mb-8 relative z-10">
                    Welcome! Let’s celebrate <br /> this <FlipWords words={['journey', 'bond', 'connection', 'friendship', 'moment']} className="text-nowrap font-bold text-pink-500" />
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-blue-600 transition-colors duration-300"
                    onClick={nextPage}
                >
                    Open the Story
                </motion.button>
            </div>
        </StoryPage>,

        // Our Journey Page
        <StoryPage key="journey" backgroundColor="bg-gradient-to-br from-blue-200 to-green-200">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">Our Journey</h2>
            <div className="space-y-4 flex-1 overflow-y-auto overflow-x-hidden rounded-xl custom-scrollbar">
                {[
                    { date: '1 January, 2022', event: 'Project Idea Born', emoji: '💡' },
                    { date: '15 February, 2022', event: 'First Meeting', emoji: '🤝' },
                    { date: '20 March, 2022', event: 'Initial Prototype Built', emoji: '🛠️' },
                    { date: '5 June, 2022', event: 'Beta Testing Started', emoji: '🧪' },
                    { date: '10 August, 2022', event: 'Feedback Review Session', emoji: '📝' },
                    { date: '25 December, 2022', event: 'Project Launched', emoji: '🚀' },
                ]
                    .map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md"
                        >
                            <span className="text-3xl">{item.emoji}</span>
                            <div className='relative z-10'>
                                <p className="font-medium text-gray-800">{item.event}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </StoryPage>,

        // Time Together Page
        <StoryPage key="time" backgroundColor="bg-gradient-to-br from-blue-200 to-green-200">
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 relative z-10">Demo Journey</h2>
                <div className="w-full max-w-md space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <TimeCounter
                            startDate="2020-01-01"
                            label="Started Learning"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <TimeCounter
                            startDate="2022-01-01"
                            label="First Project"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <HeartIcon className="w-16 h-16 text-green-500 mx-auto" />
                </motion.div>
                <motion.p
                    className="text-lg md:text-xl text-blue-600 mt-5 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Every milestone is worth celebrating!
                </motion.p>
            </div>
        </StoryPage>,

        // Photo Gallery Page
        <StoryPage key="gallery" backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-100">
            <h2 className="text-3xl font-bold text-cyan-600 mb-6 relative z-10">Memorable Moments</h2>
            <div className="flex-1 rounded-2xl overflow-y-auto overflow-x-hidden custom-scrollbar">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 rounded-2xl">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(i)}
                        >
                            <Image
                                src={`https://images.pexels.com/photos/8566524/pexels-photo-8566524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                                alt={`Gallery image ${i}`}
                                width={330}
                                height={270}
                                className="rounded-2xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </StoryPage>,


        // Letter page
        <StoryPage key="letter" backgroundColor="bg-gradient-to-br from-blue-200 to-gray-200">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">A Special Message</h2>
            <div className="bg-white rounded-xl p-6 shadow-md overflow-y-auto flex-1 custom-scrollbar">
                <div className="relative z-10">
                    <div className="text-gray-700 text-lg leading-relaxed mb-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nam sit nesciunt vel. Quo enim rerum magnam, deserunt laudantium, cupiditate fugiat nisi exercitationem cum expedita minus velit, dolore numquam eligendi aliquam ipsa voluptatem! Maxime ipsum expedita perspiciatis quo, officiis eveniet deserunt ut alias magnam, sapiente molestias non eum quae recusandae iste obcaecati illo magni libero mollitia delectus hic fugiat. Expedita cupiditate ad perferendis quasi? Quasi atque esse eos deleniti iste pariatur asperiores in tempora expedita odit perferendis facere ipsum sequi officiis assumenda, inventore quos sint excepturi molestiae non eius necessitatibus! Blanditiis, inventore dolor consequuntur perspiciatis fugiat vero eum id molestiae.</p>
                    </div>
                    <p className="text-right text-gray-600 font-semibold">
                        Best Regards,<br />
                        A Friend 🌟
                    </p>
                </div>
            </div>
        </StoryPage>,


        // Final Page
        <StoryPage key="final" backgroundColor="bg-gradient-to-br from-pink-100 to-blue-200">
            <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-4xl font-bold text-pink-600 mb-6 relative z-10">The Journey Continues...</h2>
                <p className="text-xl text-blue-700 mb-8 relative z-10">
                    Every moment we share is another step in our unforgettable story.
                </p>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-6xl mb-8"
                >
                    🌟
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => setCurrentPage(0)}
                >
                    Return to Start
                </motion.button>
            </div>
        </StoryPage>
    ]

    return (
        <div className="relative w-full h-screen ">
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-4xl h-[78vh] bg-white rounded-3xl shadow-question-card overflow-hidden relative flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute"
                    >
                        <HeartIcon size={200} className='fill-pink-100 stroke-none' />
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {pages[currentPage]}
                    </AnimatePresence>
                </div>
            </div>

            {currentPage > 0 && (
                <button
                    onClick={prevPage}
                    className="fixed left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
                >
                    <ChevronLeft className="text-pink-600" />
                </button>
            )}

            {currentPage < pages.length - 1 && (
                <button
                    onClick={nextPage}
                    className="fixed right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
                >
                    <ChevronRight className="text-pink-600" />
                </button>
            )}

            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="fixed left-1/2 top-4 transform -translate-x-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
                    >
                        <X className="text-pink-500" />
                    </button>

                    <motion.div
                        initial={{ scale: 0.2 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="bg-pink-50 p-4 rounded-3xl shadow-2xl max-w-fit w-full h-max overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`https://images.pexels.com/photos/8566524/pexels-photo-8566524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                            alt={`Gallery image ${selectedImage}`}
                            width={300}
                            height={250}
                            className="rounded-2xl w-auto h-auto"
                        />
                        <p className="mt-4 text-center text-gray-700">Gallery image {selectedImage}</p>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

