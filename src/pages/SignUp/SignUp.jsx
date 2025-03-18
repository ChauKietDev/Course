import styles from "../SignUp/SignUp.module.css"
import imageSignUp from "../../assets/image/sign-up.png"
import clsx from "clsx"
import { Link } from "react-router"

function SignUp() {
    return (
        <div className={styles.signUp}>
            <div className={styles.boxSignUp}>
                <div className={styles.boxImage}>
                    <img src={imageSignUp} alt="" />
                </div>

                <div className={styles.boxAction}>
                    <form action="">
                        <h1>Đăng ký</h1>
                        <div className={styles.entryarea}>
                            <input type="text" required />
                            <div className={styles.lableLine}>Tên đăng nhập</div>
                        </div>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="text" required />
                            <div className={styles.lableLine}>Email</div>
                        </div>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="password" required />
                            <div className={styles.lableLine}>Mật khẩu</div>
                        </div>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="password" required />
                            <div className={styles.lableLine}>Nhập lại mật khẩu</div>
                        </div>

                        <div style={{ marginTop: '50px' }}>
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label" for="invalidCheck" style={{ marginLeft: '10px' }}>
                                Tôi chấp nhận các điều khoản & Điều kiện
                            </label>
                        </div>
                        <div className={styles.btnSignup}>
                            <button>Đăng ký</button>
                        </div>
                        <p className={styles.signInHere}>Bạn đã có tài khoản? <Link to='/sign-in'>ĐĂNG NHẬP NGAY</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp