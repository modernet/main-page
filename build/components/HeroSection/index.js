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
              <HeroH1>Virtual Banking Made Easy</HeroH1>
              <HeroP>
                Contact us for an appointment today and receive 10% in credit towards your next payment.
              </HeroP>
              <HeroBtnWrapper>
                <Button to="signup" smooth={true} onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                
                >
                  Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                </Button>
              </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </div>
  )
}
