import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  // Array of banner images
  const bannerImages = [
    "/assets/gallery/ph-1.jpg", // Placeholder images with desktop dimensions
    "/assets/gallery/ph5.jpg",
    "/assets/gallery/ph6.jpg",
    "/assets/gallery/phone.avif"
  ];

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with fade transition */}
      {bannerImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image} 
            alt={`Hero background ${index + 1}`} 
            className="w-full h-full object-contain md:object-cover lg:object-cover object-center"
          />
        </div>
      ))}
      
      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Our World</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Discover amazing experiences tailored just for you</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
          Get Started
        </button>
      </div>
      
      {/* Image indicator dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}