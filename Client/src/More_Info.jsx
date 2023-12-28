import React, { useState, useEffect } from 'react';
import image from './Image/1669125652900.jpg';
import line from './Image/line.png';
import './App.css';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import { toast } from 'react-toastify';
import axios from 'axios';

const More_Info = () => {
    const [data, setData] = useState({});
    const location = useLocation();
    const s = location.state?.name;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://pgbackend.adityachoudhury.com/api/property/${s}`;
                const response = await axios.get(url);
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                    toast("DONE");
                }
            } catch (error) {
                toast("Error fetching data");
            }
        };

        fetchData();
    }, [s]);

    return (
        <>
            <div className="hero-div w-[100%] h-[585px]">
                <img src={line} className="line-img" alt="line"></img>
                <div className="info_div  text-lg">
                    <h1 style={{ marginTop: "-5rem" }}>Owner's Name: <span className="text-lg" style={{ marginLeft: "1.8rem", fontWeight: "600" }}>{data.name}</span></h1>
                    <h1 style={{ marginTop: "3rem" }}>Contact: <span className="text-lg" style={{ marginLeft: "5.3rem", fontWeight: "600" }}>{data.ownerContact}</span></h1>
                    <h1 style={{ marginTop: "3rem" }}>Address:<span className="text-lg" style={{ marginLeft: "5.2rem", fontWeight: "600" }}>{data.address}</span></h1>
                    <h1 style={{ marginTop: "3rem" }}>Nearest College: <span className="text-lg Amnety2" style={{ marginLeft: "21px", fontWeight: "600" }}>{data?.nerbyColleges?.[0]?.collegeName}</span></h1>
                    <h1 style={{ marginTop: "3rem" }}>Amenities:
                        <div style={{ display: "flex", flexDirection: "row", marginLeft: "9.9rem", marginTop: "-2rem", gap: "20px", fontWeight: "600" }}>
                            <h1 className="Amnety">Furnished</h1>
                            {data.facilities && data.facilities.food && <h1 className="Amnety">Mess</h1>}
                            {data.facilities && data.facilities.hotWater && <h1 className="Amnety">Geyser</h1>}
                            {data.facilities && data.facilities.laundry && <h1 className="Amnety">Laundry</h1>}
                            {data.facilities && data.facilities.ac && <h1 className="Amnety">AC</h1>}
                            <h1 className="Amnety">Inverter</h1>
                            {data.facilities && data.facilities.wifi && <h1 className="Amnety">Wi-Fi</h1>}
                        </div>
                    </h1>
                </div>

                <div style={{ height: "370px", width: "78rem", border: "2px solid black", margin: "1rem", borderRadius: "19px", backgroundColor: "white", marginTop: "8rem" }}>
                    <div style={{ borderRadius: "20px", padding: "10px" }}>
                        <img src={image} style={{ width: "27%", height: "300px", borderRadius: "19px", padding: "4px" }} alt="property" />
                    </div>

                    <h1 className="mx-[7rem] text-xl" style={{ marginTop: "-10px" }}>𝑅𝑒𝓃𝓉: ₹{data?.rent}</h1>
                    <h1 className="mx-[7rem] text-xl" style={{ marginTop: "-3px" }}>𝑅𝑜𝑜𝓂𝓈: {data?.rooms}</h1>
                </div>
            </div>
        </>
    );
};

export default More_Info;
