import { FaBars, FaAngleDown } from "react-icons/fa"
import styles from "./Nav.module.css"
import clsx from "clsx"
import { Link } from "react-router"

const listCategories = [
    {
        "id": 1,
        "name": 'Khoá học lập trình'
    },
    {
        "id": 2,
        "name": 'Thiết kế đồ hoạ'
    },
    {
        "id": 3,
        "name": 'Ngoại ngữ'
    },
    {
        "id": 4,
        "name": 'Tin học văn phòng'
    },
    {
        "id": 5,
        "name": 'Kỹ năng mềm'
    },
    {
        "id": 6,
        "name": 'Kiếm tiền'
    },
]

function Nav() {
    return (
        <div className={clsx("container-fluid", styles.nav)}>
            <div className="container">
                <div className="row">
                    <div className={clsx("col-lg-3", styles.boxShow)}>
                        <p className={styles.boxDanhMuc}>
                            <FaBars />
                            <span><Link>DANH MỤC SẢN PHẨM</Link></span>
                            <FaAngleDown />
                            <ul className={styles.listCategories}>
                                {
                                    listCategories.map((cate, index) => (
                                        <Link key={index}
                                        >
                                            <li >{cate.name}{index !== listCategories.length - 1 ? <hr className={styles.editHr} /> : <hr className={styles.colorNone} />}</li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </p>

                    </div>

                    <div className="col-lg-9">
                        <ul className={styles.menuNav}>
                            <li><Link to="/category">KHOÁ HỌC KIẾM TIỀN</Link></li>
                            {/* <li><a href="">KHOÁ HỌC MIỄN PHÍ</a></li> */}
                            <li><a href="">KHOÁ HỌC KIẾM TIỀN</a></li>
                            <li><a href="">KHOÁ HỌC DƯỚI 100K</a></li>
                            <li><a href="">ĐƠN HÀNG</a></li>
                            <li><a href="">NẠP TIỀN</a></li>
                            <li><a href="">LIÊN HỆ</a></li>
                            <li><a href="">BLOG</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav