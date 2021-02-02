import { useCallback, useEffect, useState } from 'react';
import useBasisCash from './useBasisCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useUpdateBondOracle = () => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleUpdate = useCallback(
    () => {
      handleTransactionReceipt(
        basisCash.updateBondOracle(),
        `Update Bond Oracle BlockTimestampLast`,
      );
    },
    [basisCash],
  );
  return { onRefresh: handleUpdate };
};

export default useUpdateBondOracle;
