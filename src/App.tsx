import React from 'react';

// The new Google Form URL.
const GOOGLE_FORM_URL = "https://forms.gle/ArbvQZHCDbbAzWAr9";

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-[#FFF8F7] text-center p-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Jupitto'ya Aklınızdaki Soruları Sorun!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Astrolojik haritanızın o andaki durumuna bakıp sadece size özel cevaplar hazırlıyorum.
        </p>

        <div className="mt-12">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#FD8275] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#fa7163] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FD8275]/50"
          >
            <img 
              src="/icon.png" 
              alt="Jupitto icon" 
              className="w-10 h-10 -ml-2 mr-3 rounded-full object-cover" 
            />
            <span>Jupitto'yu Darla</span>
          </a>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Butona tıkladığınızda doğum bilgilerinizi girebileceğiniz bir forma yönlendirileceksiniz.
        </p>
      </div>
    </main>
  );
};

export default App;
