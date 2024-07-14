import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Videos = ({ videosArr }) => {
  const [currentVideo, setCurrentVideo] = useState(videosArr[0]);

  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src={currentVideo.url}
          style={{
            width: "85%",
            height: "85%",
            alignItems: "flex-start",
          }}
        ></video>

        <VStack
          alignItems={"flex-start"}
          p={"8"}
          ml={["", "24"]}
          w={"full"}
          overflowY={"auto"}
        >
          <Heading>{currentVideo.title}</Heading>
          <Text>{currentVideo.description}</Text>
        </VStack>
      </VStack>
      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p="8"
        spacing={"8"}
        overflowY={"auto"}
      >
        {videosArr.map((item, index) => (
          <Button
            key={index}
            variant={"ghost"}
            colorScheme={"purple"}
            onClick={() => setCurrentVideo(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
