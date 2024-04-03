import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import { Song } from "../App";
import { time } from "console";
import { TimeToText } from "./SongCard";
import { useState } from "react";

function PlaylistSong(props: {song:Song}){
    
    return (
        <Box paddingTop={'20px'}>
            <Text fontSize={'small'}>{props.song.title} by {props.song.artist}</Text>
        </Box>
    )
}



function PlaylistPreview(props: {songs: Song[], time: number}){
    return (
        <Box>
           <Heading margin={'30px'}>Your playlist</Heading>
           <Text fontSize={'small'}>Total duration: {TimeToText(props.time)}</Text>
           <Divider/>
           {/* <PlaylistSong title="Title" artist="Artist"/> */}
           {props.songs.map((item, index) => (
                <PlaylistSong song={item}/>
           ))}
           
           
        </Box>

    )
}

export default PlaylistPreview;