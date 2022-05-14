import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Fade, Flip } from 'react-reveal';
import { CgChevronDownO } from "react-icons/cg";
import { useInView } from 'react-intersection-observer';

const Ecommerce = ({ third, setFourth }) => {

    const [ref, inView] = useInView();
    const reff = useRef()

    useEffect(() => {
        if (!inView) return

        // window.scrollTo({
        //     top: third + 1,
        //     left: 0,
        //     behavior: 'smooth'
        // });
        // if(third)
        //     setFourth(third+ reff.current.clientHeight)
    }, [inView])


    return (
        <div ref={reff}>
            <MyWork ref={ref} >
                <WorkDetails>
                    <Flip duration={1500}>
                        <h1>Personal Project</h1>
                    </Flip>
                    <WorkCard>
                        <Fade bottom duration={2000}>
                            <h1>Ecommerce App</h1>
                            <p>
                                Shop your cycle online from here. Go green and give your heart a good exercise. A good cardio exercise can make you healthy wealthy and wise.
                                <br />
                                <b>Tech Stack</b> - MERN
                            </p>
                        </Fade>
                        <Image>
                            <Fade bottom duration={2000}>
                                <img src="./ecommerce.png" />
                            </Fade>
                        </Image>
                        <Buttons>
                            <Fade bottom duration={2000}>
                                <Button href="https://vishal-ecommerce-app.herokuapp.com/" target="_blank">Demo</Button>
                                <Button href="https://github.com/VishalTP/cycle-ecommerce" target="_blank">Code</Button>
                            </Fade>
                        </Buttons>
                    </WorkCard>
                </WorkDetails>


                <video autoPlay muted loop>
                    <source src="bgvideo3.mp4" type="video/mp4" />
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
    background-color: #00c08c;
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
        text-align: center;
    }

`
const WorkCard = styled.div`
    max-width: 600px;
    text-align: justify;

    >h1{
        
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
    background-color: #feb808;
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
export default Ecommerce