import { Card, CardBody, Image, Text, Heading, Button, VStack, Box } from "@chakra-ui/react";

import { Song } from "../App";
import { useState } from "react";

export function TimeToText(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time % 60);
  
    const minutesStr: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
    return `${minutesStr}:${secondsStr}`;
  }

function SongCard(props: { id: number, title: string, artist: string, album: string, duration: number, coverArt: string, altText: string, playlist: Song[], updatePlaylistFunc: (newSong: Song)=>void , updateTimeFunc: (add: number)=>void }){
    const inPlaylist = props.playlist.some(song => song.id === props.id)
    return (
        <Card>
            <CardBody display={'flex'} justifyContent={'space-between'}>
                <Image src={props.coverArt} width={40} height={40} aria-label={props.altText}/>
                <Box display={'flex'} flex={1} justifyContent={'space-between'}>
                    <VStack align={'stretch'} textAlign={'left'} padding={'5%'}>
                        <Heading fontSize={'large'}>{props.title}</Heading>
                        <Text fontSize={'small'}>{props.artist}</Text>
                        <Text fontSize={'small'}>{props.album}</Text>
                        <Text fontSize={'small'}>{TimeToText(props.duration)}</Text>
                    </VStack>
                    <VStack>
                    <Button color={inPlaylist ? "salmon" : "black"} onClick={() => {
                        props.updatePlaylistFunc({id: props.id, title: props.title, artist: props.artist, duration: props.duration})
                        // props.updateTimeFunc(props.duration)
                    }}>{inPlaylist ? "Remove from Playlist" : "Add to Playlist"}</Button>
                    {/* <Button onClick={() => {
                        props.updatePlaylistFunc({title: props.title, artist: props.artist})
                        props.updateTimeFunc(props.duration)
                    }}>Remove from Playlist</Button> */}
                    </VStack>
                </Box>
            </CardBody>
        </Card>
    )
}

export default SongCard;