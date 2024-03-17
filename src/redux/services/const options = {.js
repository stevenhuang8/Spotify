const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '513a94127emsh7fbdee4ec0c7e42p1addaejsn3f210ec0051b',
    'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
  }
};

fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));