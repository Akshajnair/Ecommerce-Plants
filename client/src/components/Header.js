import React, { Component } from 'react'
import './css/header.css'
import Logoiconsmall from './images/default-logo.png';
import Searchicon from './images/search.svg';
import Carticon from './images/carts.svg';
import Menuicon from './images/menu.svg';
import Usericon from './images/user.svg';

export class Header extends Component {
    render() {
        return (
            <header class="u-align-center-xs u-clearfix u-header u-palette-4-base u-sticky u-header" id="sec-053f">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <a href="https://nicepage.com" class="u-image u-logo u-image-1" data-image-width="80" data-image-height="40">
                        <img src={Logoiconsmall} class="u-logo-image u-logo-image-1" data-image-width="80" />
                    </a>
                    <form action="#"
                        class="u-border-2 u-border-palette-3-base u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-input-round u-radius-14 u-search u-search-right u-search-1">
                        <button class="u-search-button" type="submit">
                            <span class="u-file-icon u-search-icon u-spacing-10 u-search-icon-1">
                                <img src={Searchicon} alt="" />
                            </span>
                        </button>
                        <input class="u-custom-font u-font-ubuntu u-search-input u-text-palette-3-base u-search-input-1" type="search"
                            name="search" value="" placeholder="Search" />
                    </form><span class="u-file-icon u-icon u-icon-circle u-text-palette-1-base u-icon-1"><img src={Carticon}
                        alt="" /></span>
                    <p class="u-text u-text-palette-3-base u-text-1">(0)</p>
                    <img src={Menuicon} alt="" class="u-image u-image-default u-image-2" data-image-width="24"
                        data-image-height="24" />
                    <img src={Usericon} alt="" class="u-image u-image-circle u-preserve-proportions u-image-3"
                        data-image-width="24" data-image-height="24" />
                </div>
            </header>
        )
    }
}

export default Header
