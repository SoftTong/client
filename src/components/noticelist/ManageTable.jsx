import React, { useState } from "react";
import { getManageApplication } from "./api";
import Table from "./Table";

const ManageTable = (props) => {
  const columns = ["번호", "제목", "작성자", "작성일"];
  const [tableData, setTableData] = useState([getManageApplication(1)]);
  // const data = Array(10)
  //   .fill()
  //   .map(() => ({
  //     number: tableData[0][1].number,
  //     title: tableData[0][1].title,
  //     person: tableData.person,
  //     click: tableData.click,
  //     date: tableData.date,
  //   }));
  const data = tableData[0];

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default ManageTable;
