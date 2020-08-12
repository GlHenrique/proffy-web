import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colorTextInPrimary};
  background: ${theme.colorPrimary};
`;
