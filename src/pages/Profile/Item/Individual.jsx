import styles from "../Item/Individual.module.css"
import clsx from "clsx"
import imageProduct1 from "../../../assets/image/product/product1.jpg"


const Individual = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <form action="">
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Tên đăng nhập</label>
                            <input type="text" value={121} />
                        </div>
                        <div className={clsx(styles.inputGroup, 'mt-2')}>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className={styles.btn}>
                            <button>Chỉnh sửa</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className={styles.chooseImage}>
                        <img src={imageProduct1} alt="" />
                        <div className={styles.choose}>
                            <label htmlFor="fileUpload" className={styles.customFileLabel}>Chọn ảnh</label>
                            <input type="file" id="fileUpload" className={styles.customFileInput} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Individual