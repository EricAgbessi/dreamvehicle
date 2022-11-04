import { HStack, Text, VStack,Box, Stack } from '@chakra-ui/react';
import {AiOutlineCar,AiTwotoneStar} from 'react-icons/ai'
import {BsShieldCheck} from 'react-icons/bs'
import {} from 'react-icons/ai'
import React from 'react';
import OneWhy from './OneWhy';

const Whychoseus = () => {

    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }

    return (
    <VStack  spacing="80px" alignItems="center" justifyContent="center">
        <Text fontSize='3xl'>WHY CHOOSE US ?</Text>
        <Stack direction={["column","column","row","row","row"]} w="100%" justifyContent="center" spacing="20">
            <OneWhy 
                title="Carbon Neutral" 
                descrition="Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit.Lorem ipsum dolor sit 
                amet consectetur.dipisicing elit.Lorem ipsum dolor sit amet consecteturadipisicing elit.
                Lorem ipsum dolor sit amet consectetur.dipisicing elit.Lorem ipsum dolor sit amet consectetur" 
                icon={<AiOutlineCar size="40px" />}
                Boxshadow=""      
            />


            <OneWhy 
                title="Durable" 
                descrition="Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit.Lorem ipsum dolor sit 
                amet consectetur.dipisicing elit.Lorem ipsum dolor sit amet consecteturadipisicing elit.
                Lorem ipsum dolor sit amet consectetur.dipisicing elit.Lorem ipsum dolor sit amet consectetur" 
                icon={<BsShieldCheck size="40px" />}
                Boxshadow="0px 1px 49px 0px rgba(0,0,0,0.75);"      
            />



            <OneWhy 
                title="Micheline Start" 
                descrition="Lorem ipsum dolor sit amet 
                consectetur, adipisicing elit.Lorem ipsum dolor sit 
                amet consectetur.dipisicing elit.Lorem ipsum dolor sit amet consecteturadipisicing elit.
                Lorem ipsum dolor sit amet consectetur.dipisicing elit.Lorem ipsum dolor sit amet consectetur" 
                icon={<AiTwotoneStar size="40px" />}
                Boxshadow=""      
            />

        </Stack>
    </VStack>
       
    );
};

export default Whychoseus;