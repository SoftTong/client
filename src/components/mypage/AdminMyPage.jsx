//NOTE MyPage ADMIN CONTENT

import React from "react";
import styled from "styled-components";


const TableTitle = styled.div`
    width: 100%;
    height: 50px;
    background-color: rgb(233, 233, 233);
    border-bottom: black;
    padding-left: 20px;
    font-size: 25px;
    font-weight: bold;
    color: rgb(148, 148, 148);
    align-items: center;
    display: flex;
`

const Table = styled.table`
    display: flex;
    height: 650px;
    overflow: auto;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    width: inherit;
`

const THead = styled.thead`
    width: inherit;
    padding: 0 1.5rem;
    
    display : flex;
    position : sticky;
    top : 0;
    background: rgb(255 255 255);
    z-index : 10;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`
const HTr = styled.tr`
height : 48px;
  display: flex;
  align-items: center;
  width: inherit;
  box-sizing: border-box;
  text-align: center !important;
  /* vertical-align: inherit;
    border-color: inherit; */
  /* justify-content: space-between; */
 `


const TBody = styled.tbody`
   width: 100%;
   display: flex;
   border-bottom: 1px rgb(167, 167, 167) solid;
   padding-top: 20px;
   margin-left: 0px !important;
   margin-right: 0px !important;

   height : auto;
   cursor: pointer;
    &:hover {
        color : #1071ae;
        font-weight : 700;
}
 `


// const BTr = styled.tr`
//   width: 100%;
//   display: flex;
//   justify-content: space-between !important;
//   align-items: center;
// `


const AdminMyPage = ({
    pageList,
    isDetailVisible,
    detailHandling,
    paginationNum,
    noticeDetailOnclick,
    detailNoticeData,
    paginationOnclick, }) => {
    return (
        <>
            <TableTitle>MANAGE : 공지사항</TableTitle>

            <Table>
                <THead>
                    <HTr>
                        <th className="col-sm-7">제목</th>
                        <th className="col-sm-2">작성자</th>
                        <th className="col-sm-3">작성일</th>
                    </HTr>
                </THead>

                {pageList.map(
                    (
                        { id, number, title, adminName, uploadDay, tag1, tag2, tag3 },
                        index
                    ) => (
                        <TBody
                            key={index}
                            onClick={() => {
                                noticeDetailOnclick(id);
                            }}

                            className="table-content py-3 px-4 notice-wrapper row align-items-sm-center text-center text-dark important"
                        >
                            <tr>
                                <td id={number} className="col-sm-7 thtitle">
                                    {title}
                                    <div className="tag">
                                        {tag1 ? <span className="tagcategory">{tag1}</span> : null}
                                        {tag2 ? <span className="tagcategory">{tag2}</span> : null}
                                        {tag3 ? <span className="tagcategory">{tag3}</span> : null}
                                    </div>
                                </td>
                                <td id={number} className="col-sm-2">
                                    {adminName}
                                </td>
                                <td id={number} className="col-sm-3">
                                    {uploadDay}
                                </td>
                            </tr>
                        </TBody>
                    )
                )}
            </Table>
            <div className="pagination">
                <ul>
                    {paginationNum.map((i, index) => {
                        return (
                            <li key={index} onClick={paginationOnclick}>
                                {paginationNum[index]}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}


export default AdminMyPage