import { Stack, VStack ,Text} from '@chakra-ui/react';
import React from 'react';
import OneOrder from './OneOrder';

const Placeanorder = () => {

    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }


    return (   
            <Stack w="100%" direction={["column","column","row","row","row"]} 
                justifyContent="center" alignItems="center"
            >
                <OneOrder images="https://cap.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcap.2F2021.2F11.2F03.2F2a401880-ee5d-439c-b927-008f159fb7c8.2Ejpeg/1200x630/background-color/ffffff/focus-point/798%2C637/quality/70/la-tesla-model-3-de-base-gagne-en-autonomie-pour-le-meme-prix-1418999.jpg"/>
                <OneOrder images="https://3dnews.ru/assets/external/illustrations/2022/01/19/1058271/ryzen_01.jpg"/>
            </Stack>
        );
};

export default Placeanorder;