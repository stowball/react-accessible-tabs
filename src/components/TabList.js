import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import idSafeName from '../helpers/idSafeName';

class TabList extends Component {
    render () {
        const { data, userInvokedSelection, selectedIndex, onClick, onKeyDown, resetUserInvokedSelection } = this.props;

        if (!data.length) {
            return null;
        }

        return (
            <ul role="tablist" className="tabs__tab-list">
                {data.map((tab, index) => {
                    const id = idSafeName(tab.label, index);

                    return (
                        <Tab
                            key={id}
                            id={id}
                            index={index}
                            label={tab.label}
                            userInvokedSelection={userInvokedSelection}
                            selectedIndex={selectedIndex}
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                            resetUserInvokedSelection={resetUserInvokedSelection}
                        />
                    );
                })}
            </ul>
        );
    }
}

TabList.propTypes = {
    data: PropTypes.array,
    selectedIndex: PropTypes.number,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func
};

export default TabList;
