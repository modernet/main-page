import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCardFront,
  ServicesCardBack,
  ServicesPBack,
} from "./ServicesElements";
import Icon1 from "../../public/images/about.svg";
import Icon2 from "../../public/images/setup.svg";
import Icon3 from "../../public/images/ecommerce2.svg";
import Icon4 from "../../public/images/builder.svg";
import Image from "next/image";

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesCardFront>
            <ServicesIcon>
              <Image src={Icon3} />
            </ServicesIcon>
            <ServicesH2>E-Commerce</ServicesH2>
            <ServicesP>
              Comes with a user friendly backend integration that can handle
              your product sales and allows you to make changes on demand.
            </ServicesP>
          </ServicesCardFront>
          <ServicesCardBack>
            <ServicesIcon>
              <Image src={Icon3} />
            </ServicesIcon>
            <ServicesH2>E-Commerce</ServicesH2>
            <ServicesPBack>
              Comes with a user friendly backend integration that can handle
              your product ssales and allows you to make changes on demand.
            </ServicesPBack>
          </ServicesCardBack>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardFront>
            <ServicesIcon>
              <Image src={Icon2} />
            </ServicesIcon>
            <ServicesH2>Branded Website</ServicesH2>
            <ServicesP>
              Multi-page responsive website, mobile friendly, includes call to
              action, calendly services, brand tailored including logo and color
              scheme.
            </ServicesP>
          </ServicesCardFront>
          <ServicesCardBack>
            <ServicesIcon>
              <Image src={Icon2} />
            </ServicesIcon>
            <ServicesH2>Branded Website</ServicesH2>
            <ServicesP>
              Multi-page responsive website, mobile friendly, includes call to
              action, calendly services, brand tailored including logo and color
              scheme.
            </ServicesP>
          </ServicesCardBack>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardFront>
            <ServicesIcon>
              <Image src={Icon1} />
            </ServicesIcon>
            <ServicesH2>Landing Page</ServicesH2>
            <ServicesP>
              One page responsive website, mobile friendly, includes call to
              action for inbound leads.
            </ServicesP>
          </ServicesCardFront>
          <ServicesCardBack>
            <ServicesIcon>
              <Image src={Icon1} />
            </ServicesIcon>
            <ServicesH2>Landing Page</ServicesH2>
            <ServicesP>
              One page responsive website, mobile friendly, includes call to
              action for inbound leads.
            </ServicesP>
          </ServicesCardBack>
        </ServicesCard>

        <ServicesCard>
          <ServicesCardFront>
            <ServicesIcon>
              <Image src={Icon4} />
            </ServicesIcon>
            <ServicesH2>Re-design</ServicesH2>
            <ServicesP>
              Already have an outdated website? Tired of paying monthy? Lets
              modernize what you got and cut out the middleman.
            </ServicesP>
          </ServicesCardFront>
          <ServicesCardBack>
            <ServicesIcon>
              <Image src={Icon4} />
            </ServicesIcon>
            <ServicesH2>Re-design</ServicesH2>
            <ServicesP>
              Already have an outdated website? Tired of paying monthy? Lets
              modernize what you got and cut out the middleman.
            </ServicesP>
          </ServicesCardBack>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
