import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElement'
import {Button} from '../ButtonElement';

export default function InfoSection({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to='home' 
                                smooth={true} 
                                primary={primary.toString()}
                                dark={dark.toString()}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt} />
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}
