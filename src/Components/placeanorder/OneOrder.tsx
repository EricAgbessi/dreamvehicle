import { Box, Button, VStack } from '@chakra-ui/react';
import {animate, motion} from 'framer-motion'
import React, { useState } from 'react';


interface OneOrderI{
    images:string
}

const OneOrder = (props:OneOrderI) => {

    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }

    const OneOrderStyle={
        backgroundImage:props.images
    }

    const [show,setShow]=useState(false)
    const hover_animate=()=>{
        console.log("eric")
        setShow(true)
    }

    const hover_leave=()=>{
        setShow(false)
    }

    

    return (
        <Box 
            as={motion.div}
            initial={{
                y:"300px",
                opacity:0
            }}

            whileInView={{
                y:"0px",
                opacity:1
            }}
            transition={{
               
            }}
            

            h="300px" margin="40px" w={["100%","100%","40%","40%","40%"]} 
            onMouseEnter={hover_animate}
            onMouseLeave={hover_leave}
            bgPosition="center"
            bgSize="cover"
            bgImage={props.images}
        >
            {show? 
                <motion.div 
                    initial={{
                        opacity:0,
                        
                    }}
                    transition={{
                        type:"spring",
                        duration:2
                    }}
                   

                    whileHover={{
                        opacity:1
                    }}

                    whileTap={{
                        scale:1.2
                    }}

                    style={
                    { 
                        backgroundColor:"rgba(0,0,0,70%)",
                        height:"300px",
                        width:"100%",
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        alignItems:"center"
                    }   
                }
            
                >
                    <Button bgColor="#000000" color="white">BUY NOW</Button>
                </motion.div >
                : 
                ""
            }
            
        </Box>
    );
};

export default OneOrder;