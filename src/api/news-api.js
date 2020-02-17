export default class NewsApi {

  _apiBase = 'https://newsapi.org/v2';

  _apiKey = '351776ba86614321af3173d1708e3740';

  _mainCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];


  getRandomCategory = (categories) => {
    return categories[Math.floor(Math.random() * categories.length)];
  };

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}&apiKey=${this._apiKey}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };
    
  getTopNews = async () => {
    const res = await this.getResource(`/top-headlines?country=us&category=${this.getRandomCategory(this._mainCategories)}`);
    return res.articles;
  };

  getLatestNews = async (page) => {
    const res = await this.getResource(`/everything?q=apple&sortBy=publishedAt&page=${page}&pageSize=10`);
    return res.articles;
  }

}