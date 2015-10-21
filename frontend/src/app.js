'use strict';

require('./App.less')
var React = require('react');

var SimpleComponent = require('./components/SimpleComponent');

module.exports = React.createClass({
    render() {
        return (
            <div className="App">
                <h1 className="AppHeader">Hello React!</h1>
                <p className="AppContent">This is Django + React + Webpack + npm + less</p>
                <SimpleComponent>This text should be reversed.</SimpleComponent>
                <SimpleComponent>And this text too.</SimpleComponent>
            </div>
        );
    }
});