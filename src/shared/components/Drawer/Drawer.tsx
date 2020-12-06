import React from 'react';
import { Button, Card, Drawer, Typography } from '@material-ui/core';
import { RootState } from 'store/reducers';
import { EventsInitialState } from 'store/reducers/events.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { SelectionType, SelectedSelectionOptions } from 'domains/selection';
import { EventsActionCreators } from 'store/actions/action-creators/events.actionCreator';

import './Drawer.scss';

interface DrawerProps {
  showDrawer: boolean;
  onToggleDrawer: (arg: boolean) => void;
}

const className = 'Drawer-component';

const DrawerComponent: React.FC<DrawerProps> = ({ showDrawer, onToggleDrawer }: DrawerProps) => {
  const dispatch = useDispatch();
  const { userSelection } = useSelector<RootState, EventsInitialState>((state) => state.events);

  const handleRemoveSelection = (selection: SelectionType): void => {
    dispatch({
      type: EventsActionCreators.SetUserSelection,
      payload: {
        selection,
        option: SelectedSelectionOptions.Unselect,
      },
    });
  };

  return (
    <Drawer anchor="right" open={showDrawer} onClose={() => onToggleDrawer(false)} className={className}>
      <div className={`${className}__container`}>
        {userSelection.length ? (
          userSelection.map((selection) => (
            <Card variant="outlined" key={selection.id} className={`${className}__card`}>
              <Typography variant="subtitle1">{selection.name}</Typography>
              <Typography variant="subtitle2">{selection.price}</Typography>
              <Button color="primary" variant="contained" onClick={() => handleRemoveSelection(selection)}>
                Delete
              </Button>
            </Card>
          ))
        ) : (
          <Card variant="outlined" className={`${className}__card`}>
            <Typography variant="body1">You don&apos;t have any bet selected, try selecting one option first! </Typography>
          </Card>
        )}
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
