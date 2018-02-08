import React from 'react'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Planets} from './Planets';

enzyme.configure({ adapter: new Adapter() });

describe('>> PLANET CONTAINER',()=>{

    let wrapper
    const mockBackButtonfn = jest.fn();
    const mockGetPlanetDatafn = jest.fn();

    beforeEach(()=>{
        wrapper = enzyme.shallow(<Planets backButton={mockBackButtonfn} getPlanetData={mockGetPlanetDatafn} />)
    })

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });

});