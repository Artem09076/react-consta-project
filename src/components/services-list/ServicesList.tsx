import {useState} from "react";
import {Pagination} from "@consta/uikit/Pagination";
import Service from "../service/Service.tsx";
import './ServicesList.css'

type ServicesItem = {
    id: string;
    createdAt: string;
    name: string;
    description: string;
    image: string;
};

const NewsList = ({ data }: { data: ServicesItem[]}) => {
    const itemsPerPage = 3;
    const countPage = Math.ceil(data.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentDate = data.slice(startIndex, endIndex);





    return (
        <div className='services-list'>
            <div className="news-list">
                {currentDate.map((item) => (
                    <div className='news-item'>
                        <Service data={item}></Service>
                    </div>
                ))}
            </div>
            <Pagination items={countPage} value={currentPage} onChange={setCurrentPage} arrows={[true, true]} className='services-pagination'></Pagination>
        </div>

    )
}
export default NewsList