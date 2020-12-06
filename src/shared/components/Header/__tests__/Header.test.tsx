import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'test.utilities';
import Header from '../Header';

describe('Header Component', () => {
  it('should test snapshot', () => {
    const component = customRender(<Header />);
    expect(component.container).toMatchSnapshot();
  });

  it('should display title', () => {
    customRender(<Header />);
    const titleEl = screen.queryByText(/Bet Slip/);
    expect(titleEl).toBeInTheDocument();
  });

  describe('toggle drawer', () => {
    const showDrawer = () => {
      const component = customRender(<Header />);

      let titleEl = screen.queryByText(/have any bet selected, try selecting one option/);
      expect(titleEl).toBeNull();

      const button = screen.queryByLabelText(/menu/)!;
      fireEvent.click(button);

      titleEl = screen.queryByText(/have any bet selected, try selecting one option/);
      expect(titleEl).toBeInTheDocument();

      return component;
    };

    it('should display drawer on hamburger icon clicked', () => {
      showDrawer();
    });

    it('should hide drawer on backdrop clicked', () => {
      jest.useFakeTimers();
      expect.assertions(3);

      const component = showDrawer();
      const divBackdrop = component.container.closest('body')!.querySelector('.MuiBackdrop-root')!;

      fireEvent.click(divBackdrop);

      jest.runAllTimers();

      const titleEl = screen.queryByText(/have any bet selected, try selecting one option/);
      expect(titleEl).toBeNull();
    });
  });
});
