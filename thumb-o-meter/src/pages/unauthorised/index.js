import React, { useEffect } from "react";
import Login from "../../pages/login/index";
import { createStandaloneToast } from "@chakra-ui/react";

const Unauthorised = () => {
  function burntToast(error) {
    const toast = createStandaloneToast();
    toast({
      title: error.name,
      description: error.message,
      status: "warning",
      position: "top",
      duration: 10000,
      isClosable: true,
    });
  }

  useEffect(() => {
    burntToast({
      name: "Unauthorised!",
      message: "Authorisation FAILED, contact administrator",
    });
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
};

export default Unauthorised;
