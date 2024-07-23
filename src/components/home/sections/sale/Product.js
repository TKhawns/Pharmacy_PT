import './Product.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductList() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        // arrows: false,
        responsive: [
            {
                breakpoint: 1023, // tablet breakpoint
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 739, // mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="section-specialty">
            <div className="specialty-content">
                <div className="specialty-body">
                    <Slider {...settings}>
                        <a href="https://aws.amazon.com/vi/what-is/ocr/" className="img-custom" target="blank">
                            <label className='product-label'>
                                <span className='discount'>Giảm 20%</span>
                            </label>
                            <div className='product-item'>
                                <img
                                    className="slide1"
                                    src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18733_4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='description'>
                                <div className="slide-title">Nước uống Rohto Alcofree Hỗ trợ giải rượu và bảo vệ gan (Lốc 3 chai x 50ml)</div>
                                <div className='price'>
                                    <del className='underline-cost'>126.700&nbsp;đ</del>
                                    <div className='sale-cost'>100.700&nbsp;đ/Lốc</div>
                                    <div className='sold'>
                                        <span className='heart-icon'>
                                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"></path></svg>
                                        </span>
                                        <span>19.7k</span>
                                        <span>|</span>
                                        <span>Đã bán 7.9k</span>
                                    </div>
                                </div>
                                <div className='status'>
                                    <div className='front-status'></div>
                                    <div className='back-status'>Đang bán chạy</div>
                                </div>
                            </div>
                          
                        </a>
                        <a href="https://aws.amazon.com/vi/what-is/ocr/" className="img-custom" target="blank">
                            <label className='product-label'>
                                <span className='discount'>Giảm 20%</span>
                            </label>
                            <div className='product-item'>
                                <img
                                    className="slide1"
                                    src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18733_4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='description'>
                                <div className="slide-title">Nước uống Rohto Alcofree Hỗ trợ giải rượu và bảo vệ gan (Lốc 3 chai x 50ml)</div>
                                <div className='price'>
                                    <del className='underline-cost'>126.700&nbsp;đ</del>
                                    <div className='sale-cost'>100.700&nbsp;đ/Lốc</div>
                                    <div className='sold'>
                                        <span className='heart-icon'>
                                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"></path></svg>
                                        </span>
                                        <span>19.7k</span>
                                        <span>|</span>
                                        <span>Đã bán 7.9k</span>
                                    </div>
                                </div>
                                <div className='status'>
                                    <div className='front-status'></div>
                                    <div className='back-status'>Đang bán chạy</div>
                                </div>
                            </div>                     </a>
                        <a href="https://aws.amazon.com/vi/what-is/ocr/" className="img-custom" target="blank">
                            <label className='product-label'>
                                <span className='discount'>Giảm 20%</span>
                            </label>
                            <div className='product-item'>
                                <img
                                    className="slide1"
                                    src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18733_4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='description'>
                                <div className="slide-title">Nước uống Rohto Alcofree Hỗ trợ giải rượu và bảo vệ gan (Lốc 3 chai x 50ml)</div>
                                <div className='price'>
                                    <del className='underline-cost'>126.700&nbsp;đ</del>
                                    <div className='sale-cost'>100.700&nbsp;đ/Lốc</div>
                                    <div className='sold'>
                                        <span className='heart-icon'>
                                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"></path></svg>
                                        </span>
                                        <span>19.7k</span>
                                        <span>|</span>
                                        <span>Đã bán 7.9k</span>
                                    </div>
                                </div>
                                <div className='status'>
                                    <div className='front-status'></div>
                                    <div className='back-status'>Đang bán chạy</div>
                                </div>
                            </div>                      </a>
                        <a href="https://aws.amazon.com/vi/what-is/ocr/" className="img-custom" target="blank">
                            <label className='product-label'>
                                <span className='discount'>Giảm 20%</span>
                            </label>
                            <div className='product-item'>
                                <img
                                    className="slide1"
                                    src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18733_4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='description'>
                                <div className="slide-title">Nước uống Rohto Alcofree Hỗ trợ giải rượu và bảo vệ gan (Lốc 3 chai x 50ml)</div>
                                <div className='price'>
                                    <del className='underline-cost'>126.700&nbsp;đ</del>
                                    <div className='sale-cost'>100.700&nbsp;đ/Lốc</div>
                                    <div className='sold'>
                                        <span className='heart-icon'>
                                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"></path></svg>
                                        </span>
                                        <span>19.7k</span>
                                        <span>|</span>
                                        <span>Đã bán 7.9k</span>
                                    </div>
                                </div>
                                <div className='status'>
                                    <div className='front-status'></div>
                                    <div className='back-status'>Đang bán chạy</div>
                                </div>
                            </div>                        </a>
                        <a href="https://aws.amazon.com/vi/what-is/ocr/" className="img-custom" target="blank">
                            <label className='product-label'>
                                <span className='discount'>Giảm 20%</span>
                            </label>
                            <div className='product-item'>
                                <img
                                    className="slide1"
                                    src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18733_4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='description'>
                                <div className="slide-title">Nước uống Rohto Alcofree Hỗ trợ giải rượu và bảo vệ gan (Lốc 3 chai x 50ml)</div>
                                <div className='price'>
                                    <del className='underline-cost'>126.700&nbsp;đ</del>
                                    <div className='sale-cost'>100.700&nbsp;đ/Lốc</div>
                                    <div className='sold'>
                                        <span className='heart-icon'>
                                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"></path></svg>
                                        </span>
                                        <span>19.7k</span>
                                        <span>|</span>
                                        <span>Đã bán 7.9k</span>
                                    </div>
                                </div>
                                <div className='status'>
                                    <div className='front-status'></div>
                                    <div className='back-status'>Đang bán chạy</div>
                                </div>
                            </div>                       </a>
                        <a href="https://aws.amazon.com/vi/what-is/ocr/" className="img-custom" target="blank">
                            <label className='product-label'>
                                <span className='discount'>Giảm 20%</span>
                            </label>
                            <div className='product-item'>
                                <img
                                    className="slide1"
                                    src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P18733_4.jpg"
                                    alt=""
                                />
                            </div>
                            <div className='description'>
                                <div className="slide-title">Nước uống Rohto Alcofree Hỗ trợ giải rượu và bảo vệ gan (Lốc 3 chai x 50ml)</div>
                                <div className='price'>
                                    <del className='underline-cost'>126.700&nbsp;đ</del>
                                    <div className='sale-cost'>100.700&nbsp;đ/Lốc</div>
                                    <div className='sold'>
                                        <span className='heart-icon'>
                                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24"><path fill="currentColor" d="M17.22 2a6.2 6.2 0 0 0-4.72 2.16A6.2 6.2 0 0 0 7.78 2a6.26 6.26 0 0 0-4.55 10.58l8.55 8.9a1 1 0 0 0 1.44 0l8.55-8.9h.01A6.26 6.26 0 0 0 17.22 2Z"></path></svg>
                                        </span>
                                        <span>19.7k</span>
                                        <span>|</span>
                                        <span>Đã bán 7.9k</span>
                                    </div>
                                </div>
                                <div className='status'>
                                    <div className='front-status'></div>
                                    <div className='back-status'>Đang bán chạy</div>
                                </div>
                            </div>
                        </a>
                       
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
