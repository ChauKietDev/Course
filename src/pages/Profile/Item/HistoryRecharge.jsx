import clsx from "clsx"
import styles from "../Item/HistoryRecharge.module.css"

const HistoryRecharge = () => {
    return (
        <>
            <h1>
                <table className={clsx(styles.tabletRecharge, 'table table-bordered')}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã giao dịch</th>
                            <th>Số tiền</th>
                            <th>Thanh toán</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SFDSDFS</td>
                            <td>10.000đ</td>
                            <td>10.000đ</td>
                            <td>2025-03-13 20:45:34</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>SFDSDFS</td>
                            <td>10.000đ</td>
                            <td>10.000đ</td>
                            <td>2025-03-13 20:45:34</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>SFDSDFS</td>
                            <td>10.000đ</td>
                            <td>10.000đ</td>
                            <td>2025-03-13 20:45:34</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>SFDSDFS</td>
                            <td>10.000đ</td>
                            <td>10.000đ</td>
                            <td>2025-03-13 20:45:34</td>
                        </tr>
                    </tbody>
                </table>
            </h1>
        </>
    )
}
export default HistoryRecharge 