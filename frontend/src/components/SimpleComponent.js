'use strict';

var React = require('react');
require('./SimpleComponent.less')

module.exports = React.createClass({
    propTypes: {
        children: React.PropTypes.string.isRequired
    },
    render() {
        var content = this.props.children.split('').reverse().join('');
        return (<p className="SimpleComponent">{content}</p>);
    }
});