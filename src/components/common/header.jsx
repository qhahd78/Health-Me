import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 37px 0 0 30px;
`;

const Greeting = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const Header = ({ userName = "TEST" }) => {
  return (
    <Container>
      <Greeting>안녕하세요. {userName} 님!</Greeting>
    </Container>
  );
};

export default Header;
