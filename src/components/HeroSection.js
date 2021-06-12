import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div class='hero-container'> 
        <video src='./assets/wd2intro.mp4' autoPlay loop muted />
            <h1>WE REVEAL IT ALL!</h1>
            <p>What are you waiting for?</p>
            <div class='hero-btns'>
                <Button class='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button class='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i class='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
