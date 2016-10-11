import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Panel extends Component {
    createMarkup (str) {
        return { __html: str };
    }

    render () {
        const { content, id, index, selectedIndex } = this.props;
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
                {React.isValidElement(content) ? content : <div dangerouslySetInnerHTML={this.createMarkup(content)}></div>}
            </section>
        );
    }
}

Panel.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    id: PropTypes.string,
    index: PropTypes.number,
    selectedIndex: PropTypes.number
};

export default Panel;
