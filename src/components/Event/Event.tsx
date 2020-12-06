import { Card, CardContent, CardHeader } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { EventsInitialState } from 'store/reducers/events.reducer';
import MarketComponent from './components/Market/Market';
import './Event.scss';

const className = 'Event-component';

const Event: React.FC = () => {
  const { events } = useSelector<RootState, EventsInitialState>((state) => state.events);

  return (
    <div className={className}>
      {events
        .filter((event) => event.markets.length)
        .map((event) => (
          <Card variant="outlined" key={event.id} className={`${className}__card`}>
            <CardHeader title={event.name}>
              <div className={`${className}__label`}>{event.name}</div>
            </CardHeader>
            <CardContent>
              <div className={`${className}__markets`}>
                <MarketComponent markets={event.markets} />
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Event;
