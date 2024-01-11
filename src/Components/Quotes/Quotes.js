import "./Quotes.css";
import data from "./QuoteData.json";
import Quote from "./Quote";

const Quotes = () => {
  return (
    <main className="quotes">
      {data.map((obj, index) => {
        return <Quote key={index} quoteObj={obj} />;
      })}
    </main>
  );
};

export default Quotes;
