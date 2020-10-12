import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div id="footer">
            <div id="footer-info">
                <div id="footer-left">
                    <p id="p-name">AP SHOP</p>
                    <p id="p-address">Trụ sở: 370 Đường 3 Tháng 2, P.12, Q.10, TP. Hồ Chí Minh</p>
                    <p id="p-time">THỜI GIAN LÀM VIỆC: TỪ 8:30 - 20:30 (TỬ THỨ 2 - CHỦ NHẬT)</p>
                    <ul>
                        <li><a target="_blank" href="https://apshop.vn/pages/gioi-thieu">Giới Thiệu</a></li>
                        <li><a target="_blank" href="https://apshop.vn/pages/lien-he">Liên Hệ</a></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/tuyen-dung">Tuyển Dụng</a></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/khen-thuong">Khen Thưởng</a></li>
                    </ul>

                </div>
                <div id="footer-center">
                    <ul>
                        <li><h6>THÔNG TIN CẦN BIẾT</h6></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/chung-nhan-uy-quyen">Chứng Nhận Ủy Quyền</a></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/quy-dinh-bao-hanh-hang">Quy Định Bảo Hành Hãng</a></li>
                        <li><a target="_blank" href="https://bit.ly/APshop-Phieu-Yeu-Cau-Xuat-Hoa-Don">Yêu Cầu Xuất Hóa Đơn</a></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/thong-tin-chung">Thông Tin Chung</a></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/khach-hang-than-thiet">Khách Hàng Thân Thiết</a></li>
                        <li><a target="_blank" href="https://apshop.vn/blogs/giai-phap-cho-doanh-nghiep">Giải Pháp Cho Doanh Nghiệp</a></li>
                        <li><h6>Liên Kết Với Chúng Tôi</h6></li>
                    </ul>

                    <ul id="social-network">
                        <li><a target="_blink" href="https://www.facebook.com/apshop.vn/"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_social_1.png?v=94" /></a></li>
                        <li><a target="_blink" href="https://www.facebook.com/apshop.vn/"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_social_2.png?v=94" /></a></li>
                        <li><a target="_blink" href="https://twitter.com/APshopvn"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_social_3.png?v=94" /></a></li>
                        <li><a target="_blink" href="https://www.youtube.com/c/APshopTV"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_social_4.png?v=94" /></a></li>
                        <li><a target="_blink" href="https://apshop.vn/#"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_social_5.png?v=94" /></a></li>
                        <li><a target="_blink" href="https://chat.zalo.me/?phone=0938975268"><img src="https://theme.hstatic.net/1000129940/1000623473/14/icon_social_6.png?v=94" /></a></li>
                    </ul>
                </div>
                <div id="footer-right">
                    <h6>BẢN ĐỒ</h6>

                </div>
            </div>
            <div id="footer-bottom" className="d-flex">
                <div id="payment">
                    <h6>THANH TOÁN</h6>
                    <a target="_blank" href="https://apshop.vn/pages/thanh-toan"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_payment_1.png?v=94" /></a>
                </div>
                <div id="certificate">
                    <h6>CHỨNG NHẬN</h6>
                    <ul className="d-flex">
                        <li><a target="_blank" href="http://online.gov.vn/Home/WebDetails/7730"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_payment_2.png?v=94"/></a></li>
                        <li><a target="_blank" href="https://apshop.vn/"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_payment_3.png?v=94"/></a></li>
                    </ul>
                </div>
                <div id="register">
                    <h6>ĐĂNG KÍ NHẬN BẢN TIN</h6>
                    <div className="d-flex" id="email-group">
                        <input placeholder="Email của bạn"/>
                        <button>GỬI</button>
                    </div>
                </div>
            </div>
            <p>© Bản quyền thuộc CÔNG TY TNHH MTV TIN HỌC AN PHÁT - Email: lienhe@apshop.vn</p>
        </div>
    )
}

export default Footer;