import React from 'react';
import anh1 from "./images/banner1.jpg";
import anh2 from "./images/banner1.jpg";
import anh3 from "./images/banner1.jpg";
import anh4 from "./images/banner1.jpg";
import anh5 from "./images/banner1.jpg";
import "./CSS/AboutUs.css"
const AboutUs = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center fw-bold text-uppercase mb-4">Giới thiệu</h1>

            <p className="lead text-center mb-5">
                Chào mừng đến với <strong>Sato Store</strong> – nơi hội tụ những sản phẩm thời trang chất lượng cao, kiểu dáng thời thượng và giá cả hợp lý!
            </p>

            <section className="mb-5">
                <h2 className="fw-semibold">I. Lịch sử hình thành</h2>
                <p>
                    Sato Store ra đời từ năm 2012, bắt đầu từ một cửa hàng nhỏ trên phố Lò Đúc. Những ngày đầu, cửa hàng được sáng lập bởi 3 chàng trai trẻ mang trong mình khát khao thay đổi xu hướng thời trang Việt.
                    Trải qua nhiều nỗ lực, Sato Store đã trở thành thương hiệu Việt hàng đầu trong phân khúc vest may sẵn, đồng thời là biểu tượng uy tín của thời trang Âu dành cho nam giới.
                </p>
                <div className="text-center my-4">
                    <img src={anh1} alt="Lịch sử" className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} />
                </div>
            </section>

            <section className="mb-5">
                <h2 className="fw-semibold">II. 5 lý do bạn nên chọn Sato Store</h2>

                <div className="mb-4">
                    <h4>1. Nhiều size nhất, sát người dùng nhất</h4>
                    <p>
                        Khác với những thương hiệu chỉ có 3 size cơ bản, Sato Store cung cấp đến 5 size phù hợp với người từ 55-85kg. Chúng tôi muốn bạn luôn chọn được chiếc áo vừa vặn và thoải mái nhất.
                    </p>
                    <div className="text-center">
                        <img src={anh2} alt="Size đa dạng" className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} />
                    </div>
                </div>

                <div className="mb-4">
                    <h4>2. Hệ thống hơn 71 cửa hàng toàn quốc</h4>
                    <p>
                        Với hơn 60 cửa hàng tại 35 tỉnh thành và nền tảng mua sắm online tiện lợi, Sato Store luôn sẵn sàng phục vụ bạn dù bạn ở bất kỳ đâu.
                    </p>
                    <div className="text-center">
                        <img src={anh3} alt="Cửa hàng toàn quốc" className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} />
                    </div>
                </div>

                <div className="mb-4">
                    <h4>3. Dịch vụ chăm sóc khách hàng tận tâm</h4>
                    <p>
                        Với phương châm "Khách hàng xứng đáng những điều tốt nhất", đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ với sự chuyên nghiệp, gu thẩm mỹ và tâm huyết.
                    </p>
                    <div className="text-center">
                        <img src={anh4} alt="Dịch vụ chăm sóc" className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} />
                    </div>
                </div>

                <div className="mb-4">
                    <h4>4. Phom dáng tối ưu cho người Việt</h4>
                    <p>
                        Trải qua hơn 40 lần tinh chỉnh thiết kế, Sato Store tự tin mang đến những bộ trang phục che đi khuyết điểm và tôn dáng người Việt một cách tối ưu nhất.
                    </p>
                    <div className="text-center">
                        <img src={anh5} alt="Phom dáng Việt" className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} />
                    </div>
                </div>

                <div className="mb-4">
                    <h4>5. Hơn 500,000 khách hàng tin tưởng</h4>
                    <p>
                        Tự hào là người bạn đồng hành của hơn 400.000 chú rể, 100.000 doanh nhân, và hàng ngàn nghệ sĩ, lãnh đạo trên cả nước. Niềm tin của khách hàng là động lực phát triển không ngừng của chúng tôi.
                    </p>
                </div>
            </section>

            <section className="mb-5">
                <p className="fw-semibold text-center">
                    Sato Store cam kết mang đến những sản phẩm đẹp từ kiểu dáng đến chất lượng, và mức giá hợp lý nhất.
                    <br />
                    <span className="text-danger">Sự hài lòng của bạn chính là niềm vinh hạnh của chúng tôi!</span>
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
