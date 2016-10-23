import React from 'react';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import expect from 'expect';

import data from '../../tools/testData';
import TabList from './TabList';
import Tab from './Tab';

describe('<TabList />', () => {
    it('renders nothing with no data', () => {
        const wrapper = shallow(<TabList data={[]} />);

        expect(wrapper.type()).toBe(null);
    });

    it('renders ul.tabs__tab-list[role="tablist"]', () => {
        const wrapper = shallow(<TabList data={data} />);

        expect(wrapper.is('ul.tabs__tab-list[role="tablist"]')).toBe(true);
    });

    it('contains <Tab /> component', () => {
        const wrapper = shallow(<TabList data={data} />);

        expect(wrapper.containsMatchingElement(<Tab />)).toBe(true);
    });

    it('contains 3 <Tab />s', () => {
        const wrapper = shallow(<TabList data={data} />);

        expect(wrapper.html().match(/<li class="tabs__tab-list-item".*?><\/li>/g).length).toBe(3);
    });

    it('.tabs__tab-list-item 1\'s [aria-controls] & [href] is i0-Tab1', () => {
        const wrapper = shallow(<TabList data={data} />);
        const tabListItem = wrapper.html().match(/<li class="tabs__tab-list-item".*?><\/li>/)[0];

        expect(tabListItem.indexOf('aria-controls="i0-Tab1"') > -1 && tabListItem.indexOf('href="#i0-Tab1"') > -1).toBe(true);
    });
});
