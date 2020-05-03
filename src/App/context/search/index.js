import { useContext } from "react";
import AppContext from "../app";


const SearchContext = () => {
  const [ ,setAppState] = useContext(AppContext);
  
  const updateData = ({searchWord, resultSearch}) =>
    setAppState(prevState => ({
      ...prevState,
      searchWord,
      resultSearch,
    }));

  return {
    updateData,
  };
};

export default SearchContext;
