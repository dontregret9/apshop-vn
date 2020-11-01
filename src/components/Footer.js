import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div id="footer-box">
            <div id="footer">
            <div id="footer-info">

                <div id="footer-left">
                    <h6 id="p-name">AP SHOP</h6>
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
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="500" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=370%20%C4%90%C6%B0%E1%BB%9Dng%203%20Th%C3%A1ng%202%2C%20Ph%C6%B0%E1%BB%9Dng%2012%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>

                    </div>
                </div>
            
            </div>
            
            <div id="footer-bottom">
                <div id="payment">
                    <h6>THANH TOÁN</h6>
                    <a target="_blank" href="https://apshop.vn/pages/thanh-toan"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_payment_1.png?v=94" /></a>
                </div>
                <div id="certificate">
                    <h6>CHỨNG NHẬN</h6>
                    <ul className="d-flex">
                        <li><a target="_blank" href="http://online.gov.vn/Home/WebDetails/7730"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_payment_2.png?v=94" /></a></li>
                        <li><a target="_blank" href="https://apshop.vn/"><img src="https://theme.hstatic.net/1000129940/1000623473/14/banner_payment_3.png?v=94" /></a></li>
                    </ul>
                </div>
                <div id="email-register">
                    <h6>ĐĂNG KÍ NHẬN BẢN TIN</h6>
                    <div className="d-flex" id="email-group">
                        <input placeholder="Email của bạn" />
                        <button>GỬI</button>
                    </div>
                </div>
            </div>

            <p>© Bản quyền thuộc CÔNG TY TNHH MTV TIN HỌC AN PHÁT - Email: lienhe@apshop.vn</p>
        </div>
    
        </div>)
}

export default Footer;
