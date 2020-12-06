import { screen } from '@testing-library/react';
import { EventsActionCreators } from 'store/actions/action-creators/events.actionCreator';
import App from '../App';
import { initialStateStub } from '../test.stub';
import { customRender } from 'test.utilities';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as {}),
  useDispatch: () => mockDispatch,
}));

describe('App Component', () => {
  it('should test snapshot', () => {
    const component = customRender(<App />);
    expect(component.container).toMatchSnapshot();

    expect(mockDispatch).toHaveBeenCalledWith({ type: EventsActionCreators.RequestEvents });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it('should display backdrop if data is fetching', () => {
    const component = customRender(<App />, {
      initialState: {
        ...initialStateStub,
        app: { ...initialStateStub.app, isLoading: true },
      },
    });
    const backDropElement = component.container.closest('body')!.querySelector('.MuiBackdrop-root');
    expect(backDropElement).toBeInTheDocument();
  });

  it('should display events if there is data available', () => {
    customRender(<App />);
    const titleEl = screen.queryByText(/Real Madrid vs Barcelona/);
    expect(titleEl).toBeInTheDocument();
  });
});
