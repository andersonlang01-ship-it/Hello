const API_KEY = 'live_H1p0ih8Lff9auPB115nVSrV7hBBEY3GrTirMo1T8vGuec86rPD28Ks3B1LIjoCFk';
const API_URL = 'https://api.thecatapi.com/v1/images/search';

const CHAT_API_KEY = 'CILc8XBiQgngK5FeMATeMr4LYzWDfdbA';
const CHAT_URL = 'https://api.mistral.ai/v1/chat/completions';

const btn = document.getElementById('generate-btn');
const img = document.getElementById('cat-image');
const status = document.getElementById('status-message');

const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

async function generateCat() {
  btn.disabled = true;
  status.textContent = 'Fetching a cute cat...';
  img.style.display = 'none';

  try {
    const resp = await fetch(API_URL, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    if (!resp.ok) throw new Error(`Request failed: ${resp.status}`);

    const data = await resp.json();
    if (!Array.isArray(data) || !data[0] || !data[0].url) {
      throw new Error('API did not return a valid cat image URL');
    }

    img.src = data[0].url;
    img.onload = () => {
      img.style.display = 'block';
      status.textContent = 'Here is your cat! Click again for another.';
      btn.disabled = false;
      addMessage('Cat', 'Meow! Here\'s a new cat for you!');
    };
    img.onerror = () => {
      throw new Error('Image load failed. Please try again.');
    };
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
    btn.disabled = false;
  }
}

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message';
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  addMessage('You', message);
  chatInput.value = '';
  sendBtn.disabled = true;

  // Simulate cat response delay
  setTimeout(() => {
    const catResponses = [
      'Meow! 🐱',
      'Purrrr... that\'s nice!',
      'Mew mew! *stretches* 😸',
      'Pounce! Did that answer your question?',
      '*licks paw* Got it!',
      'Meow meow! You\'re so funny! 😻',
      'Hiss... I mean, yes! 😼',
      'Meow? Meow! *nods* 🐾',
      'Purrrr... tell me more! 😻',
      '*curls up* That\'s wonderful!'
    ];
    
    const randomResponse = catResponses[Math.floor(Math.random() * catResponses.length)];
    addMessage('Cat', randomResponse);
    sendBtn.disabled = false;
  }, 500);
}

btn.addEventListener('click', generateCat);

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

window.addEventListener('DOMContentLoaded', () => {
  status.textContent = 'Click generate to show a cat.';
});
