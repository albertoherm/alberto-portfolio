import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <Box p={5} maxWidth="800px" mx="auto">
      <Text fontSize="xl" fontWeight="bold" mb={5}>
        Selected projects
      </Text>
      {[...Array(3)].map((_, index) => (
        <Flex key={index} mb={5} direction="row" align="center">
          <Box flex="1">
            <Text fontSize="sm" color="gray.500">
              2019 - present
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              This is a project name! Name wisely!
            </Text>
            <Text mb={2}>
              Fill your project brief here. It can be the outcome of the
              project, or some success metrics, or a cheesy tagline.
            </Text>
            <Link as={RouterLink} to="/project-detail" color="teal.500">
              Try it out ↗️
            </Link>
          </Box>
          <Box ml={5}>
            <Image
              src="path_to_project_thumbnail.jpg"
              boxSize="100px"
              borderRadius="md"
            />
          </Box>
        </Flex>
      ))}
      <Link as={RouterLink} to="/all-projects" color="teal.500">
        View all projects ➔
      </Link>
    </Box>
  );
}

export default Projects;
