import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../public/images/about.svg";
import Icon2 from "../../public/images/setup.svg";
import Icon3 from "../../public/images/ecommerce2.svg";
import Icon4 from "../../public/images/builder.svg";
import Image from "next/image";

const myLoader = ({src, width, quality}) => {
  return `https://modernetconsulting.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Services(props) {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon>
            <Image loader={myLoader} src={Icon3} alt="E-commerce Svg"/>
          </ServicesIcon>
          <ServicesH2>E-Commerce</ServicesH2>
          <ServicesP>
            Comes with a user friendly backend integration that can handle your
            product sales and allows you to make changes on demand.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon>
            <Image loader={myLoader}  src={Icon2} alt="Branded Website Svg"/>
          </ServicesIcon>
          <ServicesH2>Branded Website</ServicesH2>
          <ServicesP>
            Multi-page responsive website, mobile friendly, includes call to
            action, calendly services, brand tailored including logo and color
            scheme.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon>
            <Image loader={myLoader}  src={Icon1} alt="Landing Page Svg"/>
          </ServicesIcon>
          <ServicesH2>Landing Page</ServicesH2>
          <ServicesP>
            One page responsive website, mobile friendly, includes call to
            action for inbound leads.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon>
            <Image loader={myLoader}  src={Icon4} alt="Re-design Svg"/>
          </ServicesIcon>
          <ServicesH2>Re-design</ServicesH2>
          <ServicesP>
            Already have an outdated website? Tired of paying monthy? Lets
            modernize what you got and cut out the middleman.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
