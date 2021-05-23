import React from 'react'
import { useState } from 'react'
// import { Button } from 'react-scroll'
import { Button } from '../ButtonElement'
import Video from '../../videos/loop-video.mp4'
import { 
    HeroContainer,
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward,
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Mobile Banking can now access with ease.</HeroH1>
                <HeroP>
                    Sign u for today to recieve 30% credit on your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
