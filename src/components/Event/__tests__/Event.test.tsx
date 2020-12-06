import { screen } from '@testing-library/react';
import { initialStateStub } from 'test.stub';
import { customRender } from 'test.utilities';
import Event from '../Event';

describe('Event Component', () => {
  it('should test snapshot', () => {
    const component = customRender(<Event />);
    expect(component.container).toMatchSnapshot();
  });

  it('should display all events avaiable', () => {
    customRender(<Event />);
    const titleEl = screen.queryByText(/Real Madrid vs Barcelona/);
    expect(titleEl).toBeInTheDocument();
  });

  it('should not display events if there is no data', () => {
    customRender(<Event />, {
      initialState: {
        ...initialStateStub,
        events: { ...initialStateStub.events, events: [] },
      },
    });
    const titleEl = screen.queryByText(/Real Madrid vs Barcelona/);
    expect(titleEl).toBeNull();
  });
});
