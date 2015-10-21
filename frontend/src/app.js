'use strict';

require('./app.less')
var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h1 className="mainHeader">Hello React!</h1>
                <p className="mainContent">This is Django + React + Webpack + npm + less</p>
            </div>
        );
    }
});