import React from "react";

function Quote() {
  const [quote, setQuote] = React.useState({
    content: "",
    author: "",
    visible: false,
  });

  let quoteValuesClass = "quote__values-container--hide";

  const quoteApiUrl =
    "https://api.quotable.io/random?tags=famous-quotes&maxLength=50";
  const fetchData = async (url) => {
    const data = await fetch(url);
    const value = await data.json();
    setQuote({
      content: `'${value.content}'`,
      author: `- ${value.author}`,
      visible: true,
    });
  };

  React.useEffect(() => {
    fetchData(quoteApiUrl);
  }, []);

  if (quote.visible) {
    quoteValuesClass = "quote__values-container";
  }

  return (
    <div className="quote">
      <div className={quoteValuesClass}>
        <p className="quote__text">{quote.content}</p>
        <p className="quote__author">{quote.author}</p>
      </div>
    </div>
  );
}

export { Quote };
