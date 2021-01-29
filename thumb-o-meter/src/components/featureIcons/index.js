import { Box, Text, Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./feature.css";

export default function FeatureIcon({ link, heading, myClass, src, alt, id }) {
  return (
    <Center>
      <VStack className={"container"}>
        <Box className={"box"}>
          <Link to={link}>
            <img className={myClass} src={src} alt={alt} />
          </Link>
        </Box>
        <Box className={"textBox"}>
          <Text id={id}>{heading}</Text>
        </Box>
      </VStack>
    </Center>
  );
}
