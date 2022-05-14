import React from 'react';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      {/* todo: nice looking header and navbar */}
      <h1>Flight Rising G1 Search Tool</h1>
      <p>This site is made for Gen 1 dragon lovers, who search for certain dream dragon or look for profit.</p>
      <Navigation />
      <h2>Recently added dragons:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <p>show all</p>

      <h2>Recently added schemes:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <p>show all</p>
    </div>
  );
}

export default App;
