import React from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const ContentsBox = styled.div`
  margin-top: 30px;
`;

const SleepTitle = styled.p`
  & > span {
    font-size: 20px;
    font-weight: 600;
  }
`;

const VideoContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
`;

const VideoBox = styled.div`
  text-align: center;
`;

const Graph = ({ userName = "김삿갓" }) => {
  return (
    <>
      <Header />
      <Container>
        <Subtitle>📱{userName} 님을 위한 콘텐츠</Subtitle>
        <ContentsBox>
          <SleepTitle>
            <span>잠에 늦게 드는 날</span>이 많으시네요. 🛏️
          </SleepTitle>
          <VideoContentsBox>
            <VideoBox>
              <iframe
                width="130"
                height="90"
                src="https://www.youtube.com/embed/hnanNlDbsE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>영상제목 어쩌구</p>
            </VideoBox>
            <VideoBox>
              <iframe
                width="130"
                height="90"
                src="https://www.youtube.com/embed/hnanNlDbsE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>영상제목 어쩌구</p>
            </VideoBox>
          </VideoContentsBox>
        </ContentsBox>

        <ContentsBox>
          <SleepTitle>
            <span>우울한 일</span>이 많으신가요? 😥
          </SleepTitle>
          <VideoContentsBox>
            <VideoBox>
              <iframe
                width="130"
                height="90"
                src="https://www.youtube.com/embed/hnanNlDbsE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>영상제목 어쩌구</p>
            </VideoBox>
            <VideoBox>
              <iframe
                width="130"
                height="90"
                src="https://www.youtube.com/embed/hnanNlDbsE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>영상제목 어쩌구</p>
            </VideoBox>
          </VideoContentsBox>
        </ContentsBox>

        <ContentsBox>
          <SleepTitle>
            <span>건강한 신체를 위해 운동해봐요 ! 💪</span>
          </SleepTitle>
          <VideoContentsBox>
            <VideoBox>
              <iframe
                width="130"
                height="90"
                src="https://www.youtube.com/embed/hnanNlDbsE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
              <p>영상제목 어쩌구</p>
            </VideoBox>
            <VideoBox>
              <iframe
                width="130"
                height="90"
                src="https://www.youtube.com/embed/hnanNlDbsE4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
              <p>영상제목 어쩌구</p>
            </VideoBox>
          </VideoContentsBox>
        </ContentsBox>
      </Container>
      <Navbar />
    </>
  );
};

export default Graph;
