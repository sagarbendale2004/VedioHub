import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "../styles/toast.css";

const Upload = ({ onVideoUpload }) => {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAdd = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      const url = URL.createObjectURL(file);
      onVideoUpload({
        url,
        title: "Uploaded via User's Desktop",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure inventore sit quae. Nemo, fugit.",
      });
      setFile(null);
    }
  };

  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"} />

        <form onSubmit={handleUpload}>
          <HStack>
            <Input
              required
              type={"file"}
              onChange={handleFileChange}
              css={{
                "&::file-selector-button": {
                  border: "none",
                  width: "calc(100% + 36px)",
                  height: "100%",
                  marginLeft: "-18px",
                  color: "purple",
                  backgroundColor: "white",
                  cursor: "pointer",
                },
              }}
            />

            {show && (
              <div className="toast-container ">
                <div className="toast">
                  Vedio Uploaded..<span>x</span>
                </div>
              </div>
            )}

            <Button colorScheme={"purple"} type={"submit"} onClick={handleAdd}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;

// const Toasts = () => {
//   return (
//     show && (
//       <div className="toast-container ">
//         <div className="toast">Vedio Uploaded..</div>
//       </div>
//     )
//   );
// };
