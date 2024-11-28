import NewsList from "../../components/news-list/NewsList.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {urlApi} from "../../const.ts";

const MainPage = () => {
    const URLNews = urlApi + 'main'
    const [newsState, setNews] = useState([]);
    useEffect(() => {
        axios.get(URLNews).then((response) => {
            const mainList = response.data;
            setNews(mainList);
        });
    }, [setNews, URLNews]);
    return (
        <NewsList data={newsState}/>
    )
}
export default MainPage