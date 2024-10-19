import {
  Discover,
  Initiatives,
  Learn,
  Connect,
  Team,
  Incubators,
  Contact,
  Startups,
} from "./NavItems";
import { NavToggle } from "./NavToggle";
import { NavLogo } from "./NavLogo";
import Link from "next/link";
import Notification from "./Notification";
import NotificationOffCanvas from "./NotificationOffcanvas";


const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
            <NavLogo />
          <NotificationOffCanvas />
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Discover />
              <Initiatives />
              <Learn />
              <Incubators />
              {/* <Connect /> */}
              <Team />
              <Startups />
              <Contact />
              <Notification />
            </ul>
          </div>
          <NavToggle />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
