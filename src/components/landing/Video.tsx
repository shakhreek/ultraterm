import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/UwjEHY77RNc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl shadow-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
