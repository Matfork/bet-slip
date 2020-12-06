import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'test.utilities';
import { initialStateStub, selectionsStub } from 'test.stub';
import { EventsActionCreators } from 'store/actions/action-creators/events.actionCreator';
import { SelectedSelectionOptions } from 'domains/selection';
import Drawer from '../Drawer';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as {}),
  useDispatch: () => mockDispatch,
}));

describe('Drawer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should test snapshot', () => {
    const component = customRender(<Drawer showDrawer onToggleDrawer={jest.fn()} />);
    expect(component.container).toMatchSnapshot();
  });

  it('should not display drawer if showDrawer is set to false', () => {
    const component = customRender(<Drawer showDrawer={false} onToggleDrawer={jest.fn()} />);

    const drawerContainer = component.container.querySelector('.Drawer-component__container');
    expect(drawerContainer).not.toBeInTheDocument();
  });

  it('should display drawer if showDrawer is set to true', () => {
    customRender(<Drawer showDrawer onToggleDrawer={jest.fn()} />);

    const titleEl = screen.queryByText(/have any bet selected, try selecting one option/);
    expect(titleEl).toBeInTheDocument();
  });

  it('should display no data available', () => {
    customRender(<Drawer showDrawer onToggleDrawer={jest.fn()} />);

    const text = screen.queryByText(/have any bet selected, try selecting one option/)!;
    expect(text).toBeInTheDocument();
  });

  it('should display data available based on user selection', () => {
    customRender(<Drawer showDrawer onToggleDrawer={jest.fn()} />, {
      initialState: {
        ...initialStateStub,
        events: { ...initialStateStub.events, userSelection: selectionsStub.slice(0, 2) },
      },
    });

    let text = screen.queryByText(/Real Madrid/)!;
    expect(text).toBeInTheDocument();

    text = screen.queryByText(/Barcelona/)!;
    expect(text).toBeInTheDocument();
  });

  it('should delete userSelection on button clicked', () => {
    customRender(<Drawer showDrawer onToggleDrawer={jest.fn()} />, {
      initialState: {
        ...initialStateStub,
        events: { ...initialStateStub.events, userSelection: [selectionsStub[0]] },
      },
    });

    const button = screen.queryByText(/Delete/)?.closest('button')!;
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: EventsActionCreators.SetUserSelection,
      payload: {
        selection: selectionsStub[0],
        option: SelectedSelectionOptions.Unselect,
      },
    });
  });

  it('should call onToggleDrawer on drawer closed action', async () => {
    const onToggleDrawer = jest.fn();
    const component = customRender(<Drawer showDrawer onToggleDrawer={onToggleDrawer} />);

    const titleEl = screen.queryByText(/have any bet selected, try selecting one option/);
    expect(titleEl).toBeInTheDocument();

    const divBackdrop = component.container.closest('body')!.querySelector('.MuiBackdrop-root')!;
    fireEvent.click(divBackdrop);

    expect(onToggleDrawer).toHaveBeenCalled();
  });
});
