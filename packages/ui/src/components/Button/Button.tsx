import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`; 