import React from 'react';
import './NetworkContainer.css';

import Product from './Product.js';

function NetworkContainer() {
    let network_data = [
        {
            link: "https://apshop.vn/products/bo-phat-wifi-asus-ax6000-wifi-6-aimesh-wifi",
            img_link: "https://product.hstatic.net/1000129940/product/router-asus-rt-ax88u---ax6000-wifi-6-_-802.11ax-_-aimesh-360-wifi-mesh_9927acd752ba4809940aaa686d0dfa1f_medium.jpg",
            product_name: "Bộ Phát Wifi Asus AX6000 Wifi 6 AiMesh Wifi",
            review_link: "https://apshop.vn/products/bo-phat-wifi-asus-ax6000-wifi-6-aimesh-wifi#doke_product_reviews",
            old_price: "9,300,000",
            new_price: "8,190,000"
        },
        {
            link: "https://apshop.vn/products/router-asus-rog-rapture-gt-ax11000-ax11000-wifi-6-802-11ax-aimesh-360-wifi-mesh-wtfastt",
            img_link: "https://product.hstatic.net/1000129940/product/gt-ax11000---ax11000-wifi-6-_-802.11ax-_-aimesh-360-wifi-mesh---wtfast_8ac41363d34742ff93fed0744fc58a34_medium.jpg",
            product_name: "Bộ Phát Wifi Asus AX11000 Wifi 6 AiMesh 360 WIFI Mesh - WTFAST",
            review_link: "https://apshop.vn/products/router-asus-rog-rapture-gt-ax11000-ax11000-wifi-6-802-11ax-aimesh-360-wifi-mesh-wtfast#doke_product_reviews",
            old_price: 0,
            new_price: "15,990,000"
        },
        {
            link: "https://apshop.vn/products/bo-phat-wifi-asus-ax1800-wifi-6-aimesh-wifi",
            img_link: "https://product.hstatic.net/1000129940/product/r-asus-asus-rt-ax56u---ax1800-wifi-6-_-802.11ax-_-aimesh-360-wifi-mesh_f2a438708f8c4b0fa2a8b3ea149f9842_medium.jpg",
            product_name: "Bộ Phát Wifi Asus AX1800 Wifi 6 AiMesh WIFI",
            review_link: "https://apshop.vn/products/bo-phat-wifi-asus-ax1800-wifi-6-aimesh-wifi#doke_product_reviews",
            old_price: "3,490,000",
            new_price: "2,499,000"
        },
        {
            link: "https://apshop.vn/products/router-asus-rt-ax92u-2-pack-ax6100-wifi-6-802-11ax-aimesh-360-wifi-mesh",
            img_link: "https://product.hstatic.net/1000129940/product/-rt-ax92u-_-2-pack-_---ax6100-wifi-6-_-802.11ax-_-aimesh-360-wifi-mesh_75f1f1a760594a8b97f0ae0e26224ea5_medium.jpg",
            product_name: "Bộ Phát Wifi Asus AX6100 2 Pack Wifi 6 AiMesh 360 WIFI Mesh",
            review_link: "https://apshop.vn/products/router-asus-rt-ax92u-2-pack-ax6100-wifi-6-802-11ax-aimesh-360-wifi-mesh#doke_product_reviews",
            old_price: 0,
            new_price: "15,990,000"
        },
        {
            link: "https://apshop.vn/products/router-asus-rt-ax92u-ax6100-wifi-6-802-11ax-aimesh-360-wifi-mesh",
            img_link: "https://product.hstatic.net/1000129940/product/router-asus-rt-ax92u---ax6100-wifi-6-_-802.11ax-_-aimesh-360-wifi-mesh_f2b6e723d4584d81a7d0d5a631e336d1_medium.jpg",
            product_name: "Bộ Phát Wifi Asus AX6100 Wifi 6 AiMesh 360 WIFI Mesh",
            review_link: "https://apshop.vn/products/router-asus-rt-ax92u-ax6100-wifi-6-802-11ax-aimesh-360-wifi-mesh#doke_product_reviews",
            old_price: 0,
            new_price: "9,300,000"
        }
    ];
    let network_list = network_data.map((item) => {
        return <Product link={item.link}
            img_link={item.img_link}
            product_name={item.product_name} review_link={item.review_link}
            old_price={item.old_price} new_price={item.new_price} />
    })
    return (
        <div id="network-container-box">
            <div id="network-container-bar">
                <div>
                    <span>THIẾT BỊ MẠNG CHO GIA ĐÌNH VÀ DOANH NGHIỆP</span>
                </div>
                <div>
                    <a href="https://apshop.vn/collections/thiet-bi-mang-asus">ASUS</a>
                    <a href="https://apshop.vn/collections/thiet-bi-mang-linksys">LINKSYS</a>
                    <a href="https://apshop.vn/collections/may-tinh-bo">XEM TẤT CẢ<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></a>
                </div>

            </div>

            <div id="network-container">
                {network_list}
            </div>
        </div>
    )
}
export default NetworkContainer;