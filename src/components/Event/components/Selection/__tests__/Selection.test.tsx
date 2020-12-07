import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'test.utilities';
import { initialStateStub, selectionsStub } from 'test.stub';
import { EventsActionCreators } from 'store/actions/action-creators/events.actionCreator';
import { SelectedSelectionOptions } from 'domains/selection';
import Selection from '../Selection';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as {}),
  useDispatch: () => mockDispatch,
}));

describe('Selection Component', () => {
  it('should test snapshot', () => {
    const component = customRender(<Selection selections={selectionsStub} />);
    expect(component.container).toMatchSnapshot();
  });

  it('should display all selections avaiable', () => {
    customRender(<Selection selections={selectionsStub} />);
    const titleEl = screen.queryByText(/Real Madrid/);
    expect(titleEl).toBeInTheDocument();
  });

  it('should not display selections if there is no data', () => {
    customRender(<Selection selections={[]} />);
    const titleEl = screen.queryByText(/Real Madrid/);
    expect(titleEl).toBeNull();
  });

  it('should dispatch action on button clicked', () => {
    customRender(<Selection selections={selectionsStub} />);

    const button = screen.queryByText(/Real Madrid/)?.closest('button')!;
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: EventsActionCreators.SetUserSelection,
      payload: {
        selection: selectionsStub[0],
        option: SelectedSelectionOptions.Select,
      },
    });
  });

  it('should display already selected options with custom selected class', () => {
    customRender(<Selection selections={selectionsStub} />, {
      initialState: {
        ...initialStateStub,
        events: { ...initialStateStub.events, userSelection: [selectionsStub[0]] },
      },
    });

    const button = screen.queryByText(/Real Madrid/)?.closest('button')!;
    expect(button.classList.contains('Selection-component__button--selected')).toBeTruthy();
  });
});
