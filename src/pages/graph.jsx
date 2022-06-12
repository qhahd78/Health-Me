import React from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import { ResponsiveLine } from "@nivo/line";
import { ref, query, onValue } from "firebase/database";
import { database } from "../firebase/firebaseApp";

const Container = styled.div`
  padding: 0 28px 28px 28px;
`;

const Greeting = styled.p`
  font-size: 20px;
  padding-top: 30px;
  line-height: 24px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 30px;
`;

const CategoryTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const CategoryContent = styled.div`
  background-color: ${COLORS.LIGHT_GRAY};
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin-top: 10px;
`;

const HealthInfoBox = styled(CategoryContent)`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-top: 0;
`;

const HealthContent = styled.div`
  text-align: center;
  background-color: ${COLORS.LIGHT_GRAY};
  border-radius: 10px;
  width: 30%;
  height: 120px;
  margin-top: 10px;
`;

const ContentBox = styled.div`
  p:nth-child(1) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
  p:nth-child(2) {
    font-weight: 700;
    font-size: 28px;
  }
  p:nth-child(3) {
    padding-top: 5px;
    color: ${COLORS.DARK_GRAY};
  }
`;

const Graph = () => {
  const testData = query(ref(database, "test"));
  let nextData;

  onValue(testData, (snapshot) => {
    const firebaseData = snapshot.val();
    nextData = firebaseData;
  });

  // 수면 그래프 데이터
  const sleepDataFunc = () => {
    const graphData = [];
    for (let i = 0; i < nextData.length; i++) {
      graphData.push({
        x: nextData[i].date,
        y: nextData[i].sleepTime2 - nextData[i].sleepTime1,
      });
    }
    return graphData;
  };

  // 기분 그래프 데이터
  const feelDataFunc = () => {
    const graphData = [];
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

      graphData.push({
        x: nextData[i].date,
        y: feelNum,
      });
    }
    return graphData;
  };

  // 수면시간 데이터
  const data = [
    {
      id: "시간",
      color: "hsl(35, 70%, 50%)",
      data: sleepDataFunc(),
    },
  ];

  const data2 = [
    {
      id: "기분 수치",
      color: "#5C7FC9",
      data: feelDataFunc(),
    },
  ];

  const averageFunc1 = () => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nextData.length; i++) {
      sum += nextData[i].bloodPressure;
    }
    result = sum / 7;
    return result.toFixed(1);
  };

  const averageFunc2 = () => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nextData.length; i++) {
      sum += nextData[i].weight;
    }
    result = sum / 7;
    return result.toFixed(1);
  };

  const averageFunc3 = () => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nextData.length; i++) {
      sum += nextData[i].exerciseTime;
    }
    result = sum / 7;
    return result.toFixed(1);
  };

  return (
    <>
      <Header />
      <Container>
        <Greeting>📚 여태까지의 기록을 모아봤어요.</Greeting>
        <Contents>
          <CategoryTitle>수면 시간🛏️</CategoryTitle>
          <CategoryContent>
            <ResponsiveLine
              data={data}
              margin={{ top: 10, right: 65, bottom: 30, left: 50 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "0",
                max: "15",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 8,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 8,
                tickPadding: 5,
                tickRotation: 0,
                legend: "시간",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={5}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              enableGridX={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 15,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              theme={{
                fontFamily: "Pretendard",
              }}
            />
          </CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>신체정보</CategoryTitle>
          <CategoryContent>
            <HealthInfoBox>
              <HealthContent>
                <ContentBox>
                  <p>평균 혈압</p>
                  <p>{averageFunc1()}</p>
                  <p>mmHg</p>
                </ContentBox>
              </HealthContent>
              <HealthContent>
                <ContentBox>
                  <p>평균 체중</p>
                  <p>{averageFunc2()}</p>
                  <p>kg</p>
                </ContentBox>
              </HealthContent>
              <HealthContent>
                <ContentBox>
                  <p>평균 운동 시간</p>
                  <p>{averageFunc3()}</p>
                  <p>시간</p>
                </ContentBox>
              </HealthContent>
            </HealthInfoBox>
          </CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>기분😎</CategoryTitle>
          <CategoryContent>
            <ResponsiveLine
              data={data2}
              margin={{ top: 10, right: 65, bottom: 30, left: 50 }}
              colors={"#5C7FC9"}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "1",
                max: "5",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 8,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 8,
                tickPadding: 5,
                tickRotation: 0,
                legend: "수치",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              pointSize={5}
              pointColor={"#5C7FC9"}
              pointBorderWidth={2}
              pointBorderColor={"#5C7FC9"}
              pointLabelYOffset={-12}
              enableGridX={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 15,
                  symbolShape: "circle",
                  symbolBorderColor: "#5C7FC9",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              theme={{
                fontFamily: "Pretendard",
              }}
            />
          </CategoryContent>
        </Contents>
      </Container>
      <Navbar />
    </>
  );
};

export default Graph;
