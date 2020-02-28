import configureStore from './store'
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { browserHistory } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('injectedReducers', () => {
    let store

    it('checking store', () => {
        store = configureStore({}, browserHistory);
        expect(typeof store.store).toEqual('object');
    })
    it('checking persistor', () => {
        store = configureStore({}, browserHistory);
        expect(typeof store.persistor).toEqual('object');
    })
})
