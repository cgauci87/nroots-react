import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";
import './navBar.css';

/**
 * nav bar component
 * @param options
 * @returns {*}
 * @constructor
 */
function Navbar({options}) {

    return (
        <Fragment>
            <div id="navbar" className={"navbar-collapse collapse navigation-holder " + (options.mobileNav ? 'slideInn' : '')}>
                <button onClick={options.onMobileNavClick} className="close-navbar"><i className="ti-close"/></button>
                <ul className="nav navbar-nav">
                    <li className="menu-item-has-children">
                        <NavLink to="/">Home</NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to="/home" activeClassName="current-menu-item">Home Default</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home-style-2" activeClassName="current-menu-item">Home Style 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home-style-3" activeClassName="current-menu-item">Home Style 3</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li><NavLink to="/about" activeClassName="current-menu-item">About</NavLink></li>
                    <li className="menu-item-has-children has-mega-menu">
                        <a href="#">Shop</a>
                        <ul className="mega-menu">
                            <li>
                                <div className="mega-menu-content">
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Shop style</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/shop-right-sidebar" activeClassName="current-menu-item">Shop
                                                right sidebar</NavLink></li>
                                            <li><NavLink to="/shop-left-sidebar" activeClassName="current-menu-item">Shop
                                                left sidebar</NavLink></li>
                                            <li><NavLink to="/shop-full-width" activeClassName="current-menu-item">Shop
                                                full width</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Shop single</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/single-slider-images" activeClassName="current-menu-item">Slider
                                                images</NavLink></li>
                                            <li><NavLink to="/single-vertical-thumbnail"
                                                         activeClassName="current-menu-item">Vertical
                                                thumbnail</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Product style</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/shop-right-sidebar" activeClassName="current-menu-item">Product
                                                style 1</NavLink></li>
                                            <li><NavLink to="/shop-left-sidebar" activeClassName="current-menu-item">Product
                                                style 2</NavLink></li>
                                            <li><NavLink to="/shop-full-width" activeClassName="current-menu-item">Product
                                                style 3</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Other pages</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/cart" activeClassName="current-menu-item">Cart</NavLink>
                                            </li>
                                            <li><NavLink to="/checkout"
                                                         activeClassName="current-menu-item">Checkout</NavLink></li>
                                            <li><NavLink to="/my-account" activeClassName="current-menu-item">My
                                                account</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col col-5">
                                        <span className="mega-menu-box-title">Other pages</span>
                                        <ul className="mega-menu-list-holder">
                                            <li><NavLink to="/cart" activeClassName="current-menu-item">Cart</NavLink>
                                            </li>
                                            <li><NavLink to="/checkout"
                                                         activeClassName="current-menu-item">Checkout</NavLink></li>
                                            <li><NavLink to="/my-account" activeClassName="current-menu-item">My
                                                account</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <Logo/>

                    <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <NavLink to="/404" activeClassName="current-menu-item">404</NavLink>
                            <NavLink to="/about" activeClassName="current-menu-item">About</NavLink>
                            <NavLink to="/contact" activeClassName="current-menu-item">Contact</NavLink>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="current-menu-item">Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* end of nav-collapse */}
        </Fragment>
    );
}

export default Navbar;