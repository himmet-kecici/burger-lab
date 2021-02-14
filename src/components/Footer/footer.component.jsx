import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './footer.styles';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Burger Lab</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink hfref='/' target='_blank' aria-label="Facebook" rel='noopener noreferrer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink hfref='/' target='_blank' aria-label="Instagram" rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink hfref='/' target='_blank' aria-label="Twitter" rel='noopener noreferrer'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink hfref='/' target='_blank' aria-label="Youtube" rel='noopener noreferrer'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;