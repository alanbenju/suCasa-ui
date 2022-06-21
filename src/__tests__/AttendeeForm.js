import React from 'react';
import { shallow } from "enzyme";
import { AttendeeFormContainer } from "../containers/AttendeeForm.container"

import * as reactRedux from 'react-redux';
import { AttendeeFormComponent } from '../components/AttendeeForm.component';
import { Button, Form } from 'react-bootstrap';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test AttendeeForm', function () {
  const mockStore = {
    attendee: {
      status: 'idle',
      error: null
    }
  };

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
    useSelectorMock.mockImplementation(selector => selector(mockStore));
  })
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  })

  it('AttendeeFormContainer should have AttendeeFormComponent', function () {
    const wrapper = shallow(<AttendeeFormContainer />);
    expect(wrapper.find(AttendeeFormComponent)).toHaveLength(1);
    wrapper.find(AttendeeFormComponent).at(0).props().onCreateAttendee({preventDefault: jest.fn()});
    expect(useDispatchMock).toHaveBeenCalled()
  });

  it('AttendeeFormComponent should have form inputs. Click on submit', function () {
    const props = {
      name: 'test', email: 'test@email.com', company: 'test', onNameChanged: jest.fn(), onEmailChanged: jest.fn(), onCompanyChanged: jest.fn(), onCreateAttendee:  jest.fn()
    }
    const wrapper = shallow(<AttendeeFormComponent {...props}/>);
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(Form.Group)).toHaveLength(3);
    expect(wrapper.find(Button)).toHaveLength(1);
    wrapper.find(Form).at(0).simulate('submit')
    expect(props.onCreateAttendee).toBeCalled()
  });
});