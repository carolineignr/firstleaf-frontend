const api_url = process.env.REACT_APP_API_URL;

export async function getCountries() {
  const response = await fetch(`${api_url}/all`)
    .then(res => res.json());
  return response;
}