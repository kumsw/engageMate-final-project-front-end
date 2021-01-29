import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useSocketContext from "../../context/socketContext";
import LogoutButton from "../logout/index";
import {
  HStack,
  Box,
  Flex,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import ThemeToggler from "../themeToggler";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import useRoleContext from "../../context/roleContext";
import { menuItems, coachMenuItems } from "./data";
import styles from "./navBar.module.css";

const MenuItems = ({ children }) => (
  <Text className={styles.menu}>{children}</Text>
);

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const bg = useColorModeValue("white", "#110042");
  const color = useColorModeValue("#110042", "white");
  const context = useSocketContext();
  const socket = context[0];
  const result = useRoleContext();
  const [isRaised, setIsRaised] = useState(false);
  const loggedUser = result[2];
  const name = loggedUser?.given_name;
  const picture = loggedUser?.picture;
  const role = result[0];

  useEffect(() => {
    socket.on("lowerHandRaiseInfo", () => {
      setIsRaised(!isRaised);
    });
  });

  return (
    <Flex
      className={styles.container}
      as="nav"
      bg={bg}
      color={color}
      style={{
        borderBottom: "2px solid #7f56f2",
        position: "sticky",
        top: "0",
      }}
    >
      <Center>
        <ThemeToggler />
        <Link to="/">
          {" "}
          <div>
            <HStack className={styles.logo}>
              <img src="images/circleLogo.png" alt="" />{" "}
              <p className={styles.logoText}>EngageMate</p>
            </HStack>
          </div>{" "}
        </Link>
      </Center>

      <Box className={styles.icon} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        className={styles.box}
        display={{ base: show ? "block" : "none", md: "block" }}
      >
        <Flex className={styles.navigation}>
          {role === "coach"
            ? coachMenuItems.map((item) => {
                return (
                  <MenuItems key={item.value}>
                    <NavLink activeClassName={styles.active} to={item.link}>
                      {item.value}
                    </NavLink>
                  </MenuItems>
                );
              })
            : menuItems.map((item) => {
                return (
                  <MenuItems key={item.value}>
                    <NavLink activeClassName={styles.active} to={item.link}>
                      {item.value}
                    </NavLink>
                  </MenuItems>
                );
              })}
          <LogoutButton bg={bg} color={color} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
