import React from 'react';
import './CameraContainer.css';

import Product from './Product.js';

function CameraContainer() {
    
    let line2 = [
        {
            link: "https://apshop.vn/products/logitech-bcc950",
            img_link: "https://product.hstatic.net/1000129940/product/webcam-logitech-bcc950_20_1__medium.jpg",
            product_name: "Camera Hội Nghị Logitech BCC950",
            review_link: "https://apshop.vn/products/logitech-bcc950#doke_product_reviews",
            old_price: "6,500,000",
            new_price: "5,299,000"
        },
        {
            link: "https://apshop.vn/products/logitech-conferencecam-connect",
            img_link: "https://product.hstatic.net/1000129940/product/webcam-logitech-conferencecam-connect_20_1__medium.jpg ",
            product_name: "Logitech ConferenceCam Connect",
            review_link: "https://apshop.vn/products/logitech-conferencecam-connect#doke_product_reviews",
            old_price: "13,700,000",
            new_price: "10,499,000"
        },
        {
            link: "https://apshop.vn/products/logitech-ptz-pro-2",
            img_link: "https://product.hstatic.net/1000129940/product/webcam_logitech_ptz_pro_2_medium.png",
            product_name: "Logitech PTZ Pro 2",
            review_link: "https://apshop.vn/products/logitech-ptz-pro-2#doke_product_reviews",
            old_price: "19,000,000",
            new_price: "18,390,000"
        },
        {
            link: "https://apshop.vn/products/bo-giai-phap-hop-truc-tuyen-logitech-group-expansion-micro-mini-pc",
            img_link: "https://product.hstatic.net/1000129940/product/logitech-group-_-expansion-micro-_-mini-pc_5eb654a6d57244138d2ddaa91bfde837_medium.jpg",
            product_name: "Bộ Giải Pháp Họp Trực Tuyến Logitech Group + Expansion Micro + Mini PC",
            review_link: "https://apshop.vn/products/bo-giai-phap-hop-truc-tuyen-logitech-group-expansion-micro-mini-pc#doke_product_reviews",
            old_price: "16,370,000",
            new_price: "13,999,000"
        },
        {
            link: "https://apshop.vn/products/logitech-group-expansion-mics",
            img_link: "https://product.hstatic.net/1000129940/product/webcam_logitech_group___expansion_mics_medium.png",
            product_name: "Thiết bị Stream ELGATO CamLink 4K - USB",
            review_link: "https://apshop.vn/products/thiet-bi-stream-elgato-camlink-4k-usb#doke_product_reviews",
            old_price: "3,600,000",
            new_price: "3,369,000"
        }
    ];
    let line2_list = line2.map((item) => {
        return <Product link={item.link}
            img_link={item.img_link}
            product_name={item.product_name}
            review_link={item.review_link}
            old_price={item.old_price}
            new_price={item.new_price} />
    })
    return (
        <div id="camera-container-box">
            <div id="camera-container-bar">
                <div>
                    <span>CAMERA HỘI NGHỊ</span>
                </div>
                <div className="camera-option">
                    <a href="https://apshop.vn/collections/camera-hoi-nghi-logitech">CAMERA HỘI NGHỊ</a>
                    <a href="https://apshop.vn/collections/may-tinh-intel-nuc">MÁY TÍNH NUC</a>
                    <a href="https://apshop.vn/collections/giai-phap-hop-truc-tuyen-khong-day-barco">HỌP TRỰC TUYẾN KHÔNG DÂY</a>
                    <a href="https://apshop.vn/collections/may-tinh-bo">XEM TẤT CẢ<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></a>
                </div>

            </div>

            <div id="camera-container">
                <div id="line-1">
                    <Product link="https://apshop.vn/products/logitech-c930e"
                        img_link="https://product.hstatic.net/1000129940/product/webcam-logitech-c930e_20_1__medium.jpg"
                        product_name="Webcam Logitech C930e" review_link="https://apshop.vn/products/logitech-c930e#doke_product_reviews"
                        old_price="3,600,00" new_price="2,700,000" />

                    <a id="camera-img" href="https://apshop.vn/collections/camera-hoi-nghi-logitech"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_1_home_1.jpg?v=131" /></a>

                    <Product link="https://apshop.vn/products/bo-gia-gan-logitech-rally-len-tuong"
                        img_link="https://product.hstatic.net/1000129940/product/logitech-rally-mounting-kit-3_99531a312d354597bb9c12373a2d8c13_medium.jpg"
                        product_name="Bộ Giá Gắn Logitech Rally Lên Tường" review_link="https://apshop.vn/products/bo-gia-gan-logitech-rally-len-tuong#doke_product_reviews"
                        old_price={0} new_price="6,900,000" />
                </div>
                <div id="line-2">
                    {line2_list}
                </div>

            </div>
        </div>
    )
}
export default CameraContainer;