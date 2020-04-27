import axios from 'axios';

class SearchServices {
  static finde (keyWord) {
    return axios.get('./api/search', {
      params: { keyWord },
    });
  }
}

export default SearchServices;
