// components/subComponents/StatsCards.tsx
// components/subComponents/StatsCards.tsx
"use client"

import Image from 'next/image';

type StatData = {
  leftStat: {
    number: string;
    label: string;
    description: string;
  };
  rightStat: {
    number: string;
    label: string;
    description: string;
  };
  image: string;
};

interface StatCardProps {
  stat: StatData;
  index: number;
}

export const JazbaaStats = ({ stat, index }: StatCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-gray-900 rounded-xl overflow-hidden`}>
      {/* Image Section with Dark Overlay */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        {/* Image */}
        <Image 
          src={stat.image} 
          alt="Statistics visual" 
          layout="fill" 
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Stat */}
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.leftStat.number}</h3>
            <p className="text-xl font-semibold text-white mb-1">{stat.leftStat.label}</p>
            <p className="text-gray-400 text-sm">{stat.leftStat.description}</p>
          </div>

          {/* Right Stat */}
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.rightStat.number}</h3>
            <p className="text-xl font-semibold text-white mb-1">{stat.rightStat.label}</p>
            <p className="text-gray-400 text-sm">{stat.rightStat.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};