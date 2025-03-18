import styles from "../Blog/Blog.module.css"
import imageBlog from "../../assets/image/product/product1.jpg"
import clsx from "clsx"

const listBlog = [
    {
        'id': 1,
        'image': imageBlog,
        'title': 'Là Thành viên F8',
        'content': '`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    },
    {
        'id': 2,
        'image': imageBlog,
        'title': 'Là Thành viên F8',
        'content': '`F8` sẽ đưa bạn đến chính là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    },
    {
        'id': 3,
        'image': imageBlog,
        'title': 'Là Thành viên F8',
        'content': '`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    }
    // {
    //     'id':4,
    //     'image': imageBlog,
    //     'title': 'Là Thành viên F8',
    //     'content': '`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    // },
    // {
    //     'id':5,
    //     'image': imageBlog,
    //     'title': 'Là Thành viên F8',
    //     'content': '`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    // },
    // {
    //     'id':6,
    //     'image': imageBlog,
    //     'title': 'Là Thành viên F8',
    //     'content': '`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    // },
    // {
    //     'id':7,
    //     'image': imageBlog,
    //     'title': 'Là Thành viên F8',
    //     'content': '`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)'
    // },
]

function Blog() {
    return (
        <div className={clsx("container", styles.blog)}>
            <h1>BLOG</h1>
            <div className="row">
                {
                    listBlog.map(blog => (
                        <div className="col-lg-4 mt-3" key={blog.id}>
                            <div className="card">
                                <img src={blog.image} className="card-img-top" alt="" />
                                <div className={clsx("card-body", styles.btnXemThem)}>
                                    <h5>{blog.title}</h5>
                                    <p>{blog.content.length > 50 ? blog.content.substring(0, 200) + "..." : blog.content + ''}</p>
                                    <a href="">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog