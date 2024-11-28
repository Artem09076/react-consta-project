import {useEffect, useState} from "react";
import axios from "axios";
import ServicesList from "../../components/services-list/ServicesList.tsx";
import {urlApi} from "../../const.ts";

const ServicePage = () => {

    const URLServices = urlApi + 'services'

    const [servicesState, setServices] = useState([]);
    useEffect(() => {
        axios.get(URLServices).then((response) => {
            const mainList = response.data;
            setServices(mainList);
        });
    }, [setServices, URLServices]);
    return (
        <div>
            <ServicesList data={servicesState}/>
        </div>
    )
}

export default ServicePage;