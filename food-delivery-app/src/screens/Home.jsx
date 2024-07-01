import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'



export default function Home() {

    const [search, setSearch]=useState('')
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        //console.log(response[0],response[1]);
        setFoodItem(response[0])
        setFoodCat(response[1])

    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <div> <Navbar /></div>
            <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel" style={{ height: "500px" }}>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            <button className="btn btn-outline-danger text-white bg-danger" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://imgs.search.brave.com/DgKJeUW93YLolVK8-ZqyweBn6OITucrV6rK1SVZuF88/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjE3NTgwMzMtZDg5/YTlhZDQ2MzMwP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRCOGZHaGhi/V0oxY21kbGNueGxi/bnd3Zkh3d2ZIeDhN/QT09" className="d-block w-100" style={{ filter: "brightness(70%)", height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://imgs.search.brave.com/QNf5bM5G0IzJASX130Oe9hChZb5R2nnMxymSS3P2jDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzI3LzA3/LzM2MF9GXzYyMjcw/NzE2X3VjVUpJRmti/SklmV2VIQUsxMmln/NkVQSlFxSG1pd1lU/LmpwZw" className="d-block w-100" style={{ filter: "brightness(70%)", height: "500px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://imgs.search.brave.com/Cj7gvdrOTNTClzdA-w1QHCT68PV_P_cso40eBOP2w3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/Nzc1OTUyL3Bob3Rv/L2luc3RhbnQtbm9v/ZGxlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cnRxVi15/OVNJeDB3c0RNUEgw/TzRmZ2J6eFB6Z2dE/eXoxaGg4eXdibDl6/QT0" className="d-block w-100" style={{ filter: "brightness(70%)", height: "500px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div></div>
            <div className='container'>
                {
                    foodCat != []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3 text-danger fst-bold'>
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem != [] ? foodItem.filter((item) => (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))) 
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card
                                                        foodName={filterItems.name}
                                                        options={filterItems.options[0]}
                                                        foodImage={filterItems.img}
                                                    ></Card>
                                                </div>
                                            )
                                        }) : <div>No such data found</div>}
                                </div>
                            )
                        }) : <div>""</div>
                }
            </div>
            <div> <Footer /></div>
        </div>
    )
}
