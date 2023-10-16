import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const ErrorPage = () => {
    return (
        <Box
            textAlign="center"
            py={{ base: 6, md: 10 }}
            px={{ base: 4, md: 6 }}
            h={{ base: '100vh', md: 'auto' }}
            d="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
        >
            <Heading fontSize={{ base: '5xl', md: '9xl' }} fontWeight="extrabold" color="#38B2AC" letterSpacing="widest">
                404
            </Heading>
            <Box
                bgColor="#FFFFFF"
                boxShadow="2xl"
                p={2}
                fontWeight="bold"
                fontSize={{ base: 'md', md: 'md' }}
                borderRadius="md"
                transform={{ base: 'none', md: 'rotate(12deg)' }}
                position="absolute"
                top={{ base: 'auto', md: '57%' }}
                left={{ base: '50%', md: '46%' }}
                border={{ base: '1.5px solid #c2c2c2', md: 'none' }}
            >
                Page Not Found
            </Box>
        </Box>
    );
}

export default ErrorPage;
