import React from 'react';
import styled from 'styled-components';
import IconButton from '../../../components/IconButton';
import useUpdateSeigniorageOracle from '../../../hooks/useUpdateSeigniorageOracle';

interface MICInfoProp {
  spotPrice: string,
  twapPrice: string,
  supply: string,
  buttonIcon: string,
  disable: boolean
}

const MICInfo: React.FC<MICInfoProp> = ({
  spotPrice,
  twapPrice,
  supply,
  buttonIcon,
  disable
}) => {
  const { onRefresh } = useUpdateSeigniorageOracle();

  return (
    <>
      <Wrapper>
        <MICData title='MIC Spot Price' value={spotPrice} />
        {/* <MICData title='MIC TWAP Price' value={twapPrice} /> */}
        <MICTWAP title='MIC TWAP Price' value={twapPrice} buttonIcon={buttonIcon} onRefresh={onRefresh} disable={disable} />
        <MICData title="MIC Supply" value={supply} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    margin-top: ${(props) => props.theme.spacing[4]}px;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface MICDataProp {
  title: string,
  value: string,
}

const MICData: React.FC<MICDataProp> = ({
  title,
  value,
}) => {
  return (
    <DataWrapper>
      <DataHeader>{title}</DataHeader>
      <DataValue>{value}</DataValue>
    </DataWrapper>
  )
};

interface MICTWAPProp {
  title: string,
  value: string,
  buttonIcon: string,
  onRefresh: () => void,
  disable: boolean
}

const MICTWAP: React.FC<MICTWAPProp> = ({
  title,
  value,
  buttonIcon,
  onRefresh,
  disable
}) => {
  return (
    <DataWrapper>
      <DataHeader>{title}</DataHeader>
      <StyledData>
        <DataValue>{value}</DataValue>
        <IconButton children={buttonIcon} onClick={onRefresh} disabled={disable} />
      </StyledData>
    </DataWrapper>
  )
};

const StyledData = styled.div`
  display: flex;
  flex-direction: row;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataHeader = styled.h4`
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
  color: ${(props) => props.theme.color.gold};
`;

const DataValue = styled.div`
  color: ${(props) => props.theme.color.grey[200]}
`;

export default MICInfo;
