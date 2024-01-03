export const fetchnews = async (topic) => {
  const response =
    await fetch(`https://newsapi.org/v2/everything?q=%${topic}&from=2024-1-2&sortBy=publishedAt&apiKey=20d5bb0f2e30448992f9e41fdad5d22e
    `);
  const data = await response.json();
  return data.articles;
};
