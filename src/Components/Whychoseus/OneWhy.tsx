import React, { ReactComponentElement, ReactElement } from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { IoCarSportOutline } from 'react-icons/io5';
import {motion} from "framer-motion"
import "./style.css";

interface Whychoseus{
    title:String;
    descrition:String;
    icon: ReactElement;
    Boxshadow:Boolean;
}

const OneWhy = (props:Whychoseus) => {
    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }


    return (
        <VStack as={motion.div} 
            whileHover={{
                scale:1.2
            }}

            

            w={["90%","90%","15%","15%","15%"]}  color='black' alignItems="center" padding='10px'  
            className={ props.Boxshadow ? "shadow" : ""}
        >
            {props.icon}
            <Text as='b' >{props.title}</Text>
            <Text color='#939393' fontSize='12px' textAlign="center">{props.descrition}</Text>
        </VStack> 
    );
};

export default OneWhy;