import React, { useCallback, useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import useBasisCash from '../../hooks/useBasisCash';

import TokenInput from '../../components/TokenInput';
import TokenSwap from '../../components/TokenSwap';
import useTokenBalance from '../../hooks/useTokenBalance';
import Button from '../../components/Button';
import { getDisplayBalance } from '../../utils/formatBalance';
import useApprove, { ApprovalState } from '../../hooks/useApprove';
import { useWallet } from 'use-wallet';
import useCurvDeposit from '../../hooks/useCurvDeposit';
import useCurvSwap from '../../hooks/useCurvSwap';
import useCashStats from '../../hooks/useCashStats';
import { couldStartTrivia } from 'typescript';

const swapMic = '0x09b32387fc154b4fa6fd06a9c09a91316f8fe278';

const Swap: React.FC = () => {
  const { account } = useWallet();
  const basisCash = useBasisCash();
  const micStats = useCashStats();

  const mic2Balance = useTokenBalance(basisCash.MIC2);
  const usdtBalance = useTokenBalance(basisCash.USDT);

  const [usdtVal, setUsdtVal] = useState('')
  const [mic2Val, setMic2Val] = useState('')
  
  const handleUsdtChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUsdtVal(e.currentTarget.value);
    let usdtVal = e.currentTarget.value;
    if(usdtVal == '') usdtVal = '0';
    if (basisCash && micStats) {
      setMic2Val( (parseFloat(usdtVal) / parseFloat(micStats.priceInUSDT) ).toString());
    }
    else{
      setMic2Val('0')
    }
  }, [basisCash,micStats, setMic2Val, setUsdtVal])

  const handleMic2Change = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setMic2Val(e.currentTarget.value);
    let mic2Val = e.currentTarget.value;
    if(mic2Val == '') mic2Val = '0';
    if (basisCash && micStats) {
      setUsdtVal( (parseFloat(micStats.priceInUSDT) * parseFloat(mic2Val)).toString());
    }
    else{
      setUsdtVal('0')
    }
  }, [basisCash,micStats, setMic2Val, setUsdtVal])

  const mic2FullBalance = useMemo(() => {
    return getDisplayBalance(mic2Balance, 18, 6)
  }, [mic2Balance])

  const usdtFullBalance = useMemo(() => {
    return getDisplayBalance(usdtBalance, 6, 6)
  }, [usdtBalance])

  const handleSelectMic2Max = useCallback(() => {
    setMic2Val(mic2FullBalance)
    if (basisCash && micStats) {
      setUsdtVal( (parseFloat(micStats.priceInUSDT) * parseFloat(mic2FullBalance)).toString());
    }
    else{
      setUsdtVal('0')
    }
  }, [mic2FullBalance, basisCash,micStats, setMic2Val, setUsdtVal])

  const [mic2ApproveStatus, approveMic2] = useApprove(basisCash.MIC2, basisCash.swapMic.address);

  const depositReady = useMemo(() => {
    return mic2Val !== ''
  }, [mic2ApproveStatus, mic2Val, usdtVal]);

  const { onSwap } = useCurvSwap();

  return (
    <Page>
      {!!account ? (
        <Card>
          <CardTitle>Swap</CardTitle>
          <TokenInput
            max={mic2FullBalance}
            symbol='MIC2'
            onChange={handleMic2Change}
            onSelectMax={handleSelectMic2Max}
            value={mic2Val} />
          <TokenSwap
            max={usdtFullBalance}
            symbol='USDT'
            onChange={handleUsdtChange}
            value={usdtVal} />

          <ButtonWrapper>
            <Button text='Swap' disabled={!depositReady} onClick={() => onSwap(mic2Val, usdtVal)} />
          </ButtonWrapper>
        </Card>
      ) : (
        <UnlockWallet />
      )}
    </Page>
  );
};

const UnlockWallet = () => {
  const { connect } = useWallet();
  return (
    <Center>
      <Button onClick={() => connect('injected')} text="Unlock Wallet" />
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  padding-top: ${props => props.theme.spacing[4]}px;
  color: white;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #426687;
  border-radius: 20px;
  padding: ${props => props.theme.spacing[4]}px;
`

const CardTitle = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 700;
`

const ButtonWrapper = styled.div`
  padding-top: ${props => props.theme.spacing[4]}px;
`

export default Swap;
