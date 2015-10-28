import React from 'react';
import _ from 'lodash';

var FilterList = React.createClass({
    getInitialState() {
        return {
            nextQuery: ''
        };
    },
    componentWillMount() {
        console.log('Will mount');
        if (this.props.onQuery) {
            this._onQuery = _.debounce(this.props.onQuery, 500);
        }
    },
    componentWillUnmount() {
        console.log('Will unmount');
        // Remove reference to function
        this._onQuery = null;
    },
    onUserInput: function(evt) {
        var val = evt.target.value;

        this.setState({nextQuery: val});

        this._onQuery && this._onQuery(val);
    },
    render() {
        var queryInfo;

        if (this.props.query !== this.state.nextQuery) {
            queryInfo = 'Stop typing to search "' + this.state.nextQuery + '"...';
        } else if (this.props.query) {
            queryInfo = 'Showing ' + this.props.children.length + ' results for "' + this.props.query + '"';
        } else {
            queryInfo = 'Showing all ' + this.props.children.length + ' results';;
        }

        return (
            <div>
                <input type="search" onChange={this.onUserInput} autoFocus={true} placeholder="Search..." />
                <p><strong>{queryInfo}</strong></p>
                <div>
                    {this.props.children}
                </div>
                <p>{this.props.children.length} results found.</p>
            </div>
            );
    }
});


module.exports = FilterList