import React, { PropTypes } from 'react';
import Tab from './Tab';
import idSafeName from '../helpers/idSafeName';

class TabList extends React.Component {
    render () {
        const { data, selectedIndex, onClick, onKeyDown } = this.props;

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
                            selectedIndex={selectedIndex}
                            onClick={onClick}
                            onKeyDown={onKeyDown}
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
