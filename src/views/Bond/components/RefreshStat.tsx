import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import IconButton from '../../../components/IconButton';
import useUpdateBondOracle from '../../../hooks/useUpdateBondOracle';

interface RefreshStatProps {
  tokenName: string;
  description: string;
  price: string;
  lastUpdatedTime: string;
  disabled?: boolean;
}

const ExchangeStat: React.FC<RefreshStatProps> = ({ tokenName, description, price, lastUpdatedTime, disabled = false }) => {
  const { onRefresh } = useUpdateBondOracle();

  return (
    <Card>
      <StyledCardContentInner>
        <StyledCardTitle>
          <StyledTitleDisplay>
            {`💰 ${tokenName} = $${price}`}
            <IconButton children="🔄" onClick={onRefresh} disabled={disabled} />
          </StyledTitleDisplay>
        </StyledCardTitle>
        <StyledDesc>{description}</StyledDesc>
        <StyledDesc>{lastUpdatedTime}</StyledDesc>
      </StyledCardContentInner>
    </Card>
  );
};

const StyledTitleDisplay = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledCardTitle = styled.div`
  color: ${(props) => props.theme.color.grey[200]};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledDesc = styled.span`
  color: ${(props) => props.theme.color.grey[300]};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledCardContentInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[2]}px;
`;

export default ExchangeStat;
