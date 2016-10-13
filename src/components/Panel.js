import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Panel extends Component {
    createMarkup (str) {
        return { __html: str };
    }

    renderContents (child) {
        return React.isValidElement(child) ? child : <div dangerouslySetInnerHTML={this.createMarkup(child)}></div>;
    }

    render () {
        const { children, id, index, selectedIndex } = this.props;
        const isSelected = index === selectedIndex;
        const className = classNames(
            'tabs__panel',
            { 'is-hidden': !isSelected }
        );

        return (
            <section
                aria-hidden={!isSelected}
                className={className}
                id={id}
                role="tabpanel"
                tabIndex={isSelected ? 0 : -1}>
                {React.Children.map(children, this.renderContents, this)}
            </section>
        );
    }
}

Panel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string
        ]))
    ]),
    id: PropTypes.string,
    index: PropTypes.number,
    selectedIndex: PropTypes.number
};

export default Panel;
