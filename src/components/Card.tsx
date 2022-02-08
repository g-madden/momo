import React from 'react';
import styled from 'styled-components';
import { PinIcon } from '../icons/Pin';

const Styled = styled.div`
  position: relative;
  max-height: 100vh;
  img {
    max-width: 100%;
    //width: 100%;
    height: auto;
  }
`;

const Pill = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 8px;
  position: absolute;
  background: #fff;
  border-radius: 17px;
  width: 16px;
  // width: 275px;
  overflow: hidden;
  height: 20px;
  transition: width 0.3s ease-in-out;
  bottom: 10px;
  svg {
    width: 20px;
  }

  span {
    font-size: 11px;
    line-height: 18px;
  }
`;

const Where = styled(Pill)`
  left: 10px;
  padding: 6px 12px 6px 8px;
  grid-template-columns: 20px 1fr;
  white-space: nowrap;
  &:hover {
    width: 275px;
  }
`;

const Share = styled(Pill)`
  right: 10px;
  padding: 6px 8px 6px 12px;
  text-align: right;
  cursor: pointer;
  div {
    display: grid;
    grid-template-columns: 1fr 20px;
    position: absolute;
    right: 7px;
  }
  span {
    text-decoration: underline;
    display: inline-block;
    margin-right: 10px;
  }
  &:hover {
    width: 69px;
  }
`;

export const Card = () => {
  return (
    <Styled>
      <Where>
        <PinIcon /> <span>Find Momo at a house in Burlington, Vermont</span>
      </Where>
      <img
        src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
        alt=""
      />
      <Share>
        <div>
          <span>Share</span> <PinIcon />
        </div>
      </Share>
    </Styled>
  );
};
