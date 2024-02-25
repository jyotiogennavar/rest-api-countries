import React from 'react';
import styled from 'styled-components';
import { FONT_FAMILY, FONT_WEIGHTS } from "../constant";

const CountryCard = ({ country, theme }) => {
  console.log('Country:', country);

  const { name, capital, population, region, flags } = country;
  return (
    <Card theme={theme}>
      <Flag src={flags.svg} alt={`${name} flag`} />
      <Details>
        <h2>{name}</h2>
        <p>Capital : <span>{capital}</span></p>
        <p>Population : <span>{population}</span></p>
        <p>Region : <span>{region}</span></p>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  font-family: ${FONT_FAMILY.body};
  font-size: 1rem;

`;

const Flag = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 2rem 1.5rem;

  h2 {
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: ${FONT_WEIGHTS.bold};
  }

  p {
    margin: 10px 0;
    font-weight: ${FONT_WEIGHTS.semiBold};
  }

  span {
    font-weight: ${FONT_WEIGHTS.light};
  }
`;

export default CountryCard;
