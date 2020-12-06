import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectionType, SelectedSelectionOptions } from 'domains/selection';
import { EventsActionCreators } from 'store/actions/action-creators/events.actionCreator';
import { RootState } from 'store/reducers';
import { EventsInitialState } from 'store/reducers/events.reducer';
import './Selection.scss';

interface SelectionProps {
  selections: SelectionType[];
}

const className = 'Selection-component';

const SelectionComponent: React.FC<SelectionProps> = ({ selections }: SelectionProps) => {
  const dispatch = useDispatch();
  const { userSelection } = useSelector<RootState, EventsInitialState>((state) => state.events);
  const selectedIds = userSelection.map((sel) => sel.id);

  const handleButtonClicked = (selection: SelectionType): void => {
    dispatch({
      type: EventsActionCreators.SetUserSelection,
      payload: {
        selection,
        option: SelectedSelectionOptions.Select,
      },
    });
  };

  return (
    <div className={className}>
      {selections.map((selection) => {
        const isAlreadySelected = selectedIds.includes(selection.id);
        return (
          <Button
            onClick={() => handleButtonClicked(selection)}
            size="small"
            disableElevation
            variant="outlined"
            key={selection.id}
            className={`${className}__button ${isAlreadySelected ? `${className}__button--selected` : ''}`}
            disabled={isAlreadySelected}
          >
            <Typography variant="body2">{selection.name}</Typography>
            <Typography variant="body2">{selection.price}</Typography>
          </Button>
        );
      })}
    </div>
  );
};

export default SelectionComponent;
