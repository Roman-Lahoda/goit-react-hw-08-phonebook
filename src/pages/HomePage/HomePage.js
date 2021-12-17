import { Typography, Link } from "@mui/material";
import {
  StyledTypigraphyMainText,
  StyledBox,
  StyledBoxBottom,
} from "./HomePage.style";

const HomePage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
        Hello, dear User!
      </Typography>
      <StyledBox>
        <StyledTypigraphyMainText>
          Please read this text to the end.
          <br />
          This website was created for a learning goal. So don't use him for
          storage important contacts, because he clean himself every three
          month.
          <br /> If this dont stopping you - i wish you good luck and enjoible
          to use ;)
        </StyledTypigraphyMainText>
      </StyledBox>
      <StyledBoxBottom>
        <Typography component="span">Create by </Typography>
        <Link
          href="https://github.com/Roman-Lahoda"
          target="_blank"
          rel="noopener noreferrer"
        >
          LaRI
        </Link>
      </StyledBoxBottom>
    </>
  );
};

export default HomePage;
