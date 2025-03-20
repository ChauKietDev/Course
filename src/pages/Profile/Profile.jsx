import styles from "../Profile/Profile.module.css"
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"
import { Routes, Route, Link, useLocation } from "react-router"
import { Outlet } from "react-router-dom";
const Profile = () => {

    const location = useLocation(); // Lấy đường dẫn hiện tại


    return (
        <>
            <Header />
            <Nav />
            <div className="container">
                <h1 className={styles.title}>Tài khoản</h1>
                <div className="row">
                    <div className="col-lg-3">
                        <ul className={styles.groupProfile}>
                            <Link to='/ho-so/ca-nhan'>
                                <li className={location.pathname === "/ho-so/ca-nhan" ? styles.active : ""}>Hồ sơ</li>
                            </Link>
                            <Link to='/ho-so/doi-mat-khau'>
                                <li className={location.pathname === "/ho-so/doi-mat-khau" ? styles.active : ""}>Đổi mật khẩu</li>
                            </Link>
                            <Link to='/ho-so/da-mua'>
                                <li className={location.pathname === "/ho-so/da-mua" ? styles.active : ""}>Khoá học đã mua</li>
                            </Link>
                            <Link to='/ho-so/yeu-thich'>
                                <li className={location.pathname === "/ho-so/yeu-thich" ? styles.active : ""}>Khoá học yêu thích</li>
                            </Link>
                            <Link to='/ho-so/lich-su-nap-tien'>
                                <li className={location.pathname === "/ho-so/lich-su-nap-tien" ? styles.active : ""}>Lịch sử nạp tiền</li>
                            </Link>
                            <Link to='/ho-so/dang-xuat'>
                                <li className={location.pathname === "/ho-so/dang-xuat" ? styles.active : ""}>Đăng xuất</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Profile