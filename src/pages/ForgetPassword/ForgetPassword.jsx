import styles from "../ForgetPassword/ForgetPassword.module.css"
import imageSignUp from "../../assets/image/sign-up.png"
import clsx from "clsx"
import { Link } from "react-router"

function ForgetPassword() {
    return (
        <div className={styles.signUp}>
            <form action="">
                <div className={styles.boxForgetPass}>
                    <div className={styles.boxImage}>
                        <img src={imageSignUp} alt="" />
                    </div>
                    <div className={styles.boxAction}>
                        <h1>Quên mật khẩu</h1>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="text" required />
                            <div className={styles.lableLine}>Email</div>
                        </div>
                        <div className={styles.getCode}>
                            <div className={clsx(styles.entryarea, styles.mt60)} style={{width: '100%'}}>
                                <input type="password" required />
                                <div className={styles.lableLine}>Nhập mã</div>
                            </div>
                            <div className={clsx(styles.entryarea, styles.mt60)} style={{width: '30%', }}>
                               <button className={styles.btnGetCode}>Gửi mã</button>
                            </div>
                        </div>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="password" required />
                            <div className={styles.lableLine}>Mật khẩu mới</div>
                        </div>
                        <div className={clsx(styles.entryarea, styles.mt60)}>
                            <input type="password" required />
                            <div className={styles.lableLine}>Nhập lại mật khẩu</div>
                        </div>
                        <div className={styles.btnForgetPass}>
                            <button>Tạo mật khẩu</button>
                        </div>
                        <p className={styles.signInHere}>Bạn đã có tài khoản? <Link to='/sign-in'>ĐĂNG NHẬP NGAY</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgetPassword