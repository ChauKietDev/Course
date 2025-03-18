import styles from "./Section1.module.css"
import image1 from "../../assets/image/img-section1.jpg"
import clsx from "clsx"

const contents = [
    {
        "image": image1,
        "title": 'Uy tín chất lượng',
        "content": 'Hoàn tiền nếu khoá học không như mô tả'
    },
    {
        "image": image1,
        "title": 'Uy tín chất lượng',
        "content": 'Hoàn tiền nếu khoá học không như mô tả'
    },
    {
        "image": image1,
        "title": 'Uy tín chất lượng',
        "content": 'Hoàn tiền nếu khoá học không như mô tả'
    },
    {
        "image": image1,
        "title": 'Uy tín chất lượng',
        "content": 'Hoàn tiền nếu khoá học không như mô tả'
    }

]


function Section1() {

    function ItemTongHop({ data }) {
        return (
            <div className={clsx("col-lg-3 col-md-6 mt-3", styles.section)}>
                <div className={styles.content}>
                    <div className={styles.boxImage}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={styles.boxContent}>
                        <span>{data.title}</span>
                        <p>{data.content}</p>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <section className={styles.section1}>
            <div className="container">
                <h1>TỔNG HỢP KHOÁ HỌC DRIVE</h1>
                <hr />
                <div className={clsx('row', styles.mt20)}>
                    {
                        contents.map((content, index) => (
                            <ItemTongHop data={content} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Section1