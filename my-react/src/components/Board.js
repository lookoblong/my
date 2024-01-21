import React from "react";
import { useEffect, useState } from "react";

const Board = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("/api/board")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((serverdata) => {
    //     setData(serverdata);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    // console.log(data);

    const fetchData = async () => {
      try {
        const res = await fetch("/api/board");
        const serverdata = await res.json();
        setData(serverdata);
      } catch (error) {
        console.log("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data); //useEffect 외부로 이동

  return (
    <div>
      {data.map((d, index) => (
        <div key={index}>
          <p>글번호 : {d.boardId}</p>
          <p>제목 : {d.boardTitle}</p>
          <p>작성자 : {d.userId} </p>
          <p>조회수 : {d.viewCnt}</p>
          <p>글내용 : {d.boardContent}</p>
        </div>
      ))}
    </div>
  );
};

export default Board;
