import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Tab extends React.Component {
    componentDidUpdate () {
        const { id, index, selectedIndex } = this.props;
        const isSelected = index === selectedIndex;

        isSelected && this.refs[id] && this.refs[id].focus();
    }

    render () {
        const { id, index, label, selectedIndex, onClick, onKeyDown } = this.props;
        const isSelected = index === selectedIndex;
        const className = classNames(
            'tabs__trigger',
            { 'is-selected': isSelected }
        );

        return (
            <li role="presentation">
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
