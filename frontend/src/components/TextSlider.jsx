import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

const Slide = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
  display: inline-block;
  animation: ${slideAnimation} 15s linear infinite;
font-family: 'Roboto', sans-serif;
    font-size: 18px;
    width: 1200px; 
  overflow: hidden;

`;

const TextSlider = ({ texts }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [texts]);

    return (
        <Container>
            {texts.map((text, index) => (
                <Slide key={index} style={{ animationDelay: `${index * 5}s` }}>
                    {text}
                </Slide>
            ))}
        </Container>
    );
};

export default TextSlider;

