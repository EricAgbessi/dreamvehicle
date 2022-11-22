import React from 'react';
import { Stack,HStack, Text, VStack,Button } from '@chakra-ui/react';


const Autorizied = () => {
    const bgimage:string="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/12630-2018-tesla-model-3-long-range"

    return (
        <Stack direction={['column','column','row','row','row']}  paddingLeft={["0%","0%","0%","10%"]}   w="100%" justifyContent="flex-start" >
            <VStack  
                bgImage={[bgimage,bgimage,"","",""]}
                bgRepeat="no-repeat"
                color={["white","white","black","black","black"]}
                w={["100%","100%","40%","40%","40%"]} 
                alignItems="flex-start" spacing="10" 
                padding="14px" 
                > 

                <Text fontSize={["3xl","3xl", "3xl", "3xl","3xl"]} as="b" textShadow={["2px 2px 20px #000000","2px 2px 20px #000000","0px 0px 0px #000000","0px 0px 0px #000000","0px 0px 0px #000000"]} >
                    Become An Autorizied Dealer With Us
                    
                </Text>
                <Text textShadow={["3px 0px 6px #000000","3px 0px 6px #000000","0px 0px 0px #000000","0px 0px 0px #000000","0px 0px 0px #000000"]} >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium tempore maxime libero iusto saepe cumque molestiae, atque tempora modi explicabo qui labore exercitationem omnis cum in recusandae, sequi, harum laudantium!
                </Text>


                <HStack  w="100%" spacing="10" justifyContent={["center","center","flex-start","flex-start","flex-start"]} color={["black","black","black","black","black"]}>
                    <VStack as="b" fontSize="14px"
                        w="400px"
                        h="50px"
                        bgPosition="center"
                        bgSize="cover"
                        bgImage="https://img.favpng.com/9/7/12/google-play-apple-app-store-android-png-favpng-f9STBvT458YngQUdDErUdr7Ym.jpg"
                    >    
                    </VStack>

                    <VStack as="b" fontSize="14px"
                        w="400px"
                        h="50px"
                        bgSize="cover"
                        bgPosition="center"
                        bgColor="#000000"
                        bgImage="https://www.ranchomissionviejo.com/assets/images/app-store-google-icon-white.png"
                    >
                        
                    </VStack>

                   
                </HStack>
            </VStack>
            <VStack  h="500px" w="50%" 
                display={["none","none","flex","flex","flex"]}
                bgRepeat="no-repeat"
                bgPosition="center"
                bgImage="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/12630-2018-tesla-model-3-long-range">
            </VStack>
       </Stack>
    );
};

export default Autorizied;