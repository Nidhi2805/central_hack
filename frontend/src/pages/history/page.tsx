import React from 'react';
import Image from 'next/image';

export default function History() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-[64px] font-bold absolute left-28 mt-[-400px] -translate-y-1/2  origin-left">
        History
      </h1>
      <div className="flex flex-col items-center mt-[124px]">
      
        {/* 7 Rectangular Divs */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div 
            key={index} 
            className={`w-[100vh] h-[12vh] bg-[#2F2F31] flex items-center pl-12 pt-6 gap-6 
              ${index === 0 ? 'rounded-tl-[50px] rounded-tr-[50px]' : ''}`}
          >
            {/* Text */}
            <p className="text-2xl font-bold">
              Lorem ipsum something something, I'm detecting....
            </p>
            
            {/* Image beside the text */}
            {index === 1 || index === 3 || index === 4 ? (
              <>
                <Image 
                  src="/ok.webp" 
                  alt="Correct"
                  width={40} 
                  height={40} 
                  className="rounded-md"
                />
                <Image 
                  src="/arrow.webp" 
                  alt="Arrow"
                  width={16} 
                  height={16} 
                  className="rounded-md"
                />
              </>
            ) : (
              <>
                <Image 
                  src="/danger.webp" 
                  alt="Status Icon"
                  width={40} 
                  height={40} 
                  className="rounded-md"
                />
                <Image 
                  src="/arrow.webp" 
                  alt="Status Icon"
                  width={16} 
                  height={16} 
                  className="rounded-md"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
