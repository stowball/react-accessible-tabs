import React, { Component, PropTypes } from 'react';
import TabList from './TabList';
import Panels from './Panels';

class Tabs extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedIndex: this.props.initialSelectedIndex
        };

        this.tabTriggersLength = this.props.data.length;
        this.keys = {
            prev: 37,
            next: 39
        };
    }

    handleClick (e, index) {
        e.preventDefault();

        if (this.state.selectedIndex === index) {
            return;
        }

        this.setState({ selectedIndex: index });
    }

    handleKeyDown (e) {
        if (e.keyCode === this.keys.prev || e.keyCode === this.keys.next) {
            e.preventDefault();
        }
        else {
            return;
        }

        let targetIndex;

        if (e.keyCode === this.keys.prev && this.state.selectedIndex > 0) {
            targetIndex = this.state.selectedIndex - 1;
        }
        else if (e.keyCode === this.keys.next && this.state.selectedIndex < this.tabTriggersLength - 1) {
            targetIndex = this.state.selectedIndex + 1;
        }
        else {
            return;
        }

        this.setState({ selectedIndex: targetIndex });
    }

    render () {
        return (
            <div className="tabs">
                <TabList
                    {...this.props}
                    selectedIndex={this.state.selectedIndex}
                    onClick={this.handleClick.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                />
                <Panels {...this.props} selectedIndex={this.state.selectedIndex} />
            </div>
        );
    }
}

Tabs.defaultProps = {
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
