import React, { useState } from 'react';

import './App.css';
import { ChakraProvider, HStack, Heading, VStack } from '@chakra-ui/react';
import SongCard from './components/SongCard';
import songData from "./assets/songs.json";
import FilterBox from './components/FilterBox';
import PlaylistPreview from './components/PlaylistPreview';
// songData.forEach((item) => {
//   item.coverArt = process.env.PUBLIC_URL + "/" + item.coverArt;
// });

export interface Song {
  title: string,
  artist: string
}

function App() {
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [time, setTime] = useState<number>(0)
  const allLangs = ["Korean", "English", "Vietnamese", "Japanese", "Dzongkha", "Hindi"]
  const [filter, setFilter] = useState<string[]>(allLangs)
  const updatePlaylist = (newSong: Song): void => {
    const newList: Song[] = [...playlist, newSong];
    setPlaylist(newList);
  };
  const updateTime = (add: number): void => {
    setTime(time+add)
  }
  const addFilter = (newFilter: string): void => {
    if (allLangs.every((element) => filter.includes(element))) {
      const newList: string[] = [newFilter];
      setFilter(newList);
    }
    else {
      const newList: string[] = [...filter, newFilter];
      setFilter(newList);
    }
    
  };

  const removeFilter = (newFilter: string): void => {
    const newList: string[] = filter.filter(item => item !== newFilter);
    setFilter(newList);
    if (newList.length == 0) {
      setFilter(allLangs);
    }
    
  };

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <HStack align={'stretch'} spacing={'30px'}>
            <div>
              {/* <Heading margin={'30px'}>Make a playlist!</Heading> */}
              <FilterBox addFilterFunc={addFilter} removeFilterFunc={removeFilter} />
              <VStack align={'stretch'} spacing={'20px'} margin={'30px'}>
                
                {songData.map((item, index) => (
                  filter.includes(item.language) ? (
                  <SongCard title={item.title} artist={item.artist} album={item.album} duration={item.duration} coverArt={item.coverArt} updatePlaylistFunc={updatePlaylist} updateTimeFunc={updateTime}/>
                ) :
                null))}
              </VStack>
            </div>
            <PlaylistPreview songs={playlist} time={time}/>
          </HStack>

        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
