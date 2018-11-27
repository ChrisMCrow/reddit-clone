import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <Navbar/>
      <MainContent/>
    </div>
  );
}

export default App;
