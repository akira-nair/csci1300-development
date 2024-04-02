import { Card, CardBody, Image, Text, Heading, Button, VStack, Box } from "@chakra-ui/react";

import { Song } from "../App";

export function TimeToText(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time % 60);
  
    const minutesStr: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
    return `${minutesStr}:${secondsStr}`;
  }

function SongCard(props: { title: string, artist: string, album: string, duration: number, coverArt: string, updatePlaylistFunc: (newSong: Song)=>void , updateTimeFunc: (add: number)=>void }){
    return (
        <Card>
            <CardBody display={'flex'} justifyContent={'space-between'}>
                <Image src={props.coverArt} width={40} height={40}></Image>
                <Box display={'flex'} flex={1} justifyContent={'space-between'}>
                    <VStack align={'stretch'} textAlign={'left'} padding={'5%'}>
                        <Heading fontSize={'large'}>{props.title}</Heading>
                        <Text fontSize={'small'}>{props.artist}</Text>
                        <Text fontSize={'small'}>{props.album}</Text>
                        <Text fontSize={'small'}>{TimeToText(props.duration)}</Text>
                    </VStack>
                    <Button onClick={() => {
                        props.updatePlaylistFunc({title: props.title, artist: props.artist})
                        props.updateTimeFunc(props.duration)
                    }}>Add to Playlist</Button>
                </Box>
            </CardBody>
        </Card>
    )
}

export default SongCard;