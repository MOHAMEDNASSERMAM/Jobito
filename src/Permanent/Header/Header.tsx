import { HeaderActions } from "../../Subject to/Header/HeaderActions/HeaderActions";
import { Logo } from "../../Subject to/Header/Logo/Logo";
import { NavBar } from "../../Subject to/Header/NavBar/NavBar";
import Style from "./Header.module.css";



export const Header = ()  => {
  return (
    <header className={Style.header}>
      <Logo />
      <NavBar />
      <HeaderActions  />
    </header>
  );
};
