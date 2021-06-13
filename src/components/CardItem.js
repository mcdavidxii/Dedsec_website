import React from 'react';
import {Link} from 'react-router-dom';

function CardItem() {
    return(
        <>
            <li class="cards__item">
                <Link class="cards__item__link">
                    <figure class='cards__item__pic-wrap'>
                        <img src="/" alt='Dedsec Image' class='cards__item__img' />
                    </figure>
                     <div class='cards__item__info'>
                     <h5 class='cards__item__text'></h5>
                    </div>
                </Link>
            </li>
        </>
    )
}