import Video from './Video'
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testVideo = (entries, onEnded) => (
    <Video entries={entries} onEnded={onEnded}>
    </Video>
)

describe('List of Videos', () => {
    const onEnded = () => { }
    it('entries is null', () => {
        const entries = null
        const VideoLayout = shallow(testVideo(entries, onEnded));
        expect(VideoLayout.find('div').map((node) => node.text())).toHaveLength(0)
    })
    it('entries has one json', () => {
        const entries = [{
            id: '1',
            title: '1',
            images: [{
                url: '1'
            }],
            contents: [{
                url: '1'
            }]
        }]
        const VideoLayout = shallow(testVideo(entries, onEnded));
        expect(VideoLayout.find('div').map((node) => node)).toHaveLength(1)
    })
    it('entries has two json', () => {
        const entries = [{
            id: '1',
            title: '1',
            images: [{
                url: '1'
            }],
            contents: [{
                url: '1'
            }]
        }, { "title": "10 Things I Hate About You", "description": "A new kid must find a guy to date the meanest girl in school, the older sister of the girl he has a crush on, who cannot date until her older sister does.", "type": "movie", "publishedDate": 931478400000, "availableDate": 931478400000, "metadata": [{ "value": "en", "name": "language" }], "contents": [{ "url": "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4", "format": "mp4", "width": 640, "height": 360, "language": "en", "duration": 3600000, "geoLock": false, "id": "vid_103" }], "credits": [{ "role": "Director", "name": "Gil Junger" }, { "role": "Heath Ledger", "name": "Heath Ledger" }, { "role": "Julia Stiles", "name": "Julia Stiles" }, { "role": "Joseph Gordon-Levitt", "name": "Joseph Gordon-Levitt" }], "parentalRatings": [{ "scheme": "MPAA", "rating": "PG_13" }], "images": [{ "type": "cover", "url": "http://lorempixel.com/214/317/?t=1", "width": 214, "height": 317, "id": "f67e6e8a7478d1dae24e869f3d7081cf" }], "categories": [{ "title": "Comedy", "description": "Comedy movies", "id": "movies-comedy" }, { "title": "Drama", "description": "Drama movies", "id": "movies-drama" }, { "title": "Romance", "description": "Romantic movies", "id": "movies-romance" }], "id": "10-things-i-hate-about-you" }]
        const VideoLayout = shallow(testVideo(entries, onEnded));
        expect(VideoLayout.find('div').map((node) => node)).toHaveLength(2)
    })
})

describe('Video INFO', () => {
    const onEnded = () => { }
    const entries = [{
        id: '1',
        title: '1',
        images: [{
            url: '1'
        }],
        contents: [{
            url: '1'
        }]
    }]
    it('SHOW INFO', () => {
        const VideoLayout = shallow(testVideo(entries, onEnded));
        VideoLayout.instance().showModal()
        expect(VideoLayout.state('show')).toEqual(true)
    })
    it('HIDE INFO', () => {
        const VideoLayout = shallow(testVideo(entries, onEnded));
        VideoLayout.instance().hideModal()
        expect(VideoLayout.state('show')).toEqual(false)
    })
})
