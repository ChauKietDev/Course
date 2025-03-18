import styles from "../TranferBank/TranferBank.module.css"
import imageQr from "../../assets/image/vietqr.png"
import logo from "../../assets/image/logo2.png"
import { BiSolidBank } from "react-icons/bi";
import { FaMoneyCheck, FaRegUser, FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function TranferBank() {
    return (
        <div className={styles.chuyenKhoan}>
            <div className={styles.boxChuyenKhoan}>
                <div className={styles.boxLeft}>
                    <div className={styles.boxImage}>
                        <img src={logo} alt="" />
                    </div>
                    <ul className={styles.infoTranferBank}>
                        <li>
                            <BiSolidBank />
                            <div>
                                <p>Ngân hàng ACB</p>
                            </div>
                        </li>
                        <li>
                            <FaMoneyCheck />
                            <div>
                                <p>Số tài khoản</p>
                                <span>03532323</span>
                            </div>
                        </li>
                        <li>
                            <FaRegUser />
                            <div>
                                <p>Chủ tài khoản</p>
                                <span>LE CHAU KIET</span>
                            </div>
                        </li>
                        <li>
                            <FaMoneyBillWaveAlt />
                            <div>
                                <p>Số tiền cần thanh toán</p>
                                <span className={styles.colorMoney}>200.000đ</span>
                            </div>
                        </li>
                        <li>
                            <FaMessage />
                            <div>
                                <p>Nội dung chuyển khoản</p>
                                <span className={styles.nDUppercase}>fddffd</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.boxRight}>
                    <h1>
                        QUÉT MÃ QR ĐỂ THANH TOÁN
                    </h1>
                    <p>Sử dụng <strong>App Internet Banking</strong> hoặc ứng dụng camera hỗ trợ QR code để quét mã</p>
                    <img src={imageQr} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TranferBank