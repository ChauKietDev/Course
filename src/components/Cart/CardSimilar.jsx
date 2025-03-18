import styles from "../Cart/CardSimilar.module.css"
import clsx from "clsx"
import { Link } from "react-router"

function CardSimilar({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <div className={clsx("col-lg-3 col-md-4 mt-3", styles.cart)} key={index}>
                    <div className={clsx("card", styles.editA)}>
                        <Link to="/productDetail" className={styles.boxImage}>
                            <img className="card-img-top" src={item.image}></img>
                        </Link>
                        <div className="card-body">
                            <p>{item.title.length > 40 ? item.title.substring(0, 40) + '...' : item.title}</p>
                            <div className={styles.cartPrice}>
                                <h5>{item.priceCurrent.toLocaleString('vi-VN')}<strong>đ</strong> </h5>
                                <h6><del>{item.priceDefault.toLocaleString('vi-VN')}</del><strong>đ</strong></h6>
                            </div>
                            <Link to="/ll" className={styles.btnMuaNgay}>
                                <span>Mua ngay</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardSimilar