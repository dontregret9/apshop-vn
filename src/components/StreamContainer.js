import React from 'react';
import './StreamContainer.css';

import Product from './Product.js';

function StreamContainer() {
    return (
        <div id="stream-container-box">
            <div id="stream-container-bar">
                <div>
                    <span>THIẾT BỊ STREAM</span>
                </div>
                <div className="stream-option">
                    <a href="https://apshop.vn/collections/thiet-bi-stream-corsair-elgato">CORSAIR ELGATO</a>
                    <a href="https://apshop.vn/collections/thiet-bi-stream-avermedia"> AVERMEDIA</a>
                    <a href="https://apshop.vn/collections/thiet-bi-stream-razer"> RAZER</a>
                    <a href="https://apshop.vn/collections/webcam-stream">WEBCAM STREAM</a>
                    <a href="https://apshop.vn/collections/thiet-bi-stream-corsair-elgato">XEM TẤT CẢ<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg></a>
                </div>

            </div>

            <div id="stream-container">
                <a href="https://apshop.vn/products/webcam-avermedia-live-streamer-cam-313-pw313"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_1_home_2.jpg?v=146" /></a>
               <div id="stream-right-content">
               <div id="line-1">
                    <Product link="https://apshop.vn/products/thiet-bi-stream-elgato-hd60s-plus-box-4k-60-fps"
                        img_link="https://product.hstatic.net/1000129940/product/thiet-bi-stream-elgato-hd60s-plus-box-4k-60-fps-01_ab583073d36a45608243701c15724544_medium.jpg"
                        product_name="Thiết Bị Stream ELGATO HD60S Plus - BOX - 4K 60 FPS" review_link="https://apshop.vn/products/thiet-bi-stream-elgato-hd60s-plus-box-4k-60-fps#doke_product_reviews"
                        old_price="5,050,000" new_price="4,950,000" />

                    <Product link="https://apshop.vn/products/thiet-bi-stream-elgato-hd60s-box"
                        img_link="https://product.hstatic.net/1000129940/product/hd60s-01_0dde021d4a204e0fa319f60c6e8be817_medium.jpg"
                        product_name="Thiết bị Stream ELGATO HD60S - Box" review_link="https://apshop.vn/products/thiet-bi-stream-elgato-hd60s-box#doke_product_reviews"
                        old_price="4,790,000" new_price="4,650,000" />
                    <Product link="https://apshop.vn/products/thiet-bi-stream-elgato-camlink-4k-usb"
                        img_link="https://product.hstatic.net/1000129940/product/4k-02_9e79b44168184fda9a9386087119bc9e_medium.jpg"
                        product_name="Thiết bị Stream ELGATO CamLink 4K - USB" review_link="https://apshop.vn/products/thiet-bi-stream-elgato-camlink-4k-usb#doke_product_reviews"
                        old_price="3,369,000" new_price="3,600,000" />
                </div>

                <div id="line-2">

                    <Product link="https://apshop.vn/products/thiet-bi-stream-elgato-4k60-pro-mk2-hdr"
                        img_link="https://product.hstatic.net/1000129940/product/thiet-bi-stream-elgato-4k60-pro-mk2-hdr-01_79725a3d8de04af2ae431468e513b893_medium.jpg"
                        product_name="Thiết Bị Stream ELGATO 4K60 PRO MK2 - HDR" review_link="https://apshop.vn/products/thiet-bi-stream-elgato-4k60-pro-mk2-hdr#doke_product_reviews"
                        old_price="7,200,000" new_price="6,990,000"/>
                    <Product link="https://apshop.vn/products/thiet-bi-stream-elgato-streamdeck-mini"
                        img_link="https://product.hstatic.net/1000129940/product/streamdeck-mini-01_a337421d8d9c4974934fcf015a6b1492_medium.jpg"
                        product_name="Thiết bị Stream Elgato StreamDeck Mini    " review_link="https://apshop.vn/products/thiet-bi-stream-elgato-streamdeck-mini#doke_product_reviews"
                        old_price="2,630,000" new_price="2,550,000" />
                    <Product link="https://apshop.vn/products/thiet-bi-stream-elgato-streamdeck"
                        img_link="https://product.hstatic.net/1000129940/product/streamdeck-01_59539e9b367d4b058218dac4e82a1d1c_medium.jpg"
                        product_name="Thiết bị Stream Elgato StreamDeck" review_link="https://apshop.vn/products/thiet-bi-stream-elgato-streamdeck#doke_product_reviews    "
                        old_price="3,950,000" new_price="3,950,000" />
                </div>

               </div>
            </div>
        </div>
    )
}
export default StreamContainer;