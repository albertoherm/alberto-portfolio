import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Contact: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={5}>
        Contáctame
      </Heading>
      <Text fontSize="lg" mb={5}>
        Si tienes alguna pregunta o simplemente quieres saludar, no dudes en
        enviarme un mensaje.
      </Text>
      <Button colorScheme="teal">Enviar mensaje</Button>
    </Box>
  );
}

export default Contact;
