import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../ThemeProvider";
import { Moon } from "lucide-react";
import { COLORS } from "../constant";

const ToggleMode = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Mode onClick={toggleTheme}>
      <Moon
        size={16}
        color={themeMode === "light" ? COLORS.blue[300] : COLORS.white}
      />
      {themeMode === "light" ? "Dark Mode" : "Light Mode"}
    </Mode>
  );
};

const Mode = styled.button`
  border: none;
  background: none;

  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default ToggleMode;
