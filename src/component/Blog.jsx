import React from 'react';
import"./CSS/Blog.css"
const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Xu hướng thời trang 2025",
            description: "Khám phá những phong cách thời trang được dự đoán sẽ 'làm mưa làm gió' trong năm 2025.",
            image: "/assets/blog-trend-2025.jpg"
        },
        {
            id: 2,
            title: "Cách phối đồ mùa hè",
            description: "Gợi ý mix đồ mát mẻ, năng động mà vẫn thời thượng cho những ngày hè nóng nực.",
            image: "/assets/blog-summer-style.jpg"
        },
        {
            id: 3,
            title: "Chọn vest cho phái mạnh",
            description: "Bí quyết chọn vest đúng form, hợp dáng để tự tin hơn trong mọi dịp quan trọng.",
            image: "/assets/blog-vest-men.jpg"
        }
    ];

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center fw-bold text-uppercase mb-4">Bài viết nổi bật</h2>

            <div className="row">
                {blogPosts.map(post => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={post.image}
                                className="card-img-top"
                                alt={post.title}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.description}</p>
                                <button className="btn btn-outline-primary mt-auto w-100 rounded-pill" onClick={() => alert("Tính năng đang phát triển")}>
                                Đọc thêm
                            </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
