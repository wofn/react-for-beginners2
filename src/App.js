import { useEffect, useState } from "react";

function App() {
  const [money, setMoney] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <input
        onChange={onChange}
        type="number"
        value={money}
        placeholder="Write the money you have"
      />

      <h1>
        The Coins!(
        {
          coins.filter((coin) =>
            money === 0 ? true : coin.quotes.USD.price > money
          ).length
        }
        )
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins
            .filter((coin) =>
              money === 0 ? true : coin.quotes.USD.price > money
            )
            .map((coin) => (
              <option>
                {coin.name}({coin.symbol}): ${coin.quotes.USD.price} BTC
              </option>
            ))}
        </select>
      )}
    </div>
  );
}

export default App;
