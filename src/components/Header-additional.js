import React from 'react';
import './Header-additional.css';
function Header_additional() {
    return (
        <div id="header-additional">
            
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

            <div id="header-additional-right">

            </div>
        </div>
    )
}
export default Header_additional;