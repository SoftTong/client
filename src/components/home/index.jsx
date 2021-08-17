//NOTE HOME CONTENT
import React from "react";
import get_noticelist from "../../service/api/get/get_noticedetail";

const HomeContent = () => {
  const getnoticeList0 = () => {
    get_noticelist(15)
      .then((res) => {
        console.log(res);
        console.log(res.content);
      })
      .catch((err) => console.log(err));
  };

  console.log("getNoticeList");
  getnoticeList0();

  return (
    <>
      <p>home page</p>
    </>
  );
};

export default HomeContent;
