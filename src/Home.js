import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4598632147"
            title="Redmi Note 8 Pro (Electric Blue, 8GB RAM, 128GB Storage with Helio G90T Processor) "
            price={500}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Fc-xm6bKL._AC_US240_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="3645218794"
            title="ASUS ROG Strix GL10DH 2nd Gen AMD 8-Core Ryzen 7-2700 Gaming Desktop (8GB RAM/512GB NVMe SSD/Windows 10/6GB NVIDIA GeForce GTX 1660 Graphics/with Keyboard & Mouse/Iron Gray), GL10DH-IN012T"
            price={599}
            image="https://m.media-amazon.com/images/I/81qqkBORfRL._AC_SS350_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="7893564127"
            title="Realme Band (Black) - Full Colour Screen with Touchkey, Real-time Heart Rate Monitor, in-Built USB Charging, IP68 Water Resistant "
            price={150}
            image="https://m.media-amazon.com/images/I/61-+zVZL4LL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="7893652417"
            title="Boult Audio Probass Boost Over-Ear Wireless Bluetooth Headphones with Deep Bass HD Sound, Headset with Passive Noise Cancellation & Wired Mode, Long Battery Life with mic(Black) "
            price={300}
            image="https://m.media-amazon.com/images/I/81tImG6XVfL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="6852497136"
            title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition "
            price={699}
            image="https://images-eu.ssl-images-amazon.com/images/I/71gfBC95RIL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR170,270_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="5478631957"
            title="No Doubt Gaming & Video Editing Computer Intel Core i7 3770 (16 GB RAM/1 TB Hard Disk/ 240 GB SSD Capacity/ 4 GB Graphics Memory) (Gaming PC)"
            price={1100}
            image="https://images-eu.ssl-images-amazon.com/images/I/71gHYl82x0L._AC_UL160_SR125,160_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
