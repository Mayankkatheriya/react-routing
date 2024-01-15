import "./Quotes.css";
import data from "./QuoteData.json";
import Quote from "./Quote";

const Quotes = () => {
  window.scroll(0,0);
  return (
    <main className="quotes">
      {data.map((obj, index) => {
        return <Quote key={index} quoteObj={obj} />;
      })}
    </main>
  );
};

export default Quotes;
