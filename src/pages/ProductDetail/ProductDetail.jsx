import { FaPlay, FaHeart, FaVideo, FaClock } from "react-icons/fa";
import imageProduct1 from "../../assets/image/product/product1.jpg"

import { Link } from "react-router";
import clsx from "clsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import styles from "../ProductDetail/ProductDetail.module.css"
import CardSimilar from "../../components/Cart/CardSimilar"

const listCourses = [
    {
        "id": 1,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho q chạy quảng cáo Facebook từ cơ bản đến nâng cao cho quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 2,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 3,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 4,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    }
]

function ProductDetail() {
    return (
        <>
            <Header />
            <Nav />
            <div className="container-fluid" style={{ backgroundColor: '#00C1DC' }}>
                <div className="container">
                    <div className="row">
                        <div className={clsx("col-lg-8", styles.detailTop)}>
                            <h1>Chạy quảng cáo Facebook</h1>
                            <p>
                                Cách chạy quảng cáo Facebook như thế nào ra nhiều đơn?
                                Làm thế nào để có thể tự ch ạy quảng cáo Facebook hiệu
                                quả và tối ưu chi phí?...
                            </p>
                            <span className={styles.showViewAndSell}>
                                <div><u><strong>10k</strong></u> Lượt xem</div>
                                <div style={{ marginLeft: '10px' }}><u><strong>10k</strong></u>Lượt bán</div>
                            </span>
                        </div>
                        <div className={clsx("col-lg-4", styles.boxMuaHang)}>
                            <div className={clsx('row', styles.muaHang)}>
                               <div className="col-lg-12">
                               <div className="card">
                                    <div className={styles.thumbnail}>
                                        <img src="https://khoahocgiasieure.com/storage/amnhac.png" alt="" />
                                        <FaPlay className={styles.iconPlay} />
                                        <div className={styles.overlay}></div>

                                    </div>
                                    <div className="card-body">
                                        <div className={styles.actionMuaHang}>
                                            <p className={styles.price}>
                                                <h2><strong>99.000<u>đ</u></strong></h2>
                                                <h3><del>20.000.000<u>đ</u></del></h3>
                                            </p>
                                            <p className={styles.addCart}>
                                                <Link className={styles.btnAddCart}>THÊM VÀO GIỎ HÀNG</Link>
                                                <Link className={styles.iconFavourite}>
                                                    <FaHeart />
                                                </Link>
                                            </p>
                                            <p>
                                                <Link className={styles.btnMuaNgay} style={{ width: '100%' }}>
                                                    MUA NGAY
                                                </Link></p>
                                            <div className={styles.detailBottom}>
                                                <p> <FaClock /> Thời lượng: <strong>1 giờ 20 phút</strong></p>
                                                <p> <FaVideo /> Sở hữu khoá học: <strong>Trọn đời</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-8">
                        <div className={styles.contentGioiThieu}>
                            <h5>Giới thiệu khoá học</h5>
                            <p>
                            Làm sao để chồng luôn cảm thấy may mắn, hạnh phúc khi có được bạn làm vợ? Làm sao để anh ấy chung tình với mình giúp cho hôn nhân hạnh phúc bền chặt hơn? Làm sao để giữ ngọn lửa vợ chồng thêm nồng ấm và cuồng nhiệt? Các bạn thân mến, đáp án cho những câu hỏi trên đây không chỉ là tình yêu thương, không chỉ là sự chăm sóc đơn thuần, còn nhiều điều ẩn sau đó mà mỗi người phải học và tích luỹ kiến thức. Trong cuộc sống hôn nhân vợ chồng, tình dục luôn là một phần không thể thiếu, khi hai vợ chồng gần gũi nhau sẽ giúp cả hai hiểu...
                            </p>
                        </div>
                        <div className={styles.contentCourse}>
                            <h4>Nội dung khoá học</h4>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                            <h6>Bài 1. Cấu trúc via – Thuật ngữ chuyên ngành </h6>
                        </div>
                        <div className={styles.productSimilar}>
                            <h4>Sản phẩm tương tự</h4>
                            <div className="row">
                            <CardSimilar data={listCourses} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ProductDetail