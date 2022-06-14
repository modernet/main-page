import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../public/images/about.svg';
import Icon2 from '../../public/images/setup.svg';
import Icon3 from '../../public/images/ecommerce2.svg';
import Icon4 from '../../public/images/builder.svg';
import Image from 'next/image';

export default function Services() {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Our Services
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon>
                    <Image src={Icon3} />
                </ServicesIcon>
                <ServicesH2>
                    E-commerce
                </ServicesH2>
                <ServicesP>
                    Comes with a user friendly backend integration that can handle your product sales and allows you to make changes on demand.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon>
                <Image src={Icon2} />
            </ServicesIcon>
                <ServicesH2>
                   Branded Website
                </ServicesH2>
                <ServicesP>
                    Multi-page website that is responsive and mobile friendly. It comes with a call to action for inbound leads and brand tailored.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon>
                <Image src={Icon1} />
            </ServicesIcon>
                <ServicesH2>
                    Landing Page
                </ServicesH2>
                <ServicesP>
                    One page website that is responsive, mobile friendly and has a call to action for inbound leads.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon>
                <Image src={Icon4} />
            </ServicesIcon>
                <ServicesH2>
                    Re-design Existing Website
                </ServicesH2>
                <ServicesP>
                    Have a Shopify or Squarespace website and tired of paying a monthly due? 
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}
