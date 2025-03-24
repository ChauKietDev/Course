import imageProduct1 from "../../../assets/image/product/product1.jpg"
import styles from "../Item/CoursePayment.module.css"
import clsx from "clsx"

const CoursePayment = () => {
    return (
        <>
            <table className={clsx(styles.coursePayment, 'table table-bordered')}>
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Hết hạn</th>
                        <th>Giá</th>
                        <th>Tải về</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={imageProduct1} alt="" />
                            <span>Học lập trình trong 6 tháng</span>
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            <button>Vào học</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={imageProduct1} alt="" />
                            <span>Học lập trình trong 6 tháng</span>
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            <button>Vào học</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={imageProduct1} alt="" />
                            <span>Học lập trình trong 6 tháng</span>
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            <button>Vào học</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={imageProduct1} alt="" />
                            <span>Học lập trình trong 6 tháng</span>
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            sdfsd
                        </td>
                        <td>
                            <button>Vào học</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CoursePayment 