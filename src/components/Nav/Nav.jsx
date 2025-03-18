import { FaBars, FaAngleDown } from "react-icons/fa"
import styles from "./Nav.module.css"
import clsx from "clsx"
import { Link } from "react-router"
import { useState } from "react"
import { useEffect } from "react"

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

    const [amountMoney, setAmountMoney] = useState('')

    const handleChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Chỉ giữ số
        setAmountMoney(value);
    };


    useEffect(() => {
        const modalElement = document.getElementById("exampleModal");
    
        const handleModalClose = () => {
          setAmountMoney(""); // Xóa giá trị khi modal bị đóng
        };
    
        modalElement?.addEventListener("hidden.bs.modal", handleModalClose);
    
        return () => {
          modalElement?.removeEventListener("hidden.bs.modal", handleModalClose);
        };
      }, []);

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
                            <li><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">NẠP TIỀN</a></li>
                            <li><a href="">LIÊN HỆ</a></li>
                            <li><a href="">BLOG</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nhập số tiền cần nạp</h1>
                            <button onClick={e => setAmountMoney('')} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className={clsx("modal-body", styles.inputNapTien)}>
                            <input value={amountMoney}
                                onChange={handleChange} type="text" placeholder="Nhập số tiền cần nạp vào hệ thống" />
                        </div>
                        <div className={styles.showTien}>
                            <div className={styles.moneyLeft}>
                                <p>Số tiền cần thanh toán</p>
                                <span>{Number(amountMoney).toLocaleString("vi-VN")} </span>
                            </div>
                            <div className={styles.moneyRight}>
                                <p>Số tiền nhận được</p>
                                <span>{Number(amountMoney).toLocaleString("vi-VN")}</span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={e => setAmountMoney('')}>Đóng</button>
                            <button type="button" className="btn btn-primary">Tạo hoá đơn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Nav