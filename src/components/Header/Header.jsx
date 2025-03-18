import clsx from "clsx"
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa"
import { Link } from "react-router"

import logo from "../../../src/assets/image/logo.jpg"
import logoPerson from "../../../src/assets/image/logo_person.png"
import styles from "./Header.module.css"

function Header() {
    return (
        <>
            <div className="container">
                <header className={clsx("d-none d-md-none d-lg-none d-md-block d-lg-block d-xl-block", styles.header)}>
                    <div className={clsx("row", styles.centerTopBottom)}>
                        <div className="col-lg-2">
                            <Link to="/"><img className={styles.imgLogo} src={logo} alt="" /></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.search}>
                                <input className={styles.inputSearch} type="text" placeholder="Tìm kiếm khoá học..." />
                                <span className={styles.iconSearch}><FaSearch /></span>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className={styles.itemAccount}>
                                <span>
                                    <img className={styles.imagePerson} src={logoPerson} alt="logo" />
                                </span>
                                <div className={styles.accountRight}>
                                    <span className={styles.soDuAccount}>SỐ DƯ: <strong>0Đ</strong></span>
                                    <p className={styles.textAccount}>
                                        <Link to='/sign-in'>Đăng nhập</Link>/
                                        <Link to='/sign-up'>Đăng ký</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className={styles.boxGioHang}>
                                <FaShoppingCart className={styles.iconCart} />
                                <p>Giỏ hàng</p>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* header tablet - mobile */}

                <header className={clsx("d-xl-none", styles.imageLogo)}>
                    <div className="row">
                        {/* <img className={styles.imgLogo} src={logo} alt="" /> */}

                    </div>
                    <div className="container-fluid ">
                        <Link to="/"><img className={styles.imgLogo} src={logo} alt="" /></Link>
                        <button className="navbar-toggler float-end mt-3 fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FaBars />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Đăng ký</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Đăng nhập</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="">Giỏ hàng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header