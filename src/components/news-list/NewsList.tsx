import News from "../news/News.tsx";
import {useState} from "react";
import {Pagination} from "@consta/uikit/Pagination";
import './NewsList.css'


type NewsItem = {
    id: string;
    createdAt: string;
    name: string;
    description: string;
};

const NewsList = ({ data }: { data: NewsItem[]}) => {
    const itemsPerPage = 5;
    const countPage = Math.ceil(data.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentDate = data.slice(startIndex, endIndex);





    return (
        <div className='news-list-container'>
        <div className="news-list">
            {currentDate.map((item) => (
                <div className='news-item'>
                <News key={item.id} data={item} />
                </div>
            ))}
        </div>
            <Pagination items={countPage} value={currentPage} onChange={setCurrentPage} arrows={[true, true]} className='news-pagination'></Pagination>
        </div>

    )
}
export default NewsList