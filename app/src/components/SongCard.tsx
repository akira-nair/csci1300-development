import { Card, CardBody, Image, Text, Heading, Button } from "@chakra-ui/react";


function SongCard(props: {title: string, artist: string, album: string, duration: string, coverArt: string}) {
    return (
        <Card>
            <CardBody>
                <Image src={props.coverArt} width={40} height={40}></Image>
                <Heading size={'l'}>{props.title}</Heading>
                <Text>{props.artist}</Text>
                <Text>{props.album}</Text>
                <Text>{props.duration}</Text>
                <Button onClick={() => {
                    
                }}>Add to Playlist</Button>
            </CardBody>
        </Card>
    )
}

export default SongCard;