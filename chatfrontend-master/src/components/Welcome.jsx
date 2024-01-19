import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";


export default function Welcome() {
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    const samplewe = async () => {
      const storedUser = JSON.parse(localStorage.getItem("chat-app-user"));
  
      if (storedUser && storedUser.username) {
        setUserName(storedUser.username);
      }
    };
  
    samplewe();
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;