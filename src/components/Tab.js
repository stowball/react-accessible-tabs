import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tab extends Component {
    componentDidUpdate () {
        const { id, index, userInvokedSelection, selectedIndex, resetUserInvokedSelection } = this.props;
        const isSelected = index === selectedIndex;

        if (userInvokedSelection && isSelected && this.refs[id]) {
            this.refs[id].focus();
            resetUserInvokedSelection();
        }
    }

    render () {
        const { id, index, label, selectedIndex, onClick, onKeyDown } = this.props;
        const isSelected = index === selectedIndex;
        const className = classNames(
            'tabs__trigger',
            { 'is-selected': isSelected }
        );

        return (
            <li className="tabs__tab-list-item" role="presentation">
                <a
                    ref={id}
                    aria-controls={id}
                    aria-selected={isSelected}
                    className={className}
                    href={`#${id}`}
                    role="tab"
                    tabIndex={isSelected ? 0 : -1}
                    onClick={(e) => onClick(e, index)}
                    onKeyDown={(e) => onKeyDown(e)}
                >
                    {label}
                </a>
            </li>
        );
    }
}

Tab.propTypes = {
    id: PropTypes.string,
    index: PropTypes.number,
    label: PropTypes.string,
    selectedIndex: PropTypes.number,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func
};

export default Tab;
