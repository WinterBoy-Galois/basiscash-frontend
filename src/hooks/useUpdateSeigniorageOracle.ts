import { useCallback, useEffect, useState } from 'react';
import useBasisCash from './useBasisCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useUpdateSeigniorageOracle = () => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleUpdate = useCallback(
    () => {
      handleTransactionReceipt(
        basisCash.updateSeigniorageOracle(),
        `Update Seigniorage Oracle BlockTimestampLast`,
      );
    },
    [basisCash],
  );
  return { onRefresh: handleUpdate };
};

export default useUpdateSeigniorageOracle;
