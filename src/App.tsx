import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventComponent from 'components/Event/Event';
import { EventsActionCreators } from 'store/actions/action-creators/events.actionCreator';
import HeaderComponent from 'shared/components/Header/Header';
import { RootState } from 'store/reducers';
import { AppInitialState } from 'store/reducers/app.reducer';
import { Backdrop, CircularProgress } from '@material-ui/core';
import styles from './App.module.scss';

const className = 'App-component';

const App: React.FC = () => {
  const { isLoading } = useSelector<RootState, AppInitialState>((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: EventsActionCreators.RequestEvents });
  }, []);

  return (
    <div className={styles[className]}>
      <HeaderComponent />

      <div className="aea-ctm" />

      {isLoading ? (
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className={styles[`${className}__responsive-container`]}>
          <EventComponent />
        </div>
      )}
    </div>
  );
};

export default App;
