import React from 'react';

const data = [
    {
        label: 'Tab 1',
        content: <p>Tab 1 content</p>
    },
    {
        label: 'Tab 2',
        content: '<p>Tab 2 content</p>'
    },
    {
        label: 'Tab 3',
        content: [
            <p>Tab 3 content 1</p>,
            '<p>Tab 3 content 2</p>'
        ]
    }
];

export default data;
