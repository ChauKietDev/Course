import styles from "../Item/CourseFavourite.module.css"
import imageProduct1 from "../../../assets/image/product/product1.jpg"
import clsx from "clsx"

const CourseFavourite = () => {
    return (
        <>
            <table className={clsx(styles.courseFavourite, 'table table-bordered')}>
                <thead>
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Hết hạn</th>
                        <th>Giá</th>
                        <th>Hành động</th>
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
                            <button>Xoá</button>
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
                            <button>Xoá</button>
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
                            <button>Xoá</button>
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
                            <button>Xoá</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CourseFavourite