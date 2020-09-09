import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className=" header__main"  >
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon"   
            />

            <div className="header__search">
                <input className="header__searchIpnut" type="text"/>
                <SearchIcon
                    className="header__searchIcon"
                />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__OptionLineOne">
                        Hello Dix
                    </span>
                    <span className="header__OptionLineTwo">
                        Hello Dix
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__OptionLineOne">
                        Hello Dix
                    </span>
                    <span className="header__OptionLineTwo">
                        Hello Dix
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__OptionLineOne">
                        Hello Dix
                    </span>
                    <span className="header__OptionLineTwo">
                        Hello Dix
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__OptionLineTwo header__BasketCount">
                        0
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Header
