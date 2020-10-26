import React from 'react';
import Slider from 'react-slick';
import './Header-additional.css';
function Header_additional() {
    const setting =
    {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <br />,
        nextArrow: <br />
    }
    return (
        < div id="header-additional">
            <div id="header-additional-top">
                <div id="header-additional-dropdown" class="btn btn-danger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/list-round-solid.png" />
                    <p>DANH MỤC SẢN PHẨM</p>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_1.png?v=94" /> Gaming Gear <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_2.png?v=94" />Giải Pháp Họp Trực Tuyến </a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_3.png?v=94" />Máy Tính Bộ </a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_4.png?v=94" />Màn Hình Máy Tính </a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_5.png?v=94" />Linh Kiện Máy Tính</a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_6.png?v=94" />Laptop Gaming</a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_7.png?v=94" />Bàn Ghế Chơi Game</a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_8.png?v=94" />Audio-Thiết Bị Âm Thanh</a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_9.png?v=94" />Thiết Bị Văn Phòng</a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_10.png?v=94" />Thiết Bị Mạng</a>
                        <a className="dropdown-item" href="#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_nav_11.png?v=94" />Đồ Chơi Công Nghệ Khác</a>
                    </div>
                </div>
                <div id="additional-info">
                    <a href="https://apshop.vn/pages/mua-hang-tra-gop-0-lai-xuat">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_mainmenu_1.png?v=152"/>
                        <span>Trả Góp 0%</span>
                    </a>
                    <a href="https://apshop.vn/pages/chinh-sach-bao-hanh">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_mainmenu_2.png?v=152"/>
                        <span>Bảo Hành</span>
                    </a>
                    <a href="https://apshop.vn/pages/phuong-thuc-van-chuyen">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_mainmenu_3.png?v=152"/>
                        <span>Giao Hàng</span>
                    </a>
                    <a href="https://apshop.vn/blogs/tin-khuyen-mai">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_mainmenu_4.png?v=152"/>
                        <span>Khuyến Mãi</span>
                    </a>
                    <a href="https://apshop.vn/pages/thanh-toan">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_mainmenu_5.png?v=152"/>
                        <span>CS Khách Hàng</span>
                    </a>
                </div>
            </div>

            <div id="header-additional-right">
                <Slider {...setting}>
                    <a href="https://apshop.vn/blogs/tin-khuyen-mai/pre-order-dat-hang-truoc-man-hinh-lg-27gn950-144hz-4k" target="_blank">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/slider_4_image.jpg?v=152" /></a>
                    <a href="https://apshop.vn/blogs/tin-tuc-su-kien/su-kien-dong-hanh-cung-targus" target="_blank">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/slider_5_image.jpg?v=152" /></a>
                    <a href="https://apshop.vn/collections/lg-trung-thu-2020" target="_blank">
                        <img src="https://theme.hstatic.net/1000129940/1000623473/14/slider_3_image.jpg?v=152" /></a>
                </Slider>
            </div>
        </div>
    )
}
export default Header_additional;