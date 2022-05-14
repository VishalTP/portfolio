import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';

const Skills = ({ second, setThird }) => {

    const [ref, inView] = useInView();
    const reff = useRef()
    useEffect(() => {
        if (!inView) return
        console.log(second)
        window.scrollTo({
            top: second + 1,
            left: 0,
            behavior: 'smooth'
        });
        if(second)
            setThird(second+ reff.current.clientHeight)
    }, [inView])

    return (
        <div ref={reff}>
            <MySkills ref={ref}>
                <h1>My Skills</h1>
                <video autoPlay muted loop>
                    <source src="bgvideo2.mp4" type="video/mp4" />
                </video>
                <Techs>
                    <div>
                        <List>
                            <img src="./react.png" alt="" />
                            <p>React</p>
                        </List>
                        <List>
                            <img src="./js.png" alt="" />
                            <p>Java Script</p>
                        </List>
                        <List>
                            <img src="./css.png" alt="" />
                            <p>CSS</p>
                        </List>
                        <List>
                            <img src="./html.png" alt="" />
                            <p>HTML</p>
                        </List>
                    </div>
                </Techs>
            </MySkills>
        </div>
    )
}

const MySkills = styled.div`
    width: 100%;
    height: 101vh;
    background-color: #a15af1;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;

    video{
        height:100%;
        position: absolute;
        left: -5%;
        z-index: 0;
    }

    h1{
        position: absolute;
        z-index: 1;
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
    }
    
`
const Techs = styled.div`
    height: 100%;
    width: 50vw;
    position: absolute;
    right: 10%;
    display:flex;
    justify-content: center;
    z-index: 1;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`

const List = styled.div`
    height: 100px;

    img{
        height: 100%;
    }
    p{
        text-align: center;
        margin-top: 1rem;
    }
`

export default Skills