import kitchen from "./assets/kitchen.jpg";
import tv from "./assets/tv.jpg";
import nature from "./assets/nature.jpg";

import React, { useState } from "react";
import styled from "styled-components";

const SlideshowContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const SlideshowWrapper = styled.div`
    max-width: 800px;
    position: relative;
    margin: 0 auto;
`;

const Slide = styled.div`
    display: none;
    transition: opacity 1.5s ease-in-out;

    &.active {
        display: block;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

const SlideshowButtons = styled.div`
    position: relative;
`;

const NavigationButton = styled.button`
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;

    &.next {
        position: absolute;
        right: 0;
    }
`;

// Main component
const Slideshow = () => {
    const images = [kitchen, tv, nature];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + images.length) % images.length
        );
    };

    return (
        <SlideshowContainer>
            <SlideshowWrapper>
                {images.map((image, index) => (
                    <Slide
                        key={index}
                        className={index === currentSlide ? "active" : ""}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </Slide>
                ))}
                <SlideshowButtons>
                    <NavigationButton className="previous" onClick={prevSlide}>
                        Previous
                    </NavigationButton>
                    <NavigationButton className="next" onClick={nextSlide}>
                        Next
                    </NavigationButton>
                </SlideshowButtons>
            </SlideshowWrapper>
        </SlideshowContainer>
    );
};

export default Slideshow;
