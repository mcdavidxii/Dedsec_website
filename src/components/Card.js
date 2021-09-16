import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Card() {
    return (
        <div class='cards'>
            <h1>Check out our new products!</h1>
            <div class='cards__container'>
                <div class='cards__wrapper'>
                    <ul class='cards__items'>
                        <CardItem 
                        src="images/farm1.jpg"
                        text="Explore our farms within the corners of Zimbabwe"
                        label="Farm Lenny"
                        path='/services'
                        
                        />
                        <CardItem 
                        src="images/farm2.jpg"
                        text="The peas farm"
                        label="Farm Pannar"
                        path='/services'
                        
                        />
                        
                    </ul>
                    <ul class='cards__items'>
                        <CardItem 
                        src="images/farm3.jpg"
                        text="The wheat farm"
                        label="Farm Lenny"
                        path='/services'
                        
                        />
                        <CardItem 
                        src="images/farm4.jpg"
                        text="Located on the Central part of Selous"
                        label="Farm Pannar"
                        path='/services'
                        
                        />
                        <CardItem 
                        src="images/farm5.jpg"
                        text="Located within the borders of Chegutu town"
                        label="Farm Chegutu"
                        path='/services'
                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;