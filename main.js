const frodoQuote = document.querySelector('#frodo');
frodoQuote.innerText = frodoQuote.innerText.replace('revenge', 'pizza');

const samQuote = document.querySelector('#samwise');
samQuote.innerText = samQuote.innerText.replace('pie', 'stew');

const quotes = document.getElementsByTagName('p');
for (let quote of quotes){
  let text = quote.innerText;
  text = '\"' + text + '\"';
  quote.innerText = text;
}

const newQuote = document.createElement('p');
newQuote.innerHTML = '\"I can ride and wield blade, and I do not fear either pain or death.\"';
newQuote.setAttribute('id', 'eowyn');
const article = document.getElementById('quotes');
article.appendChild(newQuote);

const button = document.getElementById('my-btn');
const showQuote = (ev) => {
  console.log(ev);
  window.alert('\"Nobody tosses a dwarf!\"');
}
button.addEventListener('click', showQuote);