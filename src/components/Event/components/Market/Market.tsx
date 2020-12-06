import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import { MarketType } from 'domains/market';
import Selection from '../Selection/Selection';
import './Market.scss';

interface MarketProps {
  markets: MarketType[];
}

const className = 'Market-component';

const MarketComponent: React.FC<MarketProps> = ({ markets }: MarketProps) => {
  return (
    <div className={className}>
      {markets.map((market) => (
        <div key={market.id} className={`${className}__container`}>
          <div className={`${className}__label`}>
            <Typography variant="h6">{market.name}</Typography>
          </div>
          <div className={`${className}__options`}>
            <Selection selections={market.selections} />
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default MarketComponent;
