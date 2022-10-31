import { Button, HStack, Link, Text,Box, useDisclosure,Input  } from '@chakra-ui/react';
import {AiOutlineAlignLeft} from 'react-icons/ai'
import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'


  const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

    const breakpoints = {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
      }
      
      


    return (
        <>

        <HStack  w="100%" marginTop="10px" paddingRight={['2%','2%','2%','10%']} paddingLeft={['2%','2%','2%','10%']} justifyContent="space-between" fontFamily="Georgia" >
            <Button display={["flex","flex","flex","none","none"]} ref={btnRef}  onClick={onOpen}>
                <AiOutlineAlignLeft />
            </Button>
            <Text as="b">TESLA</Text>
            <Box display={["none","none","none","flex"]}  >
                <Link paddingRight="15px">HOME</Link>
                <Link paddingRight="15px">ABOUT</Link>
                <Link paddingRight="15px">SERVICES</Link>
                <Link paddingRight="15px">CONTACT US</Link>
            </Box>
            <Button bgColor="#000000" color="white" fontSize="14px">SIGN UP</Button>
        </HStack>


        {/** Appere on mobile only */}
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
          </DrawerBody>

          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
);
};

export default Header;