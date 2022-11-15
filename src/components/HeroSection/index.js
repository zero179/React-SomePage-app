import React, {useState} from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover (!hover)
    }
  return (
    <HeroContainer>
        <HeroContent>
            <HeroH1>
                Ahojte.
            </HeroH1>
            <HeroP>
                Prihlasiť sa.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="signup" 
                onMouseEnter= {onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Get Started {hover ?<ArrowForward/> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

  )
}

export default HeroSection