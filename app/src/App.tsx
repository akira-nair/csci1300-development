import React, { useState } from 'react';

import './App.css';
import { Box, Button, ChakraProvider, HStack, Heading, VStack } from '@chakra-ui/react';
import SongCard from './components/SongCard';
import songData from "./assets/songs.json";
import FilterBox from './components/FilterBox';
import PlaylistPreview from './components/PlaylistPreview';
// songData.forEach((item) => {
//   item.coverArt = process.env.PUBLIC_URL + "/" + item.coverArt;
// });

export interface Song {
  id: number,
  title: string,
  artist: string,
  duration: number
}

function App() {
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [time, setTime] = useState<number>(0)
  const [sortBy, setSortBy] = useState('');

  const handleSort = (event: any): void => {
    setSortBy(event.target.value);
  };

  const allLangs = ["Korean", "English", "Vietnamese", "Japanese", "Dzongkha", "Hindi"]
  const [filter, setFilter] = useState<string[]>(allLangs)
  const [sliderValues, setSliderValues] = useState([60, 200]);

  const handleSliderChange = (newValues: number[]): void => {
    setSliderValues(newValues);
  };

  const updatePlaylist = (newSong: Song): void => {
    if (playlist.some(song => song.id === newSong.id)) {
      const newList: Song[] = playlist.filter(song => song.id !== newSong.id);
      setPlaylist(newList);
      setTime(time - newSong.duration)
    }
    else{
      const newList: Song[] = [...playlist, newSong];
      setPlaylist(newList);
      setTime(time + newSong.duration)
    }
    
  };

  const updateTime = (add: number): void => {
    setTime(time + add)
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
          <HStack align={'baseline'} spacing={'30px'} marginTop={'50px'} width={'60%'}>
            <Box width={'80%'}>
              {/* <Heading margin={'30px'}>Make a playlist!</Heading> */}
              <FilterBox addFilterFunc={addFilter} removeFilterFunc={removeFilter}
                sliderVals={sliderValues}
                handleSliderFunc={handleSliderChange} setSort={handleSort} />
              <VStack align={'stretch'} spacing={'20px'} margin={'30px'}>
                {
                  songData
                  .filter(item => filter.includes(item.language) && item.duration <= sliderValues[1] && item.duration >= sliderValues[0])
                  .sort((a, b) => {
                    if (sortBy === 'duration') {
                      return a.duration - b.duration;
                    }

                    else {
                      return 0; // No sorting applied
                    }
                  })
                  .map((item, index) => (
                    <SongCard
                      key={index}
                      id={item.id}
                      title={item.title}
                      artist={item.artist}
                      album={item.album}
                      duration={item.duration}
                      coverArt={item.coverArt}
                      altText={item.altText}
                      playlist={playlist}
                      updatePlaylistFunc={updatePlaylist}
                      updateTimeFunc={updateTime}
                    />
                  ))
                }
                
              </VStack>
              {/* <VStack align={'stretch'} spacing={'20px'} margin={'30px'}>
                
                {songData.map((item, index) => (
                  (filter.includes(item.language) && item.duration <= sliderValues[1] && item.duration >= sliderValues[0]) ? (
                  <SongCard title={item.title} artist={item.artist} album={item.album} duration={item.duration} coverArt={item.coverArt} updatePlaylistFunc={updatePlaylist} updateTimeFunc={updateTime}/>
                ) :
                null))}
              </VStack> */}
            </Box>
            <VStack>
              <PlaylistPreview songs={playlist} time={time} />
              <Button marginTop={'20px'} onClick={() => {
                setPlaylist([]);
                setTime(0);
              }}>
                Reset
              </Button>
            </VStack>
          </HStack>

        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
