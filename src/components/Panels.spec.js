import React from 'react';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import expect from 'expect';

import data from '../../tools/testData';
import Panels from './Panels';

describe('<Panels />', () => {
    it('renders nothing with no data', () => {
        const wrapper = shallow(<Panels data={[]} />);

        expect(wrapper.type()).toBe(null);
    });

    it('renders div.tabs__panels', () => {
        const wrapper = shallow(<Panels data={data} />);

        expect(wrapper.is('div.tabs__panels')).toBe(true);
    });

    it('contains 3 <Panel />s', () => {
        const wrapper = shallow(<Panels data={data} />);

        expect(wrapper.html().match(/<section.*?class="tabs__panel.*?role="tabpanel".*?<\/section>/g).length).toBe(3);
    });

    it('.tabs__panel 1\'s [id] is i0-Tab1', () => {
        const wrapper = shallow(<Panels data={data} />);
        const tabPanel = wrapper.html().match(/<section.*?class="tabs__panel.*?role="tabpanel".*?<\/section>/)[0];

        expect(tabPanel.indexOf('id="i0-Tab1"') > -1).toBe(true);
    });
});
