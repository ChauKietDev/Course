import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { useState } from "react";
import CartCategory from "../Cart/CartCategory"; // Import component hiển thị danh sách
import styles from "../../components/Pagination/pagination.module.css"

function Pagination({ data, itemsPerPage = 3 }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className="row">
                <CartCategory data={currentItems} />
            </div>
            <div className={styles.pagination}>
                <FaAngleDoubleLeft onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1} style={{cursor: 'pointer'}}/>

                <span>Trang {currentPage} / {totalPages}</span>

                <FaAngleDoubleRight onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages} style={{cursor: 'pointer'}} />
            </div>
        </div>
    );
}

export default Pagination;
