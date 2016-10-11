import React from 'react';
import { render } from 'react-dom';

import Tabs from '../../src';

var tabContent = [
    {
        label: 'Section 1',
        content: `
            <h3>Section 1</h3>
            <p>Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Aliquam nisl enim, tristique tempus placerat at, posuere in lectus. Vestibulum sit amet ipsum lacus. Suspendisse <em>potenti</em>.</p>
            <p>Nulla lobortis tempus commodo. Fusce ac sodales magna. Cras molestie risus a <q cite="http://www.mattstow.com">enim convallis vitae</q> luctus libero lacinia. Donec tempus tempus tellus, ac lacinia turpis mattis ac. Maecenas sit <q cite="http://www.mattstow.com">amet tellus nec mi gravida posuere</q> non pretium magna. Aliquam nisl enim, tristique tempus placerat at, posuere in lectus. Aliquam tincidunt velit sit amet ante hendrerit tempus. Sed mauris arcu, aliquet ultrices malesuada sed, pretium id <kbd>CTRL</kbd> + <kbd>V</kbd> massa.</p>
        `
    },
    {
        label: 'Section 2',
        content: `
            <h3>Section 2</h3>
            <p>Fusce ac sodales <abbr title="Cascading Style Sheets">CSS</abbr> magna. Donec et nisi dictum felis sollicitudin congue. Aliquam nisl enim, tristique tempus placerat at, posuere in lectus. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, iaculis pretium sem orci aliquet mauris. Suspendisse <del>potenti</del>. Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Fusce ac sodales magna. Potenti et eros sed justo commodo bibendum non at nunc.</p>
            <p>Suspendisse potenti cras molestie, risus a enim convallis vitae luctus libero lacinia. Nulla vel magna sit amet dui <a href="#">lobortis</a> commodo vitae vel nulla. Suspendisse potenti. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, <a href="#">iaculis pretium</a> sem orci aliquet mauris. Donec a congue leo. Vestibulum sit amet ipsum lacus.</p>
        `
    },
    {
        label: 'Section 3',
        content: `
            <h3>Section 3</h3>
            <p>Potenti et eros sed justo commodo bibendum non at nunc. Maecenas sit amet tellus nec mi gravida posuere non pretium magna. Nulla auctor eleifend turpis consequat pharetra.</p>
            <p>Vestibulum sit amet ipsum lacus. Lorem ipsum dolor sit amet, consectetur <em>adipiscing elit</em>. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, iaculis pretium sem orci aliquet mauris. Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Nulla vel magna sit amet dui <a href="#">lobortis</a> commodo vitae vel nulla.</p>
        `
    }
];

var css = `
    .tabs__tab-list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .tabs__trigger {
        background: lightgrey;
        border: 1px solid;
        border-bottom: none;
        color: #000;
        display: block;
        font-weight: bold;
        margin: 0 5px;
        padding: 15px 20px;
        text-decoration: none;
    }

    .tabs__trigger.is-selected {
        background: lightblue;
    }

    .tabs__panel {
        border: 1px solid;
        display: inherit;
        padding: 20px;
    }

    .tabs__panel.is-hidden {
        display: none;
    }

    body {
        font-family: sans-serif;
        margin: auto;
        padding: 30px;
        max-width: 800px;
        overflow-y: scroll;
    }

    h3 {
        margin-top: 0;
    }

    p:last-child {
        margin-bottom: 0;
    }

    :focus {
        box-shadow: 0 0 4px dodgerblue;
        outline: none;
    }
`;

const initialSelectedIndex = 0;

class Demo extends React.Component {
    render () {
        return (
            <div>
                <style>{css}</style>
                <Tabs data={tabContent} initialSelectedIndex={initialSelectedIndex} />
            </div>
        );
    }
}

render(<Demo />, document.getElementById('demo'));
