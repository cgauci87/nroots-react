import React, {Fragment} from 'react';

/**
 * Color Filter Widget
 * @returns {*}
 * @constructor
 */
function ColorFilterWidget() {

    return (
        <Fragment>
            <div className="widget ecom widget_layered_nav ecom-widget-layered-nav">
                <h3>Filter by Color</h3>
                <ul className="ecom-widget-layered-nav-list">
                    <li className="ecom-widget-layered-nav-list__item wc-layered-nav-term ">
                        <a href="#">Blue</a>
                        <span className="count">(4)</span>
                    </li>
                    <li className="ecom-widget-layered-nav-list__item wc-layered-nav-term ">
                        <a href="#">Blue</a>
                        <span className="count">(4)</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default ColorFilterWidget;