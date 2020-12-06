import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import { MarketType } from 'domains/market';
import Selection from '../Selection/Selection';
import styles from './Market.module.scss';

interface MarketProps {
  markets: MarketType[];
}

const className = 'Market-component';

const MarketComponent: React.FC<MarketProps> = ({ markets }: MarketProps) => {
  return (
    <div className={styles[className]}>
      {markets.map((market) => (
        <div key={market.id} className={styles[`${className}__container`]}>
          <div className={styles[`${className}__label`]}>
            <Typography variant="h6">{market.name}</Typography>
          </div>
          <div className={styles[`${className}__options`]}>
            <Selection selections={market.selections} />
          </div>
          <Divider className={styles[`MuiDivider-root`]} />
        </div>
      ))}
    </div>
  );
};

export default MarketComponent;
