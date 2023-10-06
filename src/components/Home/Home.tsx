import {
    Box, Flex, Link, Heading, Text, Avatar, Button
  } from "@chakra-ui/react";
  import { Link as RouterLink } from "react-router-dom";
  
  const Home: React.FC = () => {
    return (
      <Box p={5} minHeight="100vh" maxWidth="800px" mx="auto">
        <Flex
          mb={10}
          justifyContent="space-between"
          fontSize="xl"
          align="center"
        >
          <Link as={RouterLink} to="/" fontSize="2xl">
            Alberto Hermosillo
          </Link>
          <Flex>
            <Link as={RouterLink} to="/projects" mr={5}>
              Projects
            </Link>
            <Link as={RouterLink} to="/about" mr={5}>
              About
            </Link>
            <Link as={RouterLink} to="/contact">
              Contact
            </Link>
          </Flex>
        </Flex>
        <Flex direction="column" align="center" mb={10} mt="20%">
          <Avatar size="2xl" src="path_to_your_avatar.jpg" mb={5} />
          <Heading as="h2" size="2xl" mb={5}>
            I craft interfaces
          </Heading>
          <Text fontSize="lg" mb={5} textAlign="center" maxWidth="500px">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Button colorScheme="teal" size="lg" as={RouterLink} to="/magic-land">
            Take me to the magic land
          </Button>
        </Flex>
      </Box>
    );
  }
  
  export default Home;
  