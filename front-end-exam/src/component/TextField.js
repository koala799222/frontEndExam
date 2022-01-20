import * as React from "react"
import InputUnstyled from "@mui/base/InputUnstyled"
import { styled } from "@mui/system"

const blue = {
  200: "#80BFFF",
  400: "#3399FF",
}

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
}

const StyledInputElement = styled("input")(
  ({ theme }) => `
  box-sizing: border-box;
  width: 725px;
  height: 60px;
  background-color: transparent;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1);

  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  padding: 12px 18px;
  transition: all 150ms ease;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
  }

  &:focus {
    outline: 2px solid ${theme.palette.mode === "dark" ? blue[400] : blue[200]};
  }
`
)

const SearchInput = React.forwardRef((props, ref) => (
  <InputUnstyled
    components={{ Input: StyledInputElement }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    ref={ref}
  />
))

export default function UnstyledInput() {
  return <SearchInput aria-label="input" placeholder="Keyword" />
}
