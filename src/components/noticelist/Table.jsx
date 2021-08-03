import React, { useState } from "react";

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((columns) => (
            <th key={columns}>{columns}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ number, title, person, click, date }) => (
          <tr key={number + title + person + click + date}>
            <td>{number}</td>
            <td>{title}</td>
            <td>{person}</td>
            <td>{click}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
