import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "../assets/images/main/logo.png";

export default function Header() {
  return (
    <header id="header">
      <div className="header">
        <div className="container header-wrap">

          <Link to="/" className="logo d-inline-flex align-items-center h-100">
            <img src={logo} className="logo-img" alt="지오스토리" />
          </Link>

          <Nav />
        </div>
      </div>
    </header>
  );
}
