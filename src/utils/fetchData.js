export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cc165015c3mshd76145e89c8af05p15eb35jsnb63cca3714e1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cc165015c3mshd76145e89c8af05p15eb35jsnb63cca3714e1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
