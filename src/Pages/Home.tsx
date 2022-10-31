import React from 'react';
import { VStack,Text } from '@chakra-ui/react';
import Header from '../Components/Header';
import Landing from '../Components/Landing';
const Home = () => {
    return (
        <VStack>
            <Header />
            <Landing />
        </VStack>
    );
};

export default Home;