import styles from "../Section/TopCourse.module.css"
import imageProduct1 from "../../assets/image/product/product1.jpg"
import Cart from "../Cart/Cart"

const listCourses = [
    {
        "id": 1,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho q chạy quảng cáo Facebook từ cơ bản đến nâng cao cho quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 2,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 3,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 4,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 4,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 4,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 4,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    },
    {
        "id": 4,
        "title": 'Khoá học chạy quảng cáo Facebook từ cơ bản đến nâng cao cho người mới',
        "image": imageProduct1,
        "priceDefault": 20000000,
        "priceCurrent": 99000
    }
]

function Programming() {
    return (
        <section className={styles.section2}>
            <div className="container">
                <h1>KHOÁ HỌC LẬP TRÌNH</h1>
                <div className="row">
                    <Cart data={listCourses} />
                </div>
            </div>
        </section>
    )
}
export default Programming