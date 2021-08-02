import React, { useEffect, useState } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const Tempreture = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bangalore");
    const [country, setCountry] = useState("India");

    useEffect(() => {
        const fetchApi = async () => {
            const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e9477b1e0685f6bf055d11748df00b96`
            const response = await fetch(url1);
            const resjson1 = await response.json();
            setCity(resjson1.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="main-div">
                <div className="input-field">
                    <input type="search" className="inputdata"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                    <input type="search" className="inputdata"
                        value={country}
                        onChange={(event) => {
                            setCountry(event.target.value);
                        }} />

                    {!city ? (
                        <p>NO Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <NightsStayIcon className="filterdrama" />
                                <h2 className="location">
                                    <RoomIcon className="roomicon" />{search}, {country}
                                </h2>
                                <h3 className="temp">{city.temp}&#8451;</h3>
                                <h4 className="temp-min-max"> {city.temp_min}&#8451; {" "}/{" "}{city.temp_max}&#8451;</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
export default Tempreture;
