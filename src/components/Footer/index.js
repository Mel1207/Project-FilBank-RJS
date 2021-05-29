import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media </FooterLinkTitle>
                            <FooterLink to="/">LinkedIn</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialLogo to="/" onClick={toggleHome}>FillBank</SocialLogo>
                    <WebsiteRights>FillBank © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialMediaWrap>
                        <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedinIn />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
