import React from 'react';
import './index.css';
import avatar from './avatar.jpg'; // Avatar resmini ekleyin

function App() {
  return (
    <div id="Apps">
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-gray-800 shadow-2xl rounded-lg overflow-hidden animate-fade-in">
        <div className="px-6 py-8">
          <div className="flex">
            <img className="w-20 h-20 rounded-full mr-4" src={avatar} alt="Bot Avatarı" /> {/* Profil fotoğrafı */}
            <div>
              <h2 className="font-bold text-4xl mb-4 text-indigo-400">BMO</h2>
              <p className="text-gray-300 text-lg mb-6">BMO'ya merhaba de!</p>
              <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 animate-scale-in">
                Botu Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default App;
