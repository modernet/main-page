import React from 'react'
import {HeroContainer, HeroBg, VideoBg} from './HeroElement';

export default function HeroSection() {
  return (
    <div>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted>
                        <source src='/videos/video.mp4' type='video/mp4' />
                </VideoBg>
            </HeroBg>
        </HeroContainer>
    </div>
  )
}
