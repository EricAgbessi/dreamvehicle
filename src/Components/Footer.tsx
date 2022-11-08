import React from 'react';
import { HStack, Image, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react';
import {MdCheckCircle} from 'react-icons/md'
const Footer = () => {

    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
      }

    return (
        <Stack w="100%" direction={["column","column","row","row","row"]} 
        justifyContent="space-between" alignItems="center"  paddingRight={['2%','2%','2%','10%']} paddingLeft={['2%','2%','2%','10%']}>
            <VStack alignItems="flex-start" w={["100%","100%","20%","20%","20%"]}>
                <Text fontSize="2xl" as="b">TESLA</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus consectetur officia reiciendis libero temporibus accusamus m!</Text>
                <HStack>
                <Image
                    borderRadius='full'
                    boxSize='30px'
                    src='https://freepngimg.com/download/facebook/141088-logo-circle-facebook-download-hd.png'
                    alt='Dan Abramov'
                    />

                <Image
                    borderRadius='full'
                    boxSize='30px'
                    src='
                    https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'
                    alt='Dan Abramov'
                    />


                <Image
                    borderRadius='full'
                    boxSize='30px'
                    src='
                    https://cdn-icons-png.flaticon.com/512/145/145808.png'
                    alt='Dan Abramov'
                    />

                </HStack>
            </VStack>
            <VStack alignItems="flex-start">
                <Text fontSize="1xl" as="b">NAVIGATION</Text>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Lorem ipsum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Assumenda
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Quidem
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                 
                    </List>
            </VStack>
            <VStack alignItems="flex-start">
                <Text fontSize="1xl" as="b">TEMPLATE INFO</Text>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Lorem ipsum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Assumenda
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Quidem
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                 
                    </List>
            </VStack>
            <VStack alignItems="flex-start">
                <Text fontSize="1xl" as="b">CONTACT</Text>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Lorem ipsum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Assumenda
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Quidem
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                 
                    </List>
            </VStack>
        </Stack>
    );
};

export default Footer;