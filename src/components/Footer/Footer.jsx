import clsx from "clsx"
import styles from "../Footer/Footer.module.css"

function Footer() {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#008bdd', marginTop: '40px' }}>
            <div className="container">
                <div className="row">
                    <div className={clsx("col-lg-3", styles.box1)}>
                        <h3>Kho khoá học</h3>
                        <p>
                            Website bán khoá học giá rẻ nhất thị trường
                            với đội ngũ giảng viên vô cùng chất lượng.
                            Làm việc với tiêu chí uy tín, hiệu quả
                            và nhanh chóng.
                        </p>
                    </div>
                    <div className={clsx("col-lg-3", styles.box2)}>
                        <h3>Danh mục khoá học</h3>
                        <a href="">Khoá học lập trình</a>
                        <a href="">Khoá học kiếm tiền MMO</a>
                        <a href="">Khoá học dịch vụ Facebook</a>
                    </div>
                    <div className={clsx("col-lg-3", styles.box3)}>
                        <h3>Liên hệ</h3>
                        <a href="">Email: lck.dev7014@gmail.com</a>
                        <a href="">SĐT (Zalo): 0327142982</a>
                    </div>
                    <div className={clsx("col-lg-3", styles.box4)}>
                        <h3>Thông tin cần thiết</h3>
                        <a href="">Câu hỏi thường gặp</a>
                        <a href="">Điều khoản dịch vụ</a>
                        <a href="">Hướng dẫn mua hàng</a>
                        <a href="">Giới thiệu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer 