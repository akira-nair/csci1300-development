import { Box, HStack, Text, Tag, Select, Button } from "@chakra-ui/react";
import { useState } from "react";

function GenreButton(props: {labelText: string, addFilter: (newFilter: string)=> void, removeFilter: (newFilter: string)=> void}){
    const [filterOn, setFilterOn] = useState(false)
    return (
        <Tag size={'md'} variant='solid' colorScheme={filterOn ? 'teal' : 'gray'} css={{ userSelect: 'none' }} onClick={() => {
            if (filterOn){
                props.removeFilter(props.labelText)
            }
            else{
                props.addFilter(props.labelText)
            }
            
            setFilterOn(!filterOn)
        }}>
            <Text fontSize={'smaller'}>{props.labelText}</Text>
        </Tag>
    )
}

function FilterBox(props: {addFilterFunc: (newFilter: string)=> void, removeFilterFunc: (newFilter: string)=> void}) {
    return (
        <Box backgroundColor={'#3d424f'} opacity={'90%'} color={'white'} width={'100%'}>
            <Text margin={'10px'} fontSize={'medium'}>Filter</Text>
            <HStack justifyContent={'space-evenly'} margin={'10px'}>
                <GenreButton labelText="Korean" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc}/>
                <GenreButton labelText="English" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc}/>
                <GenreButton labelText="Vietnamese" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc}/>
                <GenreButton labelText="Japanese" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc}/>
                <GenreButton labelText="Dzongkha" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc}/>
                <GenreButton labelText="Hindi" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc}/>
            </HStack>
            <Text margin={'10px'} fontSize={'medium'}>Sort by</Text>
            <Select placeholder="Default" padding={'10px'}>
            <option value='duration'>Duration</option>
            </Select>
        </Box>
    )
}

export default FilterBox;