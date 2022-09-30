import React, { useEffect, useState } from "react";
import img1 from "../../Layout/img/mainafterlogin.png";
import { Link } from "react-router-dom";
import { Box } from "../Styled/Box";
import styled from "styled-components";
import { PageDiv } from "../../pages/Recruit";
import { useAuth } from "../../Context/auth/auth";
import AlarmModal from "../Common/AlarmModal";
const MainPage = () => {
  const [editMode, setEditMode] = useState(false);

  const auth = useAuth();
  const { user } = auth;
  const [modalOpen, setModalOpen] = useState(null);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <PageDiv style={{ fontFamily: "Neo" }}>
      <Container></Container>
      <div style={{ position: "fixed", float: "right" }}>
        <Box
          style={{
            height: "200px",
            width: "500px",
            borderRadius: "15px",
            marginRight: "10px",
            position: "fixed",
            top: "100px",
            right: "30px",
          }}
        >
          <h style={{ fontSize: "25px" }}>{user.nickname} 님의 프로필</h>
        </Box>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          fontSize: "20px",
        }}
      >
        <Box style={{ height: "200px", borderRadius: "15px" }}>
          어떤 서비스를 이용하실래요?
          <div>
            <Link to={"/timetable"}>
              <div>
                <button
                  style={{
                    color: "black",
                    fontSize: "15px",
                    height: "30px",
                    borderRadius: "6px",
                    fontFamily: "Neo",
                    marginBottom: "10px",
                  }}
                >
                  1. 시간표 어쩌고
                </button>
              </div>
            </Link>
            <div>
              <Link to={"/recruit"}>
                <button
                  style={{
                    color: "black",
                    fontSize: "15px",
                    height: "30px",
                    borderRadius: "6px",
                    fontFamily: "Neo",
                    marginBottom: "10px",
                  }}
                >
                  2. 납치 어쩌고
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/give"}>
                <button
                  style={{
                    color: "black",
                    fontSize: "15px",
                    height: "30px",
                    borderRadius: "6px",
                    fontFamily: "Neo",
                    marginBottom: "10px",
                  }}
                >
                  3. 후원 어쩌고
                </button>
              </Link>
              <div>
                <Link to={"/myprofile"}>
                  <button
                    style={{
                      color: "black",
                      fontSize: "15px",
                      height: "30px",
                      borderRadius: "6px",
                      fontFamily: "Neo",
                      marginBottom: "10px",
                    }}
                  >
                    4. 내 프로필 관리하기
                  </button>
                </Link>
              </div>
              <button
                style={{
                  color: "black",
                  fontSize: "15px",
                  height: "30px",
                  borderRadius: "6px",
                  fontFamily: "Neo",
                  marginBottom: "10px",
                }}
                onClick={openModal}
              >
                5. 📩알람 확인하기
              </button>
              <AlarmModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                header={`📰 ${user?.alarm.length}개의 알람`}
                alarm={user?.alarm}
              ></AlarmModal>
            </div>
          </div>
        </Box>
      </div>
    </PageDiv>
  );
};

export default MainPage;

const Container = styled.div`
  position: absolute;
  top: 50;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${img1});
  background-size: cover;
`;
