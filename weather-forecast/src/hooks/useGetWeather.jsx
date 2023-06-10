import axios from 'axios';
import { useEffect, useState } from "react"


const useGetWeather = (range, area) => {

    const [dataList,setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getWeekWeather = () => {
        setLoading(true);
        
        if (range === "week") {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
            .then(response => {
                setDataList(response.data.list.filter((_,idx)=>idx%8===0));
                setLoading(false);
            }).catch(err => {
                setError(true);
            })
        }
        else if (range === "day") {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
            .then(response => {
                setDataList(response.data);
                setLoading(false);
            }).catch(err => {
                setError(true);
            })
        }

    }

    useEffect(() => {
        getWeekWeather();
    }, [])

    useEffect(() => {
        getWeekWeather();
    }, [area])

    return { dataList, loading, error };

}

export default useGetWeather