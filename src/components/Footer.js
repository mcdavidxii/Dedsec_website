import React from "react";

function Footer(){
    return(
        <div class='foot-container' >
            <section class='footer-subscription' >
                <p class='footer-subscription-heading' >
                    Join the Adventure newsletter to receiver our best vacation deals
                </p>
                <p class='footer-subscription-text' >
                    You can unsubscribe anytime
                </p>
                <div class='input-areas' >
                    <form>
                        <input type='email' name='email' placeholder='Your email' class='footer-input'/>
                        <button buttonStyle='btn--outline'>Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer;