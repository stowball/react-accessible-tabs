import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createFragment from 'react-addons-create-fragment';
import Panel from './Panel';
import idSafeName from '../helpers/idSafeName';

class Panels extends Component {
    render () {
        const { data, selectedIndex } = this.props;

        if (!data.length) {
            return null;
        }

        return (
            <div className="tabs__panels">
                {data.map((panel, index) => {
                    const id = idSafeName(panel.label, index);
                    let o = {};

                    o[id] = panel.content;
                    const children = createFragment(o);

                    return (
                        <Panel
                            key={id}
                            id={id}
                            index={index}
                            selectedIndex={selectedIndex}>
                            {children}
                        </Panel>
                    );
                })}
            </div>
        );
    }
}

Panels.propTypes = {
    data: PropTypes.array,
    selectedIndex: PropTypes.number
};

export default Panels;
