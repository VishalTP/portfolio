import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Fade, Flip } from 'react-reveal';
import { CgChevronDownO } from "react-icons/cg";
import { useInView } from 'react-intersection-observer';

const Works = ({ first, setSecond }) => {

    const [ref, inView] = useInView();
    const reff = useRef()

    useEffect(() => {
        if (!inView) return

        window.scrollTo({
            top: first + 1,
            left: 0,
            behavior: 'smooth'
        });
        if(first)
            setSecond(first+ reff.current.clientHeight)
    }, [inView])


    return (
        <div ref={reff}>
            <MyWork ref={ref} >
                <WorkDetails>
                    <Flip duration={1500}>
                        <h1>My Work</h1>
                    </Flip>
                    <WorkCard>
                        <Fade bottom duration={2000}>
                            <h1>Service Record</h1>
                            <p>
                                Service Record is a SaaS application for small service centers and electronics shops.
                                This application allows user to register their clients complaints and manage the service details, manage their vendors, staff details, generate invoice etc.
                            </p>
                        </Fade>
                        <Image>
                            <Fade bottom duration={2000}>
                                <img src="servicerocord.png" />
                            </Fade>
                        </Image>
                        <Buttons>
                            <Fade bottom duration={2000}>
                                <Button href="https://servicerecord.herokuapp.com/" target="_blank">Demo</Button>
                                <Button href="https://github.com/VishalTP/Service-record--SaaS" target="_blank">Code</Button>
                            </Fade>
                        </Buttons>
                    </WorkCard>
                </WorkDetails>


                <video autoPlay muted loop>
                    <source src="bgvideo.mp4" type="video/mp4" />
                </video>

                <Fade >
                    <Down className="ani">
                        <CgChevronDownO color="white" size="2rem" />
                    </Down>
                </Fade>
            </MyWork>
        </div >
    )
}

const MyWork = styled.div`
    width: 100%;
    height: 101vh;
    background-color: #feb808;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;

    video{
        height:100%;
        position: absolute;
        right: -5%;
        z-index: 0;
    }
    
`
const WorkDetails = styled.div`
    
    width: 100%;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    z-index: 1;
    padding: 5rem;

    h1{
        position: absolute;
        z-index:2;
        top: 3.5%;     
        left: 50%;
        transform: translatex(-50%);
    }

`
const WorkCard = styled.div`
    max-width: 600px;
    text-align: justify;

    h1{
        position: relative;
        margin: 4rem 0 1rem 0;
    }
    p{
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }
`
const Image = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    img{
        width: 100%;
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
`
const Button = styled.a`
    padding: 1rem 2rem;
    border-radius: .7rem;
    border: none;
    background-color: #20c997;
    color: white;
    font-size: 1.2rem;
    margin-top: .6rem;
    text-decoration: none;
`
const Down = styled.button`
    position: absolute;
    bottom: 4%;
    left: 50%;
    z-index: 1;
    border: none;
    height: 40px;
    width: 40px;
    background: none;
`
export default Works