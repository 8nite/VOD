import Header from './Header'
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testHeader = (changeFilter) => (
    <Header changeFilter={changeFilter}>
    </Header>
)

describe('Header Page', () => {
    let changeFilter = () => { }
    
    it('Showing right template', () => {
        const HeaderLayout = shallow(testHeader(changeFilter));
        expect(HeaderLayout.find('Button').map((node) => node.text())).toHaveLength(8)
    })
})
