import React, { useEffect } from "react";
import style from "./index.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Icon,
} from "@chakra-ui/react";
import { IoTrashBinOutline } from "react-icons/io5";

function SessionTable({ tableData, deleteSession }) {
  // Filter by Throwaway
  let filteredData;
  function filterByThrowaway(value) {
    filteredData = tableData.filter((session) => session.throwaway === value);
  }
  useEffect(() => {
    filterByThrowaway(true);
  }, []);

  return (
    <Table variant="simple">
      <TableCaption placement="top">Registered users</TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Date</Th>
          <Th>Question</Th>
          <Th>Outcome</Th>
          <Th>Coach</Th>
          <Th>Participants</Th>
          <Th>Responses</Th>
          <Th>Throwaway</Th>
        </Tr>
      </Thead>
      <Tbody>
        {filteredData.map((session, index) => {
          return (
            <Tr key={index}>
              <Td>
                <Icon
                  as={IoTrashBinOutline}
                  onClick={() => deleteSession(session.uuid)}
                />
              </Td>
              <Td>{session.date}</Td>
              <Td>{session.question}</Td>
              <Td>{session.outcome + "%"}</Td>
              <Td>{session.coach}</Td>
              <Td>{session.participants}</Td>
              <Td>{session.responses}</Td>
              <Td>{session.throwaway ? " ✅ " : "❌ "}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default SessionTable;
