import React, { useState }  from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Context state
  const [appState, setAppState] = useState(
    {
      config: {
        initPage: '/',
        step: 0,
      },
      search: '',
      resultSearch: [{},{},{},{},{}],
    }
  );
    
  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
