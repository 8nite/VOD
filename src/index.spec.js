import React from 'react';
import Index from './index'
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testindex = () => (
    <Index>
    </Index>
)

describe('index tester', () => {
    it('rendering correct loads', () => {
        const Index = shallow(testindex());
        expect(Index.find('Index').map((node) => node.text())).toHaveLength(1)
    })
    it('testing onChangeFilter function', () => {


    })
})
