// Acessa as variáveis de ambiente que o Vercel injeta neste ambiente de servidor.
// O "process.env" é um objeto do Node.js que só funciona aqui no backend.
const firebaseConfig = {

  apiKey: "AIzaSyCpmCZ5Iq-3Um_Go3RYBYx1cp0t8wN2Lu0",
  authDomain: "aula-255c8.firebaseapp.com",
  projectId: "aula-255c8",
  storageBucket: "aula-255c8.firebasestorage.app",
  messagingSenderId: "1069502443311",
  appId: "1:1069502443311:web:76ae59d26779a66bc3fbda"
};

// Esta função retorna a configuração do Firebase
module.exports = (req, res) => {
  // Define os cabeçalhos para permitir que o seu frontend acesse esta API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responda com a configuração JSON
  res.status(200).json(firebaseConfig);
};
