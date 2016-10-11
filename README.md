# React Accessible Tabs

An accessible React tabs component, ported from [my vanilla JS plugin](http://codepen.io/stowball/pen/xVWwWe).

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
                content: '<p>Tab 2 content</p>'
            },
            {
                label: 'Tab 3',
                content: '<p>Tab 3 content</p>'
            }
        ];
        const initialSelectedIndex = 1;

        return (
            <Tabs data={tabContent} initialSelectedIndex={initialSelectedIndex} />
        );
    }
}
```

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
