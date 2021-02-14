import React from 'react'
import { FeatureContainer, FeatureButton } from './feature.styles'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Hamburger of the day</h1>
            <p>The best taste for poultry lovers</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;