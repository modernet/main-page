import React from 'react';
import Link from 'next/link';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights} from './FooterElement';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Services
                                </FooterLink>
                                </Link>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Ecommerce
                                </FooterLink>
                                </Link>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Services
                                </FooterLink>
                                </Link>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Ecommerce
                                </FooterLink>
                                </Link>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Services
                                </FooterLink>
                                </Link>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Ecommerce
                                </FooterLink>
                                </Link>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About us
                            </FooterLinkTitle>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Services
                                </FooterLink>
                                </Link>
                                <Link href="/" passHref>
                                <FooterLink>
                                    Ecommerce
                                </FooterLink>
                                </Link>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Link href="/">
                        <SocialLogo>
                            Modernet
                        </SocialLogo>
                        </Link>
                        <WebsiteRights>
                            Modernet &#169;{new Date().getFullYear()} All Rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <Link href="/">
                            <SocialIconLink>
                                <FaFacebook />
                            </SocialIconLink>
                            </Link>
                            <Link href="/">
                            <SocialIconLink>
                                <FaInstagram />
                            </SocialIconLink>
                            </Link>
                            <Link href="/">
                            <SocialIconLink>
                                <FaLinkedin />
                            </SocialIconLink>
                            </Link>
                            <Link href="/">
                            <SocialIconLink>
                                <FaTwitter />
                            </SocialIconLink>
                            </Link>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}
