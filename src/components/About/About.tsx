import { Box, Heading, Text } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>
        Acerca de Mí
      </Heading>
      <Text fontSize="lg">
        Soy un apasionado desarrollador con experiencia en...
      </Text>
    </Box>
  );
}

export default About;
