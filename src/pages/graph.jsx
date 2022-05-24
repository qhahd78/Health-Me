import React from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import { ResponsiveLine } from "@nivo/line";

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

const Graph = () => {
  const data = [
    {
      id: "수면시간",
      color: "hsl(35, 70%, 50%)",
      data: [
        {
          x: "05.25",
          y: 8,
        },
        {
          x: "05.26",
          y: 7,
        },
        {
          x: "05.27",
          y: 5,
        },
        {
          x: "05.28",
          y: 7,
        },
        {
          x: "05.29",
          y: 6,
        },
        {
          x: "05.30",
          y: 9,
        },
      ],
    },
  ];
  const data2 = [
    {
      id: "기분 수치",
      color: "#5C7FC9",
      data: [
        {
          x: "05.25",
          y: 5,
        },
        {
          x: "05.26",
          y: 4,
        },
        {
          x: "05.27",
          y: 3,
        },
        {
          x: "05.28",
          y: 5,
        },
        {
          x: "05.29",
          y: 1,
        },
        {
          x: "05.30",
          y: 2,
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Greeting>📚 여태까지의 기록을 모아봤어요.</Greeting>
        <Contents>
          <CategoryTitle>수면🛏️</CategoryTitle>
          <CategoryContent>
            <ResponsiveLine
              data={data}
              margin={{ top: 10, right: 110, bottom: 30, left: 60 }}
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
          <CategoryTitle>신체정보💓</CategoryTitle>
          <CategoryContent></CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>기분😎</CategoryTitle>
          <CategoryContent>
            <ResponsiveLine
              data={data2}
              margin={{ top: 10, right: 110, bottom: 30, left: 60 }}
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
                legend: "기분 수치",
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
