import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { Fade, Flip } from 'react-reveal';

const MovieApp = ({ fourth, setFifth }) => {

    const [ref, inView] = useInView();
    const reff = useRef()
    useEffect(() => {
        if (!inView) return

        // window.scrollTo({
        //     top: fourth + 1,
        //     left: 0,
        //     behavior: 'smooth'
        // });
        // if(fourth)
        // setFifth(fourth+ reff.current.clientHeight)
    }, [inView])

    return (
        <div ref={reff}>
            <MySkills ref={ref}>

            <WorkDetails>
                    <Flip duration={1500}>
                        <h1>Personal Project</h1>
                    </Flip>
                    <WorkCard>
                        <Fade bottom duration={2000}>
                            <h1>Movie/TV Series App</h1>
                            <p>
                                Shop your cycle online from here. Go green and give your heart a good exercise. A good cardio exercise can make you healthy wealthy and wise.
                                <br />
                                <b>Tech Stack</b> - React, Material UI, CSS, TMDB api
                            </p>
                        </Fade>
                        <Image>
                            <Fade bottom duration={2000}>
                                <img src="movieapp.png" />
                            </Fade>
                        </Image>
                        <Buttons>
                            <Fade bottom duration={2000}>
                                <Button href="https://movieappnew.vercel.app/" target="_blank">Demo</Button>
                                <Button href="https://github.com/VishalTP/movieappnew" target="_blank">Code</Button>
                            </Fade>
                        </Buttons>
                    </WorkCard>
                </WorkDetails>

                <video autoPlay muted loop>
                    <source src="bgvideo4.mp4" type="video/mp4" />
                </video>
                

                
            </MySkills>
        </div>
    )
}

const MySkills = styled.div`
    width: 100%;
    height: 101vh;
    background-color: #febe0a;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;

    video{
        height:100%;
        position: absolute;
        left: -12%;
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
    position: relative;
    right: 10%;
    float: right;

    h1{

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


export default MovieApp