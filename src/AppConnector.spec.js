import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppConnector from './AppConnector';
import { mapStateToProps } from './AppConnector';

configure({ adapter: new Adapter() });

const testAppConnector = () => (
    <AppConnector>
    </AppConnector>
)

describe('AppConnector tester', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(testAppConnector())
        expect(wrapper.find('Provider').map((node) => node.text())).toHaveLength(1)
    })

    it('testing mapStateToProps function', () => {
        const state = { root: { watched: jest.fn() } }
        expect(Object.keys(mapStateToProps(state))).toContain("filter")
        expect(Object.keys(mapStateToProps(state))).toContain("watched")
    })
})
