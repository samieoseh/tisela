import Logo from "./Logo";
import Container from "./Container";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className=" border-b">
      <Container className="flex flex-row justify-between">
        <Logo />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
