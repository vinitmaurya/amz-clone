import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }, disatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__menu">
        <MenuRoundedIcon fontSize="large" />
      </div>
      <Link to="/">
        <img
          src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionlineOne">Hello, {user?.email}</span>
            <span className="header__optionlineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineOne">Returns</span>
          <span className="header__optionlineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineOne">Try</span>
          <span className="header__optionlineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon fontSize="large" />
            <div className="header__optionlineTwo header__basketCount">
              {basket?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
