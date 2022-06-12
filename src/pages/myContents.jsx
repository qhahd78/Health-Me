import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import styled from "styled-components";
import { ref, query, onValue } from "firebase/database";
import { database } from "../firebase/firebaseApp";

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
  font-size: 19px;
  span {
    font-size: 22px;
    font-weight: 600;
  }
`;

const VideoContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const VideoBox = styled.div`
  text-align: center;
  p {
    text-align: left;
    padding-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Graph = ({ userName = "TEST" }) => {
  const testData = query(ref(database, "test"));
  let nextData;

  onValue(testData, (snapshot) => {
    const firebaseData = snapshot.val();
    nextData = firebaseData;
  });

  const sleepContent = () => {
    let sum = 0;
    let time = 0;
    for (let i = 0; i < nextData.length; i++) {
      time = nextData[i].sleepTime2 - nextData[i].sleepTime1;
      sum += time;
    }
    // 수면 시간이 6시간 이하
    if (6 > sum / 7) {
      return "less";
    } else {
      return "normal";
    }
  };

  // 평균 기분 측정 로직

  const feelContent = () => {
    let sum = 0;
    let feelNum;

    for (let i = 0; i < nextData.length; i++) {
      switch (nextData[i].feel) {
        case "sad":
          feelNum = 1;
          break;
        case "normal":
          feelNum = 2;
          break;
        case "noEmotion":
          feelNum = 3;
          break;
        case "happy":
          feelNum = 4;
          break;
        case "best":
          feelNum = 5;
          break;
        default:
          break;
      }
      sum += feelNum;
    }

    // 기분이 좋지 않음
    if (3 > sum / 7) {
      return "sad";
    } else {
      return "normal";
    }
  };

  // 운동 시간 측정
  const exerciseContent = () => {
    let sum = 0;
    for (let i = 0; i < nextData.length; i++) {
      sum += nextData[i].exerciseTime;
    }
    // 3시 이후로 취침
    if (1 > sum / 7) {
      return "less";
    } else {
      return "normal";
    }
  };

  const sleepVideo = [
    {
      less: [
        {
          src: "https://www.youtube.com/embed/pd3fwkv1MDQ",
          title:
            "[면역연구소] 불면증은 왜 생기나요? 불면증 생기는 4가지 이유 -불면증 증상, 원인, 좋은 수면 형태",
        },
        {
          src: "https://www.youtube.com/embed/cKqGxE9sGDo",
          title: "제26강:불면증! 수면제 없이도 고칠 수있다",
        },
      ],
      normal: [
        {
          src: "https://www.youtube.com/embed/EuIBziCZPsk",
          title:
            "[불면일기 Ep. 02] 4시간만 자도 상쾌하게 일어나는 법.tip | SBS 스페셜",
        },
        {
          src: "https://www.youtube.com/embed/X2iL1zDVx1Y",
          title: "잘 자다가도 자주 깨는 당신, 이 영상 시청! [불면증2_E2]",
        },
      ],
    },
  ];

  const feelVideo = [
    {
      sad: [
        {
          src: "https://www.youtube.com/embed/HyeXf-Poh44",
          title:
            "마음이 우울할 때 꺼내 보는 성장문답 모음.zip1 - 우울 편 | 박상미, 윤대현, 정혜신",
        },
        {
          src: "https://www.youtube.com/embed/r19P3I075pE",
          title: "세바시 800회 내 마음이 지옥일 때 | 이명수 심리기획자",
        },
      ],
      normal: [
        {
          src: "https://www.youtube.com/embed/-WdnF1gh0LU",
          title:
            "할 일을 미루는 당신이 꼭 봐야 할 영상 ㅣ게으름, 무기력, 동기부여, 습관, 뇌과학",
        },
        {
          src: "https://www.youtube.com/embed/c9W414XrdF0",
          title: "밤 명상 ㅣ 잠들기 전 하루를 마무리 하는 고요한 시간",
        },
      ],
    },
  ];

  const exerciseVideo = [
    {
      less: [
        {
          src: "https://www.youtube.com/embed/jNgpAycMVeo",
          title: "[비만예방 홍보영상] 당신의 일상, 운동이 됩니다",
        },
        {
          src: "https://www.youtube.com/embed/AjC-fnYk7oE",
          title: "[코로나19 시대 집콕운동] 제 1편, 생활 속 스트레칭!",
        },
      ],
      normal: [
        {
          src: "https://www.youtube.com/embed/cERLDsQ-Yho",
          title:
            "내 생활에 꼭 맞는 슬기로운 걷기 방법 한국인을 위한 걷기 가이드라인",
        },
        {
          src: "https://www.youtube.com/embed/Rqn-L6M6ZTI",
          title: "운동이 지나치면 독이 될때 나타나는 증상들",
        },
      ],
    },
  ];

  useEffect(() => {
    sleepContent();
    feelContent();
    exerciseContent();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Subtitle>📱{userName} 님을 위한 콘텐츠</Subtitle>
        <ContentsBox>
          <SleepTitle>
            {sleepContent() === "less" ? (
              <p>
                <span>잠을 적게 자는 날</span>이 많으시네요. 🛏️
              </p>
            ) : (
              <p>
                <span>충분한 수면시간</span>을 유지하고 있으시네요. 🙌
              </p>
            )}
          </SleepTitle>

          {sleepContent() === "less" ? (
            <VideoContentsBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={sleepVideo[0].less[0].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{sleepVideo[0].less[0].title}</p>
              </VideoBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={sleepVideo[0].less[1].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{sleepVideo[0].less[1].title}</p>
              </VideoBox>
            </VideoContentsBox>
          ) : (
            <VideoContentsBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={sleepVideo[0].normal[0].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{sleepVideo[0].normal[0].title}</p>
              </VideoBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={sleepVideo[0].normal[1].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{sleepVideo[0].normal[1].title}</p>
              </VideoBox>
            </VideoContentsBox>
          )}
        </ContentsBox>

        <ContentsBox>
          <SleepTitle>
            {feelContent() === "sad" ? (
              <p>
                <span>우울한 일</span>이 많으신가요? 😥
              </p>
            ) : (
              <p>
                <span>좋은 컨디션</span>을 유지하고 있으시네요. 🙌
              </p>
            )}
          </SleepTitle>
          {feelContent() === "sad" ? (
            <VideoContentsBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={feelVideo[0].sad[0].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{feelVideo[0].sad[0].title}</p>
              </VideoBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={feelVideo[0].sad[1].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{feelVideo[0].sad[1].title}</p>
              </VideoBox>
            </VideoContentsBox>
          ) : (
            <VideoContentsBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={feelVideo[0].normal[0].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{feelVideo[0].normal[0].title}</p>
              </VideoBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={feelVideo[0].normal[1].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{feelVideo[0].normal[1].title}</p>
              </VideoBox>
            </VideoContentsBox>
          )}
        </ContentsBox>

        <ContentsBox>
          <SleepTitle>
            {exerciseContent() === "less" ? (
              <p>
                <span>건강한 신체를 위해 운동해봐요 ! 💪</span>
              </p>
            ) : (
              <p>
                <span>꾸준하게 운동을 하셨군요! 💪</span>
              </p>
            )}
          </SleepTitle>
          {exerciseContent() === "less" ? (
            <VideoContentsBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={exerciseVideo[0].less[0].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{exerciseVideo[0].less[0].title}</p>
              </VideoBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={exerciseVideo[0].less[1].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{exerciseVideo[0].less[1].title}</p>
              </VideoBox>
            </VideoContentsBox>
          ) : (
            <VideoContentsBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={exerciseVideo[0].normal[0].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{exerciseVideo[0].normal[0].title}</p>
              </VideoBox>
              <VideoBox>
                <iframe
                  width="180"
                  height="100"
                  src={exerciseVideo[0].normal[1].src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{exerciseVideo[0].normal[1].title}</p>
              </VideoBox>
            </VideoContentsBox>
          )}
        </ContentsBox>
      </Container>
      <Navbar />
    </>
  );
};

export default Graph;
