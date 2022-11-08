import React from 'react';
import { VStack,Text, Box } from '@chakra-ui/react';
import Header from '../Components/Header';
import Landing from '../Components/Landing';
import Whychoseus from '../Components/Whychoseus/Whychoseus';
import Placeanorder from '../Components/placeanorder/Placeanorder';
import Autorizied from '../Components/Autorizied';
import Footer from '../Components/Footer';
import {motion,useScroll} from "framer-motion"

const Home = () => {
    const { scrollYProgress } = useScroll();


    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <VStack spacing="80px">
                <Header />
                <Landing />
                <Whychoseus />
                <Box 
                    as={motion.div}
                    initial={{
                        opacity:0,
                        y:"100px"
                    }}

                    whileInView={{
                        opacity:1,
                        y:"0px"
                    }}


                    w="100%"
                    h="500px"
                    bgImage="https://www.motortrend.com/uploads/sites/5/2018/09/2018-Tesla-Model-3-Dual-Motor-Performance-front-three-quarter-in-motion-1.jpg"
                    bgPosition="center"
                    bgSize="cover"               
                ></Box>
                <Placeanorder/>
                <VStack w="100%" spacing="80px" alignItems="center" justifyContent="center">
                    <Text fontSize='3xl' textAlign="center">FIND A CHARGING STATION</Text>
                    <Box 
                        w="100%"
                        h="300px"
                        bgImage="https://img-api.mac4ever.com/1200/0/115252_que-cache-la-tesla-model-3-a-36-800-charge-batterie-autonomie-multimedia.jpg"
                        bgPosition="center"
                        bgSize="cover"               
                    ></Box>
                </VStack>
                <Autorizied/>
                <Footer/>
            
            </VStack>
        </>
        
    );
};

export default Home;