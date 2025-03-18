import { Link } from "react-router"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import styles from "../Category/Category.module.css"
import CartCartegory from "../../components/Cart/CartCategory"
import imageProduct1 from "../../assets/image/product/product1.jpg"
import Pagination from "../../components/Pagination/Pagination"

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
    },
    {
        "id": 4,
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
    },
    {
        "id": 4,
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

function Category() {
    return (
        <>
            <Header />
            <Nav />
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <ul className={styles.boxListCourse}>
                            <Link className={styles.active}><li>Tất cả khoá học</li></Link>
                            <Link><li>Khoá học kiếm tiền MMO</li></Link>
                            <Link><li>Chạy quảng cáo Facebook</li></Link>
                            <Link><li>Lập trình</li></Link>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className={styles.titleBoxCategory}>
                            <h2>Tất cả khoá học</h2>
                            <select name="" id="">
                                <option value="">Mặc định</option>
                                <option value="">Giá từ thấp đến cao</option>
                                <option value="">Giá từ cao đến thấp</option>
                            </select>
                        </div>
                        <hr style={{border: '1px solid #333', marginTop: '10px' }} />
                        <div className="row">
                            {/* <CartCartegory data={listCourses} /> */}
                            <Pagination data={listCourses} itemsPerPage={3} />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Category