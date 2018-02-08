import React from 'react'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Home} from './Home';

enzyme.configure({ adapter: new Adapter() });

describe('>> HOME CONTAINER',()=>{

  let wrapper
  const mockGetPlanetListfn = jest.fn();

  beforeEach(()=>{
    wrapper = enzyme.shallow(<Home getPlanetList={mockGetPlanetListfn}/>)
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

});