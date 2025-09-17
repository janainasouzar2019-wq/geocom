// Acessa as variáveis de ambiente que o Vercel injeta neste ambiente de servidor.
// O "process.env" é um objeto do Node.js que só funciona aqui no backend.
const firebaseConfig = {
  apiKey: "AIzaSyDIKWVZ1UfNSnucKnuhuqdo24FEz8g4MiM",
  authDomain: "teste-final-4978a.firebaseapp.com",
  projectId: "teste-final-4978a",
  storageBucket: "teste-final-4978a.firebasestorage.app",
  messagingSenderId: "601648580727",
  appId: "1:601648580727:web:23000458a525ec71861e72"
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
