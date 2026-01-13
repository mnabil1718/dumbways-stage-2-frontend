
const APIURL = 'https://api.open-meteo.com/v1/forecast';
const SEARCHAPIURL = 'https://geocoding-api.open-meteo.com/v1/search';

export async function getWeather(lat: number, lon: number): Promise<number> {
  const url = `${APIURL}?latitude=${lat}&longitude=${lon}&current_weather=true`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("cannot fetch weather data");

  const data = await res.json();
  return data.current_weather.temperature;
}


export type CityResult = {
    id: number;
    name: string;
    country: string;
    admin1: string; // province
    latitude: number;
    longitude: number;
}

export async function searchCity(name: string): Promise<CityResult[]> {
    const url = `${SEARCHAPIURL}?name=${name}&count=5&language=en&format=json`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("failed to fetch city names");

    const data = await res.json();
    return data.results ?? [];
}