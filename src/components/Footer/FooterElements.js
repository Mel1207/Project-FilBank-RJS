import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
    background: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterP = styled.p`
    color: #fff;
    opacity: 0.8;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    min-width: 200px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    opacity: 0.8;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    transition: 0.3s ease-in-out;

    &:hover {
        color: #0db9a1;
        opacity: 1;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    width: 100%;
    margin: 20px 0 10px 0;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    /* margin-bottom: 16px; */
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`