import { useCallback } from 'react';
import useBasisCash from './useBasisCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useCurvSwap = () => {
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleSwap = useCallback(
    (mic2Amount: string, usdtAmount: string) => {
      const mic2AmountBn = parseUnits(mic2Amount, 18);
      const usdtAmountBn = parseUnits(usdtAmount, 6);
      handleTransactionReceipt(
        basisCash.SwapMic(mic2AmountBn, usdtAmountBn),
        `Swap ${mic2Amount} MIC2 to USDT`
      );
    },
    [basisCash],
  );
  return { onSwap: handleSwap };
};

export default useCurvSwap;
