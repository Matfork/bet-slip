import { screen } from '@testing-library/react';
import { customRender } from 'test.utilities';
import { marketsStub } from 'test.stub';
import Market from '../Market';

describe('Market Component', () => {
  it('should test snapshot', () => {
    const component = customRender(<Market markets={marketsStub} />);
    expect(component.container).toMatchSnapshot();
  });

  it('should display all markets avaiable', () => {
    customRender(<Market markets={marketsStub} />);
    const titleEl = screen.queryByText(/Team to Win/);
    expect(titleEl).toBeInTheDocument();
  });

  it('should not display events if there is no data', () => {
    customRender(<Market markets={[]} />);
    const titleEl = screen.queryByText(/Team to Win/);
    expect(titleEl).toBeNull();
  });
});
