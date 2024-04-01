import React from 'react';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import SongCard from './components/SongCard';
import songData from "./assets/songs.json";
// songData.forEach((item) => {
//   item.coverArt = process.env.PUBLIC_URL + "/" + item.coverArt;
// });
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>
            {songData.map((item, index) => ( 
                <SongCard title={item.title} artist={item.artist} album={item.album} duration={item.duration} coverArt={item.coverArt}/>
              ))}
            
          </p>
          
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
