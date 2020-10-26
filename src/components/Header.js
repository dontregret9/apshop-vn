import React from 'react';
import './Header.css';
import search_btn from '../images/search-btn.png';

function NavigationBar(props) {
    return (
        <div>
            <nav id="NavigationBar" class="navbar navbar-dark">
                <a href="https://apshop.vn/"><img src="https://theme.hstatic.net/1000129940/1000623473/14/logo.png?v=94" /></a>

                <div className="d-flex">
                    <div id="search-group">
                        <div id="search-form">
                            <input placeholder="Tìm kiếm sản phẩm, bài viết..." />
                            <img src={search_btn} />
                        </div>
                        <p>370 Đường 3 - 2, Phường 12, Quận 10, TP.HCM</p>
                    </div>

                    <div id="right-info">
                        <div id="right-top" className="d-flex ">

                            <a id="login" className="d-flex" href="https://apshop.vn/account/login">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                <p>Đăng nhập</p>
                            </a>

                            <div><a id="register" className="d-flex" href="https://apshop.vn/account/register"><p>Đăng ký</p></a></div>

                            <a id="build-pc" className="d-flex" href="https://apshop.vn/#">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-laptop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z" />
                                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
                                </svg>
                                <p>BUILD PC</p>
                            </a>

                            <a id="cart" className="d-flex  " href="https://apshop.vn/cart">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                                <p>Giỏ hàng (0)</p>
                            </a>

                        </div>
                        <div id="right-bottom" className="d-flex">
                            <a><p className="p-pointer">0938 975 268</p></a>
                            <a><p className="p-pointer">Liên Hệ</p></a>
                            <a><p className="p-pointer">Công Nghệ</p></a>
                            <a><p className="p-pointer">Hàng Mới Về </p></a>
                        </div>
                    </div>
                </div>

            </nav>

        </div>
    )
}   
export default NavigationBar;