import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElement';
import {Button} from '../ButtonElement';

export default function HeroSection() {
  const [hover, sethover] = useState(false)

  const onHover = () => {
    sethover(!hover)
  }

  return (
    <div>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted>
                        <source src='/videos/modernetbackground.mp4' type='video/mp4' />
                </VideoBg>
            </HeroBg>
            <HeroContent>
              <HeroH1>Digital Transformation</HeroH1>
              <HeroP>
                Modernet works with you to create an online presence or update an existing one. 
              </HeroP>
              <HeroBtnWrapper>
                <Button to="services" smooth={true} onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                
                >
                  Learn More { hover ? <ArrowForward /> : <ArrowRight /> }
                </Button>
              </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </div>
  )
}
