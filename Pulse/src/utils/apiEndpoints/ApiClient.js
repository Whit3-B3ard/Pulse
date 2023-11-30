const BASE_URL = 'https://spotify23.p.rapidapi.com/';

const headers = {
  'X-RapidAPI-Key': '184998505fmshbfd5e284900bf30p10a72bjsn301e834ee027',
  'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
};

const ApiClient = {
  get: async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: headers
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
};

export default ApiClient;
