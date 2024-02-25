import React from "react";
import styled from "styled-components";

import ToggleMode from "./ToggleMode";
import { FONT_FAMILY, FONT_WEIGHTS, PADDING_INLINE } from "../constant";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>Where in the world?</Logo>
      <ToggleMode />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};

  padding: 0.6rem ${PADDING_INLINE.paddingInline} 1.5rem;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: ${(props) => props.theme.text};
`;

const Logo = styled.h1`
  font-family: ${FONT_FAMILY.body};
  font-size: 1.5rem;
  font-weight: ${FONT_WEIGHTS.bold};
`;

export default Navbar;
