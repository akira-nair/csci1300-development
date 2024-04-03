import { Box, HStack, Text, Tag, Select, Button, Slider, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Heading, SliderMark, Tooltip, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { TimeToText } from "./SongCard";

function GenreButton(props: { labelText: string, addFilter: (newFilter: string) => void, removeFilter: (newFilter: string) => void }) {
    const [filterOn, setFilterOn] = useState(false)
    return (
        <Tag size={'md'} variant='solid' colorScheme={filterOn ? 'teal' : 'gray'} css={{ userSelect: 'none' }} onClick={() => {
            if (filterOn) {
                props.removeFilter(props.labelText)
            }
            else {
                props.addFilter(props.labelText)
            }

            setFilterOn(!filterOn)
        }}>
            <Text fontSize={'smaller'}>{props.labelText}</Text>
        </Tag>
    )
}

function FilterBox(props: { addFilterFunc: (newFilter: string) => void, removeFilterFunc: (newFilter: string) => void, sliderVals: number[], handleSliderFunc: (newValues: number[]) => void, setSort: (event: any) => void }) {

    return (
        <Box backgroundColor={'#3d424f'} opacity={'90%'} color={'white'} width={'100%'} padding={'30px'}>
            <Box marginTop={3}>
                <Heading fontSize={'medium'}>Language</Heading>
                <HStack justifyContent={'space-evenly'} margin={'10px'}>
                    <GenreButton labelText="Korean" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc} />
                    <GenreButton labelText="English" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc} />
                    <GenreButton labelText="Vietnamese" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc} />
                    <GenreButton labelText="Japanese" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc} />
                    <GenreButton labelText="Dzongkha" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc} />
                    <GenreButton labelText="Hindi" addFilter={props.addFilterFunc} removeFilter={props.removeFilterFunc} />
                </HStack>
            </Box>
            <Box marginTop={5}>
                <Heading fontSize={'medium'}>Duration</Heading>
                <RangeSlider
                    aria-label={['min', 'max']}
                    colorScheme='pink'
                    min={0}
                    max={300}
                    defaultValue={[60, 200]}
                    onChange={props.handleSliderFunc}

                >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />

                    </RangeSliderTrack>
                    <Tooltip label={`Min: ${TimeToText(props.sliderVals[0])}`} placement="top">
                        <RangeSliderThumb index={0} />
                    </Tooltip>
                    <Tooltip label={`Max: ${TimeToText(props.sliderVals[1])}`} placement="top">
                        <RangeSliderThumb index={1} />
                    </Tooltip>

                </RangeSlider>
            </Box>
            <Box marginTop={3}>
                <Heading fontSize={'medium'}>Sort by</Heading>
                <Select placeholder="Default" padding={'10px'} onChange={props.setSort}>
                    <option value='duration'>Duration</option>
                </Select>
            </Box>
        </Box>
    )
}

export default FilterBox;