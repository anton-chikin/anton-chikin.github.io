const createQuote = ({author, content, tags}) => {
  const quoteDiv = document.createElement("div");
  quoteDiv.classList.add("quote");

  const quoteIconDiv = document.createElement("div");
  quoteIconDiv.classList.add("quote_icon");

  const quoteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  quoteSvg.setAttribute("width", 292);
  quoteSvg.setAttribute("height", 210);
  quoteSvg.setAttribute("viewBox", "0 0 292 210");
  quoteSvg.setAttribute("fill", "none");
  quoteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const quoteRect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  quoteRect1.setAttribute("width", 126);
  quoteRect1.setAttribute("height", 126);
  quoteRect1.setAttribute("fill", "black");
  quoteSvg.appendChild(quoteRect1);

  const quotePath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  quotePath1.setAttribute("d", "M62.3005 126.304C70.5 110 126 84.8038 126 126.304L83.6995 209.304H20L62.3005 126.304Z");
  quotePath1.setAttribute("fill", "black");
  quoteSvg.appendChild(quotePath1);

  const quoteRect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  quoteRect2.setAttribute("x", 166);
  quoteRect2.setAttribute("width", 126);
  quoteRect2.setAttribute("height", 126);
  quoteRect2.setAttribute("fill", "black");
  quoteSvg.appendChild(quoteRect2);

  const quotePath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  quotePath2.setAttribute("d", "M228.3 126.304C236.5 110 292 84.8038 292 126.304L249.7 209.304H186L228.3 126.304Z");
  quotePath2.setAttribute("fill", "black");
  quoteSvg.appendChild(quotePath2);

  quoteIconDiv.appendChild(quoteSvg);

  const quoteTextParagraph = document.createElement("p");
  quoteTextParagraph.classList.add("quote_text");
  quoteTextParagraph.textContent = `${content}`;

  quoteDiv.appendChild(quoteIconDiv);
  quoteDiv.appendChild(quoteTextParagraph);

  const quoteTagsDiv = document.createElement("div");
  quoteTagsDiv.classList.add("quote_tags");
  quoteTagsDiv.textContent = `${tags}`;

  quoteDiv.appendChild(quoteTagsDiv);

  return quoteDiv;
}

export default createQuote;