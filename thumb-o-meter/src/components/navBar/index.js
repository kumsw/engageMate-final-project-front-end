import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoutButton from "../logout/index";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ThemeToggler from "../theme";
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
  const result = useRoleContext();
  const role = result[0];
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
      {/* <Icon as={FaCat} /> */}
      <ThemeToggler />
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
