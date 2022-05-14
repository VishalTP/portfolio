import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Fade, Flip, Zoom } from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import { CgChevronDownO } from "react-icons/cg";

const IntroPage = ({ setFirst }) => {
    const [ref, inView] = useInView();
    const reff = useRef()

    useEffect(() => {
        setFirst(reff.current.clientHeight)
    }, [])

    useEffect(() => {
        if (!inView) return

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [inView])
    return (
        <div ref={reff} >
            <AboutMe ref={ref}>
                {
                    inView && <>
                        <Intro>
                            <Fade bottom duration={2000} delay={100}>
                                <h1>Hey</h1>
                                <h2>I'm a Creative Frontend Developer</h2>
                                <p>I can build an awesome web application for you.</p>
                            </Fade>
                        </Intro>

                        <Images>
                            <Zoom bottom duration={1000} >
                                <img src="left_DTop.png" alt=""/>
                            </Zoom>
                            <Zoom bottom delay={500} >
                                <img src="right_Dtop-1.png" alt=""></img>
                            </Zoom>
                        </Images>
                    </>
                }
                <Fade bottom delay={800}>
                    <Down className="ani">
                        <CgChevronDownO color="white" size="2rem" />
                    </Down>
                </Fade>
            </AboutMe>
        </div>
    )
}

const AboutMe = styled.div`
    width: 100%;
    height: 101vh;
    background-color: rgb(84, 61, 224);
    position: relative;
    display: flex;
    align-items: center;
    
`

const Images = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 7vw;
    pointer-events: none;
    img{
        width: 30vmax;
        height: 30vmax;
        display: inline;
    }
`
const Intro = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    color: white;
    text-align: center;
    width: 20%;

    h1{
        margin-bottom: 1rem;
        font-size: 4vmax;
    }
    h2{
        font-size: 2vmax;
        margin-bottom: 1rem;
    }
    p{
        font-size: 1vmax;
    }
`
const Down = styled.button`
    position: absolute;
    z-index: 9;
    bottom: 4%;
    left: 50%;
    border: none;
    height: 40px;
    width: 40px;
    background: none;
`

export default IntroPage