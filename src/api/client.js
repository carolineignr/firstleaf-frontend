const url = 'https://restcountries.com/v3.1/all';

export async function getMovies() {
  const response = await fetch(url)
    .then(res => res.json());
  return response;
}