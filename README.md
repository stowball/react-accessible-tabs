# React Accessible Tabs

An accessible React tabs component, ported from [my vanilla JS plugin](http://codepen.io/stowball/pen/xVWwWe).

[![npm version](https://badge.fury.io/js/react-accessible-tabs.svg)](https://badge.fury.io/js/react-accessible-tabs)
[![Build Status](https://travis-ci.org/stowball/react-accessible-tabs.svg?branch=master)](https://travis-ci.org/stowball/react-accessible-tabs)

## Demo

[See it in action](https://stowball.github.io/react-accessible-tabs/).

## Usage

### Installation

```sh
npm install react-accessible-tabs --save
```

### In React

```js
import Tabs from 'react-accessible-tabs';

class App extends React.Component {
    render () {
        const tabContent = [
            {
                label: 'Tab 1',
                content: <CustomComponent text="Tab 1 content" />
            },
            {
                label: 'Tab 2',
                content: <Parent><Child text="Tab 2 content" /></Parent>
            },
            {
                label: 'Tab 3',
                content: '<p>Tab 3 content</p>'
            },
            {
                label: 'Tab 4',
                content: [
                  <Header />,
                  '<p>Tab 4 content</p>'
                  <Footer />
                ]
            }
        ];
        const initialSelectedIndex = 1;

        return (
            <Tabs data={tabContent} initialSelectedIndex={initialSelectedIndex} />
        );
    }
}
```

* `data[x].label` accepts a `string`
* `data[x].content` accepts React `element`s, a `string` or an `array` of `element`s and `string`s

### Styling

The styling is up to you and uses BEM selectors:

```scss
.tabs {}

    .tabs__tab-list {}
        .tabs__tab-list-item {}
            .tabs__trigger {
                &.is-selected {}
            }

    .tabs__panels {}
        .tabs__panel {
            &.is-hidden {}
        }
```

---

Copyright (c) 2016 [Matt Stow](http://mattstow.com)  
Licensed under the MIT license *(see [LICENSE](https://github.com/stowball/react-accessible-tabs/blob/master/LICENSE) for details)*
