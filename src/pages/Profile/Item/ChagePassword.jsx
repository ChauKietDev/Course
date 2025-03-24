import styles from "../Item/ChagePassword.module.css"
import { Link } from "react-router"

const ChangePassword = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <form action="">

                        <div className={styles.inputGroup} style={{margin: 0}}>
                            <label htmlFor="">Mật khẩu cũ</label>
                            <input type="password" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Mật khẩu mới</label>
                            <input type="password" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Nhập lại mật khẩu</label>
                            <input type="password" />
                        </div>
                        <div className={styles.qmk}>
                        <Link to='/quen-mat-khau'>Quên mật khẩu</Link>
                        </div>
                        <div className={styles.btn}>
                            <button>Đổi mật khẩu</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword