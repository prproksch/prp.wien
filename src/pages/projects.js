import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image1 from '../images/01.jpg'
import Image2 from '../images/02.jpg'
import Image3 from '../images/03.jpg'
import Soon from '../images/soon.jpg'
import Logo from '../images/logo.png'


const MainHeadding = styled.h1`
    display: inline;
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient(
    -100deg,
    rgba(222, 11, 21, 0.15),
    rgba(222, 11, 21, 0.4) 100%,
    rgba(222, 11, 21, 0.25)
    );
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  width: 100%;
`

const Grid = styled.div`
  margin-top: 2em;
  display: grid;
  grid-gap: 1em;
  width: 100%;
`

const Project = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;  
    @media (max-width: 768px) {
        flex-direction: column;
    }

    a {
        text-decoration: none;
        position: relative;
    }
    
    a::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 70%;
        left: -0.1px;
        right: -0.1px;
        bottom: 0;
        transition: top 0.1s ease-in-out;
        background-color: rgba(222, 11, 21, 0.3); 
    }
    
    a:hover::after {
        top: 0;
    }
`

const Image = styled.img`
    margin-bottom: 0;
    max-width: 60%;  
    @media (max-width: 860px) {
        max-width: 100%;  
    }
`
const Description = styled.p`
    margin-left: 1.5em;
`

const Headding = styled.h2`
    margin-bottom: 0;
`
const Text = styled.div`

`
const Links = styled.a`
    margin-bottom: 0;
    
`
const Technology = styled.span`
    color: rgba(96, 96, 96, 0.6);
    font-weight: bold;
    font-style: italic;
    font-size: 0.8em;
`

const LogoImage = styled.img`
    display: none;
`
const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <MainHeadding>Projects</MainHeadding>
        <Grid>
            <Project>
                <Image src={Image1}/>
                <Description>
                    <Headding>Herbertkoch.art</Headding>
                    <Text>
                        An Artists Portfolio 
                        <br /> 
                        <Technology>HTML5 | CSS | JQuerry</Technology>
                        <br /> 
                        <Links href="https://www.herbertkoch.art" target="_blank" rel="noopener noreferrer">Go to Website</Links>
                    </Text>
                </Description>
            </Project>
            <Project>
                <Image src={Image2}/>
                <Description>
                    <Headding>Mfc-hohenau.at</Headding>
                    <Text>
                        A Model RC Plane Club 
                        <br /> 
                        <Technology>HTML5 | CSS | JQuerry</Technology>
                        <br /> 
                        <Links href="https://www.mfc-hohenau.at" target="_blank" rel="noopener noreferrer">Go to Website</Links>
                    </Text>
                </Description>
            </Project>
            <Project>
                <Image src={Image3}/>
                <Description>
                    <Headding>Schwarzwasser.org</Headding>
                    <Text>
                        Fictive Business 
                        <br /> 
                        <Technology>HTML5 | CSS | JQuerry | Animate.css</Technology>
                        <br /> 
                        <Links href="https://www.schwarzwasser.org" target="_blank" rel="noopener noreferrer">Go to Website</Links>
                    </Text>
                </Description>
            </Project>
            <Project>
                <Image src={Soon}/>
                <Description>
                    <Headding>Eastside84.com</Headding>
                    <Text>
                        Car Tuning Business 
                        <br /> 
                        <Technology>HTML5 | SCSS | GatsbyJS</Technology>
                        <br /> 
                        <Links href="https://www.eastside84.com" target="_blank" rel="noopener noreferrer">Go to Website</Links>
                    </Text>
                </Description>
            </Project>
        </Grid>
        <LogoImage src={Logo}/>
      </Content>
    </Layout>
  )
}

export default Projects