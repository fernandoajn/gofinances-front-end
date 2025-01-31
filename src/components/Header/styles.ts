import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #222831;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: 0.2s;
        border: 3px solid transparent;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
          padding: 10px 0;
          border-bottom: 3px solid #f2a365;
        }
      }
    }
  }
`;
