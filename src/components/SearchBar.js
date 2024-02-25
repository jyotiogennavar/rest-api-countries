import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY, FONT_WEIGHTS, PADDING_INLINE } from "../constant";

import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchCountry, setSearchCountry] = useState([]);

  return (
    <Wrapper>
      <SearchInput>
        <Search size={16} />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        >
          {/* {searchCountry} */}
        </input>
      </SearchInput>

       <Dropdown >
        
        </Dropdown> 
    </Wrapper>
  );
};
// color={COLORS.lightGray}
const Wrapper = styled.div`
  padding: 3rem ${PADDING_INLINE.paddingInline};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SearchInput = styled.div`
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: ${COLORS.white};
  border-radius: 5px;
  width: 20rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  gap: 10px;

  input {
    border: none;
  }
`;

const Dropdown = styled.select`

`

export default SearchBar;
