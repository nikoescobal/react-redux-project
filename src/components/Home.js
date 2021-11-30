import React from 'react';

const Home = () => (
  <div className="grid grid-cols-2 py-8">
    <div className="col-span-2 h-1/ w-1/2 mx-auto">
      <img
        className="w-full h-full object-cover bg-cover"
        src="https://www.pngmart.com/files/13/My-Hero-Academia-Characters-PNG-Image-Background.png"
        alt=""
      />
    </div>
    <h2 className="col-span-2 flex items-center justify-center bg-blue-500 p-4 text-white font-semi-bold text-3xl">
      Characters
    </h2>
    <div className="flex px-6 py-3">
      <img
        src="https://storage.googleapis.com/my-hero-academia-api/Nemuri_Kayama.jpg"
        alt="avatar"
      />
      <div className="flex justify-center px-3 align-middle items-center h-full">
        <h2 className="font-mono text-2xl font-semibold">Hero: Midnight</h2>
      </div>
    </div>
    <div className="flex px-6 py-3">
      <img
        src="https://storage.googleapis.com/my-hero-academia-api/Nemuri_Kayama.jpg"
        alt="avatar"
      />
      <div className="flex justify-center px-3 align-middle items-center h-full">
        <h2 className="font-mono text-2xl font-semibold">Hero: Midnight</h2>
      </div>
    </div>
    <div className="flex px-6 py-3">
      <img
        src="https://storage.googleapis.com/my-hero-academia-api/Nemuri_Kayama.jpg"
        alt="avatar"
      />
      <div className="flex justify-center px-3 align-middle items-center h-full">
        <h2 className="font-mono text-2xl font-semibold">Hero: Midnight</h2>
      </div>
    </div>
    <div className="flex px-6 py-3">
      <img
        src="https://storage.googleapis.com/my-hero-academia-api/Nemuri_Kayama.jpg"
        alt="avatar"
      />
      <div className="flex justify-center px-3 align-middle items-center h-full">
        <h2 className="font-mono text-2xl font-semibold">Hero: Midnight</h2>
      </div>
    </div>
  </div>
);

export default Home;
