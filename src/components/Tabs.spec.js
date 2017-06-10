import React from 'react';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import expect from 'expect';

import data from '../../tools/testData';
import Tabs from './Tabs';
import TabList from './TabList';
import Panels from './Panels';

const noop = () => null;

describe('<Tabs />', () => {
    it('renders nothing with no data', () => {
        const wrapper = shallow(<Tabs />);

        expect(wrapper.type()).toBe(null);
    });

    it('renders div.tab with data', () => {
        const wrapper = shallow(<Tabs data={data} />);

        expect(wrapper.is('div.tabs')).toBe(true);
    });

    it('contains <TabList /> and <Panels />', () => {
        const wrapper = shallow(<Tabs data={data} />);

        expect(wrapper.containsAllMatchingElements([<TabList />, <Panels />])).toBe(true);
    });

    it('selectedIndex should be set to what\'s supplied', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={1} />);

        expect(wrapper.state('selectedIndex')).toBe(1);
    });

    it('when initialSelectedIndex < 0, selectedIndex should be 0', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={-1} />);

        expect(wrapper.state('selectedIndex')).toBe(0);
    });

    it('when initialSelectedIndex > data.length, selectedIndex should be 0', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={10} />);

        expect(wrapper.state('selectedIndex')).toBe(0);
    });

    it('when prev key pressed & index === 0, selectedIndex should === 0', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={0} />);

        wrapper.at(0).children().at(0).simulate('keyDown', { preventDefault: noop, key: 'ArrowLeft' });
        expect(wrapper.state('selectedIndex')).toBe(0);
    });

    it('when prev key pressed & index === data.length - 1, selectedIndex should === data.length - 2', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={data.length - 1} />);

        wrapper.at(0).children().at(0).simulate('keyDown', { preventDefault: noop, key: 'ArrowLeft' });
        expect(wrapper.state('selectedIndex')).toBe(data.length - 2);
    });

    it('when next key pressed & index === 0, selectedIndex should === 1', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={0} />);

        wrapper.at(0).children().at(0).simulate('keyDown', { preventDefault: noop, key: 'ArrowRight' });
        expect(wrapper.state('selectedIndex')).toBe(1);
    });

    it('when next key pressed & index === data.length - 1, selectedIndex should === data.length - 1', () => {
        const wrapper = shallow(<Tabs data={data} initialSelectedIndex={data.length - 1} />);

        wrapper.at(0).children().at(0).simulate('keyDown', { preventDefault: noop, key: 'ArrowRight' });
        expect(wrapper.state('selectedIndex')).toBe(data.length - 1);
    });
});
