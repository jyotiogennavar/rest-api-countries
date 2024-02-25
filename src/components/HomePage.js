import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

import { PADDING_INLINE } from "../constant";
import CountryData from "../data.json";
import CountryCard from "./CountryCard";
import { useTheme } from "../ThemeProvider";

const HomePage = () => {
  const theme = useTheme();
  const countries = CountryData;
  return (
    <Main>
      <Navbar />
      <SearchBar />
      <Grid>
        {countries.map((country) => (
          <CountryCard key={country.numericCode} country={country} theme={theme}/>
        ))}
      </Grid>
    </Main>
  );
};

const Main = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const Grid = styled.div`
  padding-inline: ${PADDING_INLINE.paddingInline};
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Adjust as needed */
  gap: ${PADDING_INLINE.paddingInline};
`;
export default HomePage;

// import useSWR from 'swr';
// const ENDPOINT = 'https://restcountries.com/v3.1/all'

// const { data: countries, error } = useSWR(ENDPOINT);

// if (error) return <div>Error fetching data</div>;
// if (!countries) return <div>Loading...</div>;
// if (countries.length === 0) return <div>No countries found</div>;

// const url = "https://restcountries.com/v3.1/all";

// const [countries, setCountries] = useState([]);

// const fetchCountryDate = async () => {
//   const response = await fetch(url);
//   const countries = await response.json();
//   setCountries(countries);
//   console.log(countries)
// };

// useEffect(() => {
//   fetchCountryDate();
// }, []);
