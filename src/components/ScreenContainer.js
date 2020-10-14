import React from 'react';
import './ScreenContainer.css';

import Product from './Product.js';

function ScreenContainer() {
    return (
        <div id="screen-container-box">
            <div id="screen-container-bar">
                <div>   
                    <span>TOP MÀN HÌNH BÁN CHẠY THÁNG 10</span>
                </div>
                <a href="https://apshop.vn/collections/may-tinh-bo">XEM TẤT CẢ<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg></a>
            </div>

            <div id="screen-container">
                <Product link="https://apshop.vn/products/man-hinh-lg-27gn950-b-27-ultragear-4k-nano-ips-1ms-144hz-g-sync"
                    img_link="https://product.hstatic.net/1000129940/product/27gn950-new_7496f99ef5a148709ab20f78056fd0cf_medium.png"
                    product_name="Màn hình LG 27GN950 B 27'' UltraGear 4K Nano IPS 1ms 144Hz G-Sync" review_link="https://apshop.vn/products/man-hinh-lg-27gn950-b-27-ultragear-4k-nano-ips-1ms-144hz-g-sync#doke_product_reviews"
                    old_price="" new_price="22,900,000" />
                
                <Product link="https://apshop.vn/products/man-hinh-lg-22-22mn430m-ips-full-hd"
                    img_link="https://product.hstatic.net/1000129940/product/1_d15b87dc1c3e406082a3520d3fed95a1_medium.jpg"
                    product_name='Màn Hình LG 22" 22MN430M IPS Full HD' review_link="https://apshop.vn/products/man-hinh-lg-22-22mn430m-ips-full-hd#doke_product_reviews"
                    old_price="" new_price="2,500,000" />

                <Product link="https://apshop.vn/products/man-hinh-lg-38-38gn950-b-nano-ips-1ms-144hz-4k"
                    img_link="https://product.hstatic.net/1000129940/product/lg-38gn950_cc6a17bb6092439d9d3b68ca61a45500_medium.jpg"
                    product_name='Màn Hình LG 38" 38GN950-B Nano IPS 1ms 144Hz 4K' review_link="https://apshop.vn/products/aps-gtx-1650-gen-10-i3-10100#doke_product_reviews"
                    old_price="" new_price="41,900,000" />   

                <Product link="https://apshop.vn/products/man-hinh-lg-27-27qn600-ips-2k-freesync"
                    img_link="https://product.hstatic.net/1000129940/product/lg-27qn600_5d6369ab38514470b0d88051f127e9de_medium.jpg"
                    product_name='Màn Hình LG 27" 27QN600 IPS 2K FreeSync' review_link="https://apshop.vn/products/man-hinh-lg-27-27qn600-ips-2k-freesync#doke_product_reviews"
                    old_price="" new_price="6,990,000" />

                <Product link="https://apshop.vn/products/man-hinh-lg-29-29wn600-w-ips-full-hd-freesync"
                    img_link="https://product.hstatic.net/1000129940/product/lg-29wn600_85b6552fa9024f13b99ed44918cd1d31_medium.jpg"
                    product_name='MÀN HÌNH LG 29" 29WN600-W IPS FULL HD FREESYNC' review_link="https://apshop.vn/products/man-hinh-lg-29-29wn600-w-ips-full-hd-freesync#doke_product_reviews"
                    old_price="" new_price="5,790,000" />
            </div>
        </div>
    )
}
export default ScreenContainer;