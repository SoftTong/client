import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/noticelist.css";

const Table = ({ columns, data }) => {
  return (
    <table className="tabel-list">
      <div className="py-3 px-4 d-none d-lg-block bg-light">
        <div className="row align-items-sm-center text-center text-dark">
          {columns.map((columns) => (
            <span className="table-header" key={columns}>
              {columns}
            </span>
          ))}
        </div>
      </div>
      <div className="card card-frame py-3 px-3 px-sm-4">
        {data.map(({ number, title, person, date }) => (
          <div
            className="table-content notice-wrapper row align-items-sm-center text-center text-dark important"
            key={number + title + person + date}
          >
            <span className="table-body col-lg-1 text-sm-center d-none d-lg-block">
              {number}
            </span>
            <span className="table-body col-lg-6 text-sm-center d-none d-lg-block">
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
            </span>
            <span className="table-body col-lg-2 text-sm-center d-none d-lg-block">
              {person}
            </span>

            <span className="table-body col-lg-3 text-sm-center d-none d-lg-block">
              {date}
            </span>
          </div>
        ))}
      </div>
    </table>
  );
};

export default Table;
