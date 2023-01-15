'use client';
import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;

  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin-left: auto;
  min-height: 656px;
`;

export const Product = styled.a`
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;

  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    footer {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  img {
    object-fit: cover;
  }

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2s ease-in-out;

    strong {
      font-size: ${(props) => props.theme.lg};
    }

    span {
      font-size: ${(props) => props.theme.xl};
      font-weight: bold;
      color: ${(props) => props.theme.green300};
    }
  }
`;
