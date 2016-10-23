import React from 'react';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import expect from 'expect';

import data from '../../tools/testData';
import Panel from './Panel';

describe('<Panel />', () => {
    it('renders section.tabs__panel[role="tabpanel"]', () => {
        const wrapper = shallow(<Panel children={data[0].content} />);

        expect(wrapper.is('section.tabs__panel[role="tabpanel"]')).toBe(true);
    });

    it('section has correct aria states when selected', () => {
        const wrapper = shallow(<Panel index={0} selectedIndex={0} />);
        const section = wrapper.find('section');

        expect(!section.prop('aria-hidden') && section.prop('className').indexOf('is-hidden') === -1 && section.prop('tabIndex') === 0).toBe(true);
    });

    it('section has correct aria states when un-selected', () => {
        const wrapper = shallow(<Panel index={0} selectedIndex={1} />);
        const section = wrapper.find('section');

        expect(section.prop('aria-hidden') && section.prop('className').indexOf('is-hidden') > -1 && section.prop('tabIndex') === -1).toBe(true);
    });

    it('renders single React elements', () => {
        const wrapper = shallow(<Panel children={data[0].content} />);

        expect(wrapper.childAt(0).html()).toBe('<p>Tab 1 content</p>');
    });

    it('renders single string elements', () => {
        const wrapper = shallow(<Panel children={data[1].content} />);

        expect(wrapper.childAt(0).html()).toBe('<div><p>Tab 2 content</p></div>');
    });

    it('renders arrays of React and string elements', () => {
        const wrapper = shallow(<Panel children={data[2].content} />);

        expect(wrapper.childAt(0).html() === '<p>Tab 3 content 1</p>' && wrapper.childAt(1).html() === '<div><p>Tab 3 content 2</p></div>').toBe(true);
    });
});
