import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElement'
import {Button} from '../ButtonElement';

export default function InfoSection() {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                TopLine
                            </TopLine>
                            <Heading>
                                Heading
                            </Heading>
                            <Subtitle>
                                Subtitle
                            </Subtitle>
                            <BtnWrap>
                                <Button to='home' smooth={true}>
                                    Get Started
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img>

                    </Img>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}
