import { Stack,HStack, Text, VStack,Button } from '@chakra-ui/react';
import React from 'react';

const Landing = () => {
    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
      }
      const bgimage:string="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/12630-2018-tesla-model-3-long-range"
    return (
       <Stack direction={['column','column','row','row','row']}  paddingLeft={["0%","0%","0%","10%"]}   w="100%" h="500px" justifyContent="flex-start" >
            <VStack  
                bgImage={[bgimage,bgimage,"","",""]}
                bgRepeat="no-repeat"
                color={["white","white","black","black","black"]}
                w={["100%","100%","40%","40%","40%"]} 
                alignItems="flex-start" spacing="10" 
                padding="15px" 
                > 

                <Text fontSize={["3xl","3xl", "3xl", "5xl","5xl"]} as="b" textShadow={["2px 2px 20px #000000","2px 2px 20px #000000","0px 0px 0px #000000","0px 0px 0px #000000","0px 0px 0px #000000"]} >
                    Get Your Dream Vehicle
                    <span style={{color:"#C56088"}}>Today</span>
                </Text>
                <Text textShadow={["3px 0px 6px #000000","3px 0px 6px #000000","0px 0px 0px #000000","0px 0px 0px #000000","0px 0px 0px #000000"]} >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium tempore maxime libero iusto saepe cumque molestiae, atque tempora modi explicabo qui labore exercitationem omnis cum in recusandae, sequi, harum laudantium!
                </Text>

                <Button border="1px solid red" bgColor="#000000" color="white" fontSize="14px">GET STARTED</Button>


                <HStack  w="100%" spacing="10" justifyContent={["center","center","flex-start","flex-start","flex-start"]}>
                    <VStack as="b" fontSize="14px">
                        <Text >20K+</Text>
                        <VStack  spacing="0px">
                            <Text>Happy</Text>
                            <Text>Costumer</Text>
                        </VStack>
                    </VStack>

                    <VStack as="b" fontSize="14px">
                        <Text  >300K+</Text>
                        <VStack spacing="0px">
                            <Text>Cars</Text>
                            <Text>Delivery</Text>
                        </VStack>
                        
                    </VStack>

                    <VStack  as="b" fontSize="14px" padding="0px"  >
                        <Text >400K+</Text>
                        <VStack spacing="0px">
                            <Text marginBottom="0px" paddingBottom="0px">Service</Text>
                            <Text>Station</Text>
                        </VStack>
                    </VStack>

                    <VStack as="b" fontSize="14px">
                        <Text >14000K+</Text>
                        <VStack spacing="0px">
                            <Text>Milles</Text>
                            <Text>Driven</Text>
                        </VStack>
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

export default Landing;