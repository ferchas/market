import ClientRest from '../restClient';
import { gql } from "apollo-boost";
class SearchServices {
  static finde (keyWord) {
    return ClientRest.query({
      query: gql`
      { 
        search(word:"${keyWord}") {
          name,
          price,
          currencySymbol,
          quantity,
          pictures { 
            alt,
            src,
          },
        }
      }
      `
    }).catch(err => ({error: {...err}}));
  }
}

export default SearchServices;
