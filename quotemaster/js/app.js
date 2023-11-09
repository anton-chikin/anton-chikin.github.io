import getData from "./tools/getData.js";
import createQuote from './tools/createQuote.js';

const getQuoteButton = document.querySelector('#getQuote');

getQuoteButton.addEventListener('click', async () => {
  getQuoteButton.classList.toggle('quote_btn-disable');

  const quoteContainer = document.querySelector('.quote_container');
  const data = await getData('https://api.quotable.io/random');

  quoteContainer.prepend(createQuote(data));

  getQuoteButton.classList.toggle('quote_btn-disable');

  // shareQuote(data);
});

const shareQuote = ({author, content, tags}) => {
  const twitterURL = `https://twitter.com/intent/tweet?text=«${content}» %0D%0A©${author}`;
  window.open(twitterURL, '_blank');
}