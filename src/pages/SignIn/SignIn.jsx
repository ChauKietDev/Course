import styles from "../SignIn/SignIn.module.css"
import imageSignIn from "../../assets/image/sign-up.png"
import clsx from "clsx"
import { Link } from "react-router"

function SignIn() {
    return (
        <div className={styles.signUp}>
            <div className={styles.boxSignIn}>
                <div className={styles.boxImage}>
                    <img src={imageSignIn} alt="" />
                </div>

                <div className={styles.boxAction}>
                    <form action="">
                        <h1>Đăng nhập</h1>
                        <div className={styles.entryarea}>
                            <input type="text" required />
                            <div className={styles.lableLine}>Tên đăng nhập</div>
                        </div>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="password" required />
                            <div className={styles.lableLine}>Mật khẩu</div>
                        </div>

                        <div style={{ marginTop: '50px' }}>
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" />
                            <label class="form-check-label" for="invalidCheck" style={{ marginLeft: '10px' }}>
                                Nhớ tài khoản
                            </label>
                        </div>
                        <div className={styles.btnSignIn}>
                            <button>Đăng nhập</button>
                        </div>
                        <p className={styles.signUpHere}>Bạn chưa có tài khoản? <Link to='/sign-up'>ĐĂNG KÝ NGAY</Link></p>
                        <div className={styles.forget}>
                            <Link to='/quen-mat-khau'>Quên mật khẩu</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn