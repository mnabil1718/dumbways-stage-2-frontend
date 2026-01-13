import { useEffect, useState } from "react";
import "./App.css";
import { getWeather, searchCity, type CityResult } from "./services/weather";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [city, setCity] = useState("");
  const [suggest, setSuggest] = useState<CityResult[]>([]);
  const [temp, setTemp] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const debouncedCity = useDebounce(city, 300);

  useEffect(() => {
    (async () => {
      try {
        const results = await searchCity(debouncedCity);
        setSuggest(results);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
          setLoading(false);
        }
      }
    })();
  }, [debouncedCity]);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setLoading(true);
    setError(null);
    setCity(value);
    if (value === "") setTemp(null);
  };

  const onCitySelected = async (c: CityResult) => {
    setLoading(true);
    setCity(`${c.name}, ${c.admin1}`);
    setSuggest([]);
    try {
      const temperature = await getWeather(c.latitude, c.longitude);
      setTemp(temperature);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="card">
      {error && <div className="error-bar">{error}</div>}

      <h1>Weather App</h1>

      <input
        type="text"
        value={city}
        className="weather-input"
        placeholder="Enter city name..."
        onChange={onChangeHandler}
      />

      {suggest.length > 0 && (
        <ul className="suggestion">
          {suggest.map((s) => (
            <li key={s.id} onClick={() => onCitySelected(s)}>
              {s.name}, {s.admin1}
            </li>
          ))}
        </ul>
      )}

      {loading && <p>Loading...</p>}
      {temp && <p>{temp} &deg; Celcius</p>}
    </div>
  );
}

export default App;
