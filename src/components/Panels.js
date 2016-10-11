import React, { Component, PropTypes } from 'react';
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

                    return (
                        <Panel
                            key={id}
                            content={panel.content}
                            id={id}
                            index={index}
                            selectedIndex={selectedIndex}
                        />
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
