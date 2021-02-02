import { BigNumber } from 'ethers';

export const getDisplayDate = (timestamp: number) => {
  return new Date(timestamp*1000);
};
