import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'


function Header() {
  return (
    <header className="header">
        <section>
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>we are a family owned Mediterranern resaurant ,focused on traditional recipes served with a modern twist.</p>
                <Link to ="/booking"><button aria-Label = 'onClick' >Reserve Table</button></Link>

            </div>
            <div className="banner-img">
              <img src = {bannerImg} />
            </div>
        </section>
    </header>
  );
}

export default Header;