import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/noticelist.css";

const Table = ({ columns, data }) => {
  return (
    <table className="tabel-list">
      <thead className="table-head py-3 px-4 d-none d-lg-block bg-light">
        <tr className="row align-items-sm-center text-center text-dark">
          <th className="col-sm-7">{columns[1]}</th>
          <th className="col-sm-2">{columns[2]}</th>
          <th className="col-sm-3">{columns[3]}</th>
        </tr>
      </thead>

      {data.map(({ number, title, person, date }) => (
        <tbody className="table-content py-3 px-4 notice-wrapper row align-items-sm-center text-center text-dark important">
          <tr>
            <td id={number} className="col-sm-7">
              {title}
              <div className="tag">
                <Link to="#" className="category">
                  프로그램 참여
                </Link>
                <Link to="#" className="category">
                  참여신청
                </Link>
                <Link to="#" className="category">
                  특강
                </Link>
              </div>
            </td>
            <td id={number} className="col-sm-2">
              {person}
            </td>
            <td id={number} className="col-sm-3">
              {date}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
