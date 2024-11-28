import {useEffect, useState} from "react";
import axios from "axios";
import ServicesList from "../../components/services-list/ServicesList.tsx";
import {urlApi} from "../../const.ts";

const ServicePage = () => {

    const URLNews = urlApi + 'services'

    const [servicesState, setServices] = useState([]);
    useEffect(() => {
        axios.get(URLNews).then((response) => {
            const mainList = response.data;
            setServices(mainList);
        });
    }, [setServices]);
    return (
        <div>
            <ServicesList data={servicesState}/>
        </div>
    )
}

export default ServicePage;