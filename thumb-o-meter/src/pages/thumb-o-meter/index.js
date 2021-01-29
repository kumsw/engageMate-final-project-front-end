import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar";
import styles from "./index.module.css";
import PtThumb from "../../components/ptThumb";
import SkThumb from "../../components/skThumb";
// import ReducerSkThumb from "../../components/skThumb/skThumbReduce";
import Title from "../../components/heading";
import { LightMode, Text } from "@chakra-ui/react";
import useRoleContext from "../../context/roleContext";
import { successToast, burntToast } from "../../components/toastAlerts/index";
import { Flex, Box, Center, useColorModeValue } from "@chakra-ui/react";
import { config } from "../../config";
import useSocketContext from "../../context/socketContext";
const { url } = config;

const Thumbometer = () => {
  const [data, setData] = useState({});
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
  const context = useSocketContext();
  const socket = context[0];
  async function handleSubmit({ sessionData }) {
    const res = await fetch(`${url}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sessionData),
    });

    if (res.status === 200) {
      successToast({
        name: "Session Submit Success.",
        message: "successfully submitted data from the session.",
      });
    } else {
      burntToast({
        name: "Failed Session Submission",
        message: "failed to submit session data to the database.",
      });
    }
  }

  const result = useRoleContext();
  const role = result[0];
  const loggedUser = result[2];
  const name = loggedUser?.given_name;

  useEffect(() => {
    //join room request - get name, role from auth
    socket.emit("joinroom", {
      name: name, //take from auth
      role: role,
      room: "thumbometer",
    });

    //start thumb session listener - destructures data and timer, sets state
    socket.on("startThumb", ({ sessionData, timer }) => {
      setData(sessionData);
      setTime(timer);
    });

    //listen for thumb update, take in session data
    socket.on("thumbUpdate", ({ sessionData }) => {
      setData(sessionData);
    });

    // listen for counter changes
    socket.on("counter", (counter) => {
      setCount(counter);
    });

    //finished listener - sets final data state
    socket.on("finished", handleFinishEvent);

    // Clean up
    return () => {
      socket.emit("leaveThumb");

      socket.off("finished", handleFinishEvent);
    };
  }, []);

  function handleFinishEvent({ sessionData }) {
    setData(sessionData);

    role === "coach" &&
      name === sessionData.coach &&
      handleSubmit({ sessionData });

    setCount(0);
  }

  function startSession({ question, timer, throwaway }) {
    socket.emit("start", { question, timer, name, throwaway });
  }

  function endSession() {
    socket.emit("stopTimer");
  }

  function submitData(val) {
    socket.emit("submission", { value: val });
  }

  return (
    <Flex>
      <Box className={styles.container} bg={bg} color={color} w="100%">
        <NavBar />
        <Center>
          <Text
            className={"player animate__animated animate__heartBeat"}
            style={{ textShadow: "0px 3px 3px#7f56f2" }}
          >
            {" "}
            <Title text="Thumbometer" heading="heading" />
          </Text>
        </Center>

        <Center>
          <LightMode>
            {role !== "bootcamper" && (
              <SkThumb
                data={data}
                startSession={startSession}
                endSession={endSession}
                count={count}
                time={time}
                setTime={setTime}
                bg={bg}
                color={color}
              />
            )}
            {role === "bootcamper" && (
              <PtThumb
                data={data}
                submit={submitData}
                time={time}
                count={count}
                bg={bg}
                color={color}
              />
            )}
          </LightMode>
        </Center>
      </Box>
    </Flex>
  );
};

export default Thumbometer;
