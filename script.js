const vocab = [
  {word: "Hello", translation: "Hola"},
  {word: "Thank you", translation: "Gracias"},
  {word: "Goodbye", translation: "Adiós"}
];

vocab.forEach(item => {
  const p = document.createElement('p');
  p.textContent = `${item.word} → ${item.translation}`;
  document.body.appendChild(p);
});