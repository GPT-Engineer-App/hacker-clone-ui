import React from "react";
import { Box, Heading, Link, Text, Flex, Spacer, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const stories = [
  {
    id: 1,
    title: "Show HN: My new project",
    url: "#",
    points: 42,
    user: "johndoe",
    commentCount: 5,
  },
  {
    id: 2,
    title: "Ask HN: How do you stay motivated?",
    url: "#",
    points: 28,
    user: "janedoe",
    commentCount: 12,
  },
  // Add more stories...
];

const Index = () => {
  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Flex alignItems="center" marginBottom={4}>
        <Heading size="xl" color="orange.500">
          Hacker News
        </Heading>
        <Spacer />
        <Link href="#" fontWeight="bold">
          login
        </Link>
      </Flex>

      <VStack spacing={4} alignItems="stretch">
        {stories.map((story) => (
          <Box key={story.id} borderWidth={1} borderRadius="md" padding={4}>
            <Link href={story.url} fontSize="xl" fontWeight="semibold">
              {story.title}
            </Link>
            <HStack spacing={4} marginTop={2}>
              <Text fontSize="sm" color="gray.500">
                {story.points} points
              </Text>
              <Text fontSize="sm" color="gray.500">
                by {story.user}
              </Text>
              <HStack spacing={1}>
                <Icon as={FaHeart} color="red.500" />
                <Text fontSize="sm" color="gray.500">
                  {story.points}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <Icon as={FaComment} color="gray.500" />
                <Text fontSize="sm" color="gray.500">
                  {story.commentCount}
                </Text>
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
