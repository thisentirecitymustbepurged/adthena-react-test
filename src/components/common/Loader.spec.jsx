import React from 'react';
import { shallow } from 'enzyme';
import userDataMock from '@testUtils/usersDataMock';
import Loader from '@components/common/Loader';


const getUsersMock = jest.fn().mockImplementation(() => Promise.resolve(userDataMock));

const Component = () => <div />;

const render = props => shallow(
  <Loader {...props}>
    <Component />
  </Loader>
);

describe('Loader', () => {
  afterEach(() => {
    getUsersMock.mockClear();
  });

  it('should fetch data', async() => {
    expect(getUsersMock).toHaveBeenCalledTimes(0);

    const wrapper = render({
      itemsToLoad: {
        users: getUsersMock
      }
    });

    expect(getUsersMock).toHaveBeenCalledTimes(1);
  });
});
