import React from 'react';
import './App.css';
import TableMainPage from './table-main';
import GitSearchEnginPage from './git-search-engin';

class App extends React.Component{
 
render() {
  return(
    <div>
      <TableMainPage />
      <GitSearchEnginPage/>
    </div>
  );
}

}


export default App;
