import Index from './Index'
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testIndex = (entries, changeFilter, watched, onEnded) => (
    <Index entries={entries} changeFilter={changeFilter} watched={watched} onEnded={onEnded}>
    </Index>
)

describe('Index Page', () => {
    let entries = []
    let changeFilter = () => { }
    let watched = []
    let onEnded = () => { }

    beforeEach(function () {
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({json: () => {return entries}})
        )
    });
    process.env = Object.assign(process.env, { REACT_APP_ENV_VAR: 'http://localhost:3010' });
    it('Showing right template', () => {
        const IndexLayout = shallow(testIndex(entries, changeFilter, watched, onEnded));
        expect(IndexLayout.find('Header').map((node) => node.text())).toHaveLength(1)
        expect(IndexLayout.find('VideoList').map((node) => node.text())).toHaveLength(1)
    })
})
