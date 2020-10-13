import React from 'react';
import './ProductContainer.css';

import Product from './Product.js';

function ProductContainer() {
    return (
        <div id="product-container-box">
            <div id="container-bar">
                <div>
                    <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_deal.png?v=130" />
                    <span>TOP MÁY TÍNH BÁN CHẠY THÁNG 10</span>
                </div>
                <a href="https://apshop.vn/collections/may-tinh-bo">XEM TẤT CẢ<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg></a>
            </div>

            <div id="product-container">
                <Product link="https://apshop.vn/products/aps-gtx-1650-athlon-3000g-asus-gaming"
                    img_link="https://product.hstatic.net/1000129940/product/aps-gtx-1650-athlon-3000g-asus-gaming_b1d1b7db8f5e4a9ab5fe4c6af08256e0_medium.jpg"
                    product_name="APS GTX 1650 – ATHLON 3000G ASUS GAMING" review_link="https://apshop.vn/products/aps-gtx-1650-athlon-3000g-asus-gaming#doke_product_reviews"
                    old_price="9,519,000" new_price="8,199,000" />
                <Product link="https://apshop.vn/products/aps-gtx-1650-ryzen-3100-asus-gaming"
                    img_link="https://product.hstatic.net/1000129940/product/aps-gtx-1650-ryzen-3100-asus-gaming_cc12adcdf27e47eeb8e23db51d64be1f_medium.jpg"
                    product_name="APS GTX 1650 – RYZEN 3100 ASUS GAMING" review_link="https://apshop.vn/products/aps-gtx-1650-ryzen-3100-asus-gaming#doke_product_reviews"
                    old_price="11,447,000" new_price="9,999,000" />
                <Product link="https://apshop.vn/products/aps-gtx-1650-gen-10-i3-10100"
                    img_link="https://product.hstatic.net/1000129940/product/xigmatek-nyx-2_0ff303b7edd440458a588d5f1ae39583_medium.jpg"
                    product_name="APS GTX 1650 GEN 10 - I3 10100" review_link="https://apshop.vn/products/aps-gtx-1650-gen-10-i3-10100#doke_product_reviews"
                    old_price="13,739,000" new_price="11,799,000" />
                <Product link="https://apshop.vn/products/aps-gtx-1650-gen-10-pentium-g4600"
                    img_link="https://product.hstatic.net/1000129940/product/xigmatek-nyx-2_0ff303b7edd440458a588d5f1ae39583_medium.jpg"
                    product_name="APS GTX 1650 GEN 10 - PENTIUM G4600" review_link="https://apshop.vn/products/aps-gtx-1650-gen-10-pentium-g4600#doke_product_reviews"
                    old_price="11,539,000" new_price="9,999,000" />
                <Product link="https://apshop.vn/products/aps-gtx-1650-super-gen-10-i3-10100"
                    img_link="https://product.hstatic.net/1000129940/product/xigmatek-nyx_a75fe164372942948b221bff0393bc57_medium.jpg"
                    product_name="APS GTX 1650 SUPER GEN 10 - I3 10100" review_link="https://apshop.vn/products/aps-gtx-1650-super-gen-10-i3-10100#doke_product_reviews"
                    old_price="16,370,000" new_price="13,999,000" />
            </div>
        </div>
    )
}
export default ProductContainer;