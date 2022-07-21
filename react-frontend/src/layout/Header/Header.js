import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import axios from "axios";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Dropdown from "./DropdownNavBar/Dropdown";

class Header extends Component {
  state = {
    drop: false,
  };

  render() {
    const { categories, categoriesRoot } = this.props;
    return (
      <div
        className="header-menu"
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <header className="menu">
          <Link to="/" replace>
            <img src={require("../../img/Header/logo.jpg")} className="logo" />
          </Link>

          <Link to="/about" replace className="about">
            About
          </Link>
          {/* <Link to="/blog" replace className="blog">
              Blog
            </Link> */}

          <Link to="/contactus" replace className="contact">
            Contact
          </Link>

          <div
            style={{ height: "50px", marginTop: "57px" }}
            className="product"
            onMouseEnter={() => this.setState({ drop: true })}
            onMouseLeave={() => this.setState({ drop: false })}
          >
            <Link to="#" replace>
              Product
              <span>
                {this.state.drop ? (
                  <Dropdown
                    categoriesRoot={categoriesRoot}
                    categories={categories}
                  />
                ) : null}
              </span>
            </Link>
          </div>

          <Link to="/addcategory" replace className="addcategory">
            Add Category
          </Link>

          <Link to="/addproduct" replace className="addproduct">
            Add Product
          </Link>
          {/* <Link to="/shipping" replace className="shipping">
            Shipping
          </Link> */}
          {/* <Link to="#" replace className="needhelp">
            Needhelp
          </Link> */}

          {/* {isCustomerLogin ? (
              <Link to="/customer" replace className="customer">
                Customer
              </Link>
            ) : (
              <div>
                <a href="http://127.0.0.1:8000/register">Register</a>
                <a href="http://127.0.0.1:8000/login">Login</a>
              </div>
            )} */}

          <a href="https://www.facebook.com/" className="meta-facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/?hl=en" className="meta-instagram">
            <FaInstagramSquare />
          </a>
          <a href="https://twitter.com/" className="meta-twitter">
            <FaTwitter />
          </a>
        </header>
      </div>
    );
  }
}
export default Header;
