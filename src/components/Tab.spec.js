import React from 'react';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import expect from 'expect';

import data from '../../tools/testData';
import Tab from './Tab';

describe('<Tab />', () => {
    it('renders li.tabs__tab-list-item[role="presentation"]', () => {
        const wrapper = shallow(<Tab />);

        expect(wrapper.is('li.tabs__tab-list-item[role="presentation"]')).toBe(true);
    });

    it('contains 1 a.tabs__trigger[role="tab"]', () => {
        const wrapper = shallow(<Tab />);

        expect(wrapper.find('a.tabs__trigger[role="tab"]').length).toBe(1);
    });

    it('a has correct content', () => {
        const wrapper = shallow(<Tab label={data[0].label} />);
        const a = wrapper.find('a');

        expect(a.text()).toBe('Tab 1');
    });

    it('a has correct aria states when selected', () => {
        const wrapper = shallow(<Tab index={0} selectedIndex={0} />);
        const a = wrapper.find('a');

        expect(a.prop('aria-selected') && a.prop('className').indexOf('is-selected') > -1 && a.prop('tabIndex') === 0).toBe(true);
    });

    it('a has correct aria states when un-selected', () => {
        const wrapper = shallow(<Tab index={0} selectedIndex={1} />);
        const a = wrapper.find('a');

        expect(!a.prop('aria-selected') && a.prop('className').indexOf('is-selected') === -1 && a.prop('tabIndex') === -1).toBe(true);
    });
});
