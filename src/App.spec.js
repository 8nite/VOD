import React from 'react';
import App from './App'
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testApp = () => (
    <App>
    </App>
)

describe('App tester', () => {
    it('rendering correct loads', () => {
        const AppLayout = shallow(testApp())
        expect(AppLayout.find('Index').map((node) => node.text())).toHaveLength(1)
    })
    it('testing onChangeFilter function', () => {
        const AppLayout = shallow(testApp())
        const e = {nativeEvent:{target:{value:'test'}}}
        let wrapper = AppLayout
        const dispatch = jest.fn()
        wrapper.instance().props = {dispatch}
        window.location.reload = jest.fn();
        wrapper.update()
        wrapper.instance().onChangeFilter(e);
        expect(dispatch).toBeCalledWith({
            "text": "test",
            "type": "CHANGEFILTER",
        })
    })    
    it('testing onEnded function', () => {
        const AppLayout = shallow(testApp())
        const e = {nativeEvent:{target:{id:'VideoEnded'}}}
        let wrapper = AppLayout
        const dispatch = jest.fn()
        wrapper.instance().props = {dispatch}
        window.location.reload = jest.fn();
        wrapper.update()
        wrapper.instance().onEnded(e);
        expect(dispatch).toBeCalledWith({
            "text": "VideoEnded",
            "type": "UPDATEWATCHED",
        })
    })
})
