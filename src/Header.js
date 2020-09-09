import React from 'react'
import "./css/Header.css"

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazob_PNG11.png"/>

            <div className="header__search">
                <input 
                    className="header__searchIpnut"
                    type="text"
                />
                {/* logo */}
            </div>
            <div className=""></div>
        </div>

    )
}

export default Header
