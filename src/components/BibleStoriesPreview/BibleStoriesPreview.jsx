import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Kingdavid from "../../assets/Kingdavid.jpg"
import Daniel from "../../assets/DAniel.jpg"
import TakeQuiz from "../..//components/QuizSection/TakeQuiz";

const bibleStories = [
  {
    title: "David and Goliath",
    image: Kingdavid,
    description: "Discover how young David faced the mighty Goliath with faith and courage.",
  },
  {
    title: "Daniel in the Lion's Den",
    image: Daniel,
    description: "See how Daniel's faith saved him from the hungry lions.",
  },
  // Add more stories as needed
];

export default function FeaturedBibleAndGames() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? bibleStories.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === bibleStories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12">
      
        {/* Featured Bible Story */}
        <div className="rounded-xl p-6 relative">
          <h2 className="text-3xl font-bold mb-4">Featured Bible Story</h2>
          <img
            src={bibleStories[currentIndex].image}
            alt={bibleStories[currentIndex].title}
            className="rounded-lg mb-3 w-full h-56 object-cover"
          />
          <h3 className="text-xl font-semibold">{bibleStories[currentIndex].title}</h3>
          <p className="text-gray-600 mt-2">{bibleStories[currentIndex].description}</p>
          
          {/* Arrows */}
          <button
            onClick={prevStory}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#ff7f26] text-white p-2 rounded-full hover:bg-[#e86e1f]"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextStory}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#ff7f26] text-white p-2 rounded-full hover:bg-[#e86e1f]"
          >
            <FaChevronRight />
          </button>
        </div>

     
        <TakeQuiz />

    </section>
  );
}
