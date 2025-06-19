import React from 'react';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const domain = import.meta.env.VITE_DOMAIN;
const name = import.meta.env.VITE_NAME;
const remarketingMessage = import.meta.env.VITE_REMARKETING_MESSAGE;
const audioUrl = import.meta.env.VITE_AUDIO_URL;
const videoUrl = import.meta.env.VITE_VIDEO_URL;

function App() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(remarketingMessage)}`;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20, maxWidth: 480, margin: 'auto' }}>
      <img
        src={`${domain}/profile.jpg`}
        alt="Foto de perfil"
        style={{ width: 120, height: 120, borderRadius: '50%', marginBottom: 20 }}
      />
      <h1>Olá, eu sou {name}</h1>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '15px 20px',
          textAlign: 'center',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 'bold',
          marginBottom: 15,
        }}
      >
        Falar no WhatsApp
      </a>

      <audio controls style={{ width: '100%', marginBottom: 15 }}>
        <source src={audioUrl} type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <video controls style={{ width: '100%', borderRadius: 8 }}>
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      <p style={{ marginTop: 20, fontStyle: 'italic', color: '#555' }}>
        {remarketingMessage}
      </p>
    </div>
  );
}

export default App;
