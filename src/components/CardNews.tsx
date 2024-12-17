import React, { useState } from 'react';
import { CardNewsSet } from '../types/cardNews';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion'; // framer-motion 라이브러리 필요

interface CardNewsProps {
  cardNews: CardNewsSet;
  onClose?: () => void;
}

export const CardNews: React.FC<CardNewsProps> = ({ cardNews, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardNews.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentCard = cardNews.cards[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronLeftIcon className="w-8 h-8 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronRightIcon className="w-8 h-8 text-gray-700" />
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <XIcon className="w-6 h-6 text-gray-600" />
        </button>

        {/* Header */}
        {/* <div className="p-6 text-center border-b">
          <h2 className="text-2xl font-bold text-indigo-900">{cardNews.title}</h2>
          <p className="text-gray-600 mt-2">{cardNews.subtitle}</p>
        </div> */}

        {/* Card Content */}
        <div className="py-14 pb-14 px-20 overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="flex gap-8">
            {/* Left: Image */}
            <div className="w-1/2 flex-shrink-0">
              <img
                src={currentCard.image}
                alt={currentCard.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Right: Content */}
            <div className="w-1/2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-indigo-900 border-b border-indigo-200 pb-2 hover:text-indigo-700 transition-colors">
                  {currentCard.title}
                </h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >
                    <p 
                      className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors
                                animate-fade-in-up prose prose-lg
                                [&>span]:inline-block [&>span]:animate-slide-up
                                [&>span]:opacity-0 [&>span:nth-child(1)]:animation-delay-100
                                [&>span:nth-child(2)]:animation-delay-200
                                [&>span:nth-child(3)]:animation-delay-300"
                      dangerouslySetInnerHTML={{ 
                        __html: currentCard.description
                          .split('\n')
                          .map(line => `<span>${line}</span>`)
                          .join('')
                      }}
                    />
                   </motion.div>
                <ul className="space-y-3">
                  {currentCard.points.map((point, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-300"
                    >
                      <ChevronRightIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-3">
          <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {currentIndex + 1}/{cardNews.cards.length}
          </span>
          <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {currentCard.title}
          </span>
        </div>
      </div>
    </div>
  );
};