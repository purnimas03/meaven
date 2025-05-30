'use client';

import Image from 'next/image';

const ImageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffedd6b5]">
      <div className="animate-pulse-scale">
        <Image src="/logo-load.png" alt="Loading..." width={300} height={80} />
      </div>

      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageLoader;

