import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabList from './TabList';
import Panels from './Panels';

const keys = {
    prev: 37,
    next: 39
};

class Tabs extends Component {
    constructor (props) {
        super(props);

        this.tabTriggersLength = this.props.data.length;

        this.state = {
            userInvokedSelection: false,
            selectedIndex: this.props.initialSelectedIndex < 0 || this.props.initialSelectedIndex > this.tabTriggersLength - 1 ? 0 : this.props.initialSelectedIndex
        };
    }

    handleClick = (e, index) => {
        e.preventDefault();

        if (this.state.selectedIndex === index) {
            return;
        }

        this.setState({
            userInvokedSelection: true,
            selectedIndex: index
        });
    }

    handleKeyDown = (e) => {
        if (e.keyCode === keys.prev || e.keyCode === keys.next) {
            e.preventDefault();
        }
        else {
            return;
        }

        let targetIndex;

        if (e.keyCode === keys.prev && this.state.selectedIndex > 0) {
            targetIndex = this.state.selectedIndex - 1;
        }
        else if (e.keyCode === keys.next && this.state.selectedIndex < this.tabTriggersLength - 1) {
            targetIndex = this.state.selectedIndex + 1;
        }
        else {
            return;
        }

        this.setState({
            userInvokedSelection: true,
            selectedIndex: targetIndex
        });
    }

    resetUserInvokedSelection = () => {
        this.setState({
            userInvokedSelection: false
        });
    }

    render () {
        if (!this.tabTriggersLength) {
            return null;
        }

        return (
            <div className="tabs">
                <TabList
                    {...this.props}
                    userInvokedSelection={this.state.userInvokedSelection}
                    selectedIndex={this.state.selectedIndex}
                    onClick={this.handleClick}
                    onKeyDown={this.handleKeyDown}
                    resetUserInvokedSelection={this.resetUserInvokedSelection}
                />
                <Panels {...this.props} selectedIndex={this.state.selectedIndex} />
            </div>
        );
    }
}

Tabs.defaultProps = {
    data: [],
    initialSelectedIndex: 0
};

Tabs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.string
            ]))
        ])
    })),
    selectedIndex: PropTypes.number,
    initialSelectedIndex: PropTypes.number
};

export default Tabs;
