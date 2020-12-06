import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'store/reducers';
import { initialStateStub } from './test.stub';

export const customRender = (ui: React.ReactElement, { initialState = initialStateStub, ...renderOptions }: any = {}): RenderResult => {
  const store = createStore(rootReducer, initialState);
  const Wrapper = ({ children }: any): React.ReactElement => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
