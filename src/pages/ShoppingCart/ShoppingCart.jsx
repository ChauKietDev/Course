import { Link } from "react-router";
import clsx from "clsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"

import styles from "../ShoppingCart/ShoppingCart.module.css"
import imageProduct from "../../assets/image/product.png"
import { FaWindowClose } from "react-icons/fa";
function ShoppingCart() {
    return (
        <>
            <Header />
            <Nav />
            <div className="container">
                <h1 className={styles.title}>Giỏ hàng</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className={styles.boxProduct}>
                            <table className={styles.tableCart}>
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Tạm tính</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.pdd}>
                                        <td>
                                            <FaWindowClose />
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </td>
                                        <td>99.000đ</td>
                                        <td>99.000đ</td>
                                    </tr>
                                    <tr className={styles.pdd}>
                                        <td>
                                            <FaWindowClose />
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </td>
                                        <td>99.000đ</td>
                                        <td>99.000đ</td>
                                    </tr>
                                    <tr className={styles.pdd}>
                                        <td>
                                            <FaWindowClose />
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </td>
                                        <td>99.000đ</td>
                                        <td>99.000đ</td>
                                    </tr>
                                    <tr className={styles.pdd}>
                                        <td>
                                            <FaWindowClose />
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </td>
                                        <td>99.000đ</td>
                                        <td>99.000đ</td>
                                    </tr>
                                    <tr className={styles.pdd}>
                                        <td>
                                            <FaWindowClose />
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </td>
                                        <td>99.000đ</td>
                                        <td>99.000đ</td>
                                    </tr>
                                    <tr className={styles.pdd}>
                                        <td>
                                            <FaWindowClose />
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </td>
                                        <td>99.000đ</td>
                                        <td>99.000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.boxThanhToan}>
                            <div className={styles.rowTamTinh}>
                                <p>Tạm tính</p>
                                <h3>99.000<u>đ</u></h3>
                            </div>
                            <hr />
                            <div className={styles.rowTong}>
                                <p>Tổng</p>
                                <h3>99.000<u>đ</u></h3>
                            </div>
                            <div className={styles.btnThanhToan} data-bs-toggle="modal" data-bs-target="#eee">
                                <span>TIẾN HÀNH THANH TOÁN</span>
                            </div>
                            <div className={styles.btnBackHome}>
                                <Link to='/'>Tiếp tục mua hàng</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


            {/* <!-- Modal --> */}
            <div className="modal fade" id="eee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className={clsx("modal-header", styles.titleThanhToan)}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">THANH TOÁN</h1>
                        </div>
                        <div className="modal-body">
                            <table className={styles.tableProduct}>
                                <tbody>
                                    <tr>
                                        <th>
                                            <img src={imageProduct} alt="" />
                                            <span>Chạy quảng cáo Facebook</span>
                                        </th>
                                        <th>99.000<u>đ</u></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.boxBottom}>
                            <div className={styles.showMoney}>
                                <p>Tổng thanh toán:</p>
                                <h4>199.999<u>đ</u></h4>
                            </div>
                            <button type="button">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart