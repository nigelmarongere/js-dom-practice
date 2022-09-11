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

const clickMe = document.getElementById('my-btn');
const showQuote = ev => window.alert('\"Nobody tosses a dwarf!\"');
clickMe.addEventListener('click', showQuote);

const secretMsg = document.getElementById('to-log');
const logSecret = ev => console.log('There are no secrets!');
secretMsg.addEventListener('click', logSecret);

const h = document.getElementById('header');
header.classList.add('green');

console.log(quotes);
for (let quote of quotes){
  quote.classList.add('bold');
}