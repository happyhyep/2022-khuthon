import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RecruitButton = () => {
  //const [isRequest, setIsRequest] = useState(false);
  const onRequestHandler = async (targetUserId) => {
    //alert(`❗친구요청실패❗${e}`); //주석지우기 (8/23)
    //setIsRequest(true);
    // 지우기 (8/23)
    alert("후원 완료! 10000원이 차감됩니다");
  };

  return (
    <>
      <button
        onClick={() => {
          onRequestHandler();
        }}
        style={{
          paddingBottom: "1px",
          height: "50px",
          marginTop: "10px",
          fontSize: "13px",
          fontFamily: "Neo",
          color: "black",
          borderRadius: "8px",
        }}
      >
        💌 후원하기
      </button>
    </>
  );
};

export default RecruitButton;
