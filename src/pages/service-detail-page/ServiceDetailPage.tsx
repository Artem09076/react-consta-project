import ServiceDetail from "../../components/service-detail/ServiceDetail.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {urlApi} from "../../const.ts";

const ServiceDetailPage = () => {
    const serviceId = window.location.pathname.split("/")[2];


    const URLService = urlApi + `services/` + serviceId;
    const [serviceState, setService] = useState({});
    useEffect(() => {
        axios.get(URLService).then((response) => {
            const mainList = response.data;
            console.log(mainList);
            setService(mainList);
        });
    }, [setService, URLService]);

    return (
        <ServiceDetail data={serviceState}></ServiceDetail>
    )
}

export default ServiceDetailPage