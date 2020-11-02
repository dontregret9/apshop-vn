import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import './DesktopContainer.css';
import Product from './Product.js';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style }} onClick={onClick}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </button>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style }} onClick={onClick}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </button>
    );
}

function DesktopContainer(props) {

    const setting =
    {
        infinite: false,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        prevArrow: <PrevArrow className="slick-arrow slick-prev" />,
        nextArrow: <NextArrow className="slick-arrow slick-next" />,
    }
    var pc_data = [
        {
            product_name: "APS GTX 1650 – ATHLON 3000G ASUS GAMING",
            link: "https://apshop.vn/products/aps-gtx-1650-athlon-3000g-asus-gaming",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1650-athlon-3000g-asus-gaming_b1d1b7db8f5e4a9ab5fe4c6af08256e0_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1650-athlon-3000g-asus-gaming#doke_product_reviews",
            old_price: "9,519,000",
            new_price: "8,199,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1650 – RYZEN 3100 ASUS GAMING",
            link: "https://apshop.vn/products/aps-gtx-1650-ryzen-3100-asus-gaming",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1650-ryzen-3100-asus-gaming_cc12adcdf27e47eeb8e23db51d64be1f_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1650-ryzen-3100-asus-gaming#doke_product_reviews",
            old_price: "11,447,000",
            new_price: "9,999,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1650 GEN 10 - I3 10100",
            link: "https://apshop.vn/products/aps-gtx-1650-gen-10-i3-10100",
            img_link: "https://product.hstatic.net/1000129940/product/xigmatek-nyx-2_0ff303b7edd440458a588d5f1ae39583_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1650-ryzen-3100-asus-gaming#doke_product_reviews",
            old_price: "13,739,000",
            new_price: "11,799,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1650 GEN 10 - PENTIUM G4600",
            link: "https://apshop.vn/products/aps-gtx-1650-gen-10-pentium-g4600",
            img_link: "https://product.hstatic.net/1000129940/product/xigmatek-nyx-2_0ff303b7edd440458a588d5f1ae39583_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1650-gen-10-pentium-g4600#doke_product_reviews",
            old_price: "11,539,000",
            new_price: "9,999,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1650 SUPER GEN 10 - I3 10100",
            link: "https://apshop.vn/products/aps-gtx-1650-super-gen-10-i3-10100",
            img_link: "https://product.hstatic.net/1000129940/product/xigmatek-nyx_a75fe164372942948b221bff0393bc57_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1650-gen-10-pentium-g4600#doke_product_reviews",
            old_price: "16,370,000",
            new_price: "13,999,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1660 SUPER - 10400F MSI GAMING",
            link: "https://apshop.vn/products/aps-gtx-1660-super-10400f-msi-gaming",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1660-super-10400f-msi-gaming_68b6c1da27544557b8586cb1ae1c696e_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1660-super-i5-10400-tuf-gaming-pc#doke_product_reviews",
            old_price: "18,437,000",
            new_price: "16,299,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1660 SUPER - I5 10400 - TUF GAMING PC",
            link: "https://apshop.vn/products/aps-gtx-1660-super-i5-10400-tuf-gaming-pc",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1660-super_8716d5ea95d44bb6a6b5add8481075f1_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1660-super-i5-10400-tuf-gaming-pc#doke_product_reviews",
            old_price: "23,919,000",
            new_price: "21,499,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1660 SUPER - I5 10400F TUF GAMING",
            link: "https://apshop.vn/products/aps-gtx-1660-super-i5-10400f-tuf-gaming",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1660-super-i5-10400f-tuf-gaming_5abe75f9d4a548c0a208eb7bae029421_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1660-super-i5-10400f-tuf-gaming#doke_product_reviews",
            old_price: "20,553,000",
            new_price: "17,999,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1660 SUPER – RYZEN 3200G GIGABYTE GAMING",
            link: "https://apshop.vn/products/aps-gtx-1660-super-ryzen-3200g-gigabyte-gaming",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1660-super-ryzen-3200g-gigabyte-gaming_c6368c98f5aa4fdbb08d3b65079c1913_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1660-super-ryzen-3200g-gigabyte-gaming#doke_product_reviews",
            old_price: "14,259,000",
            new_price: "12,799,000",
            border: "1"
        },
        {
            product_name: "APS GTX 1660 SUPER – RYZEN 3400G MSI GAMING",
            link: "https://apshop.vn/products/aps-gtx-1660-super-ryzen-3400g-msi-gaming",
            img_link: "https://product.hstatic.net/1000129940/product/aps-gtx-1660-super-ryzen-3200g-gigabyte-gaming_c6368c98f5aa4fdbb08d3b65079c1913_medium.jpg",
            review_link: "https://apshop.vn/products/aps-gtx-1660-super-ryzen-3400g-msi-gaming#doke_product_reviews",
            old_price: "15,837,000",
            new_price: "13,990,000",
            border: "1"
        },
    ];
    let product_list = pc_data.map((item) => {
        return <Product
            border={item.border}
            link={item.link}
            img_link={item.img_link}
            product_name={item.product_name}
            review_link={item.review_link}
            old_price={item.old_price}
            new_price={item.old_price}
        />
    })
    return (
        <div id="desktop-container-box">
            <div id="desktop-container-bar">
                <div>
                    <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_deal.png?v=130" />
                    <span>TOP MÁY TÍNH BÁN CHẠY THÁNG 10</span>
                </div>
                <a href="https://apshop.vn/collections/may-tinh-bo">XEM TẤT CẢ<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg></a>
            </div>
            <Slider id="desktop-container" {...setting}>
                {product_list}
            </Slider>

        </div>
    )

    return product_list;
}

export default DesktopContainer;