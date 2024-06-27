import React from 'react'

export default function () {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
            <div className="carousel-inner" id="carousel" style={{height:"500px"}}>
                <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <form className="d-flex">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info text-white bg-info" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="https://imgs.search.brave.com/DgKJeUW93YLolVK8-ZqyweBn6OITucrV6rK1SVZuF88/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjE3NTgwMzMtZDg5/YTlhZDQ2MzMwP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRCOGZHaGhi/V0oxY21kbGNueGxi/bnd3Zkh3d2ZIeDhN/QT09" className="d-block w-100" style={{ filter: "brightness(70%)", height:"500px"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://imgs.search.brave.com/QNf5bM5G0IzJASX130Oe9hChZb5R2nnMxymSS3P2jDU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYyLzI3LzA3/LzM2MF9GXzYyMjcw/NzE2X3VjVUpJRmti/SklmV2VIQUsxMmln/NkVQSlFxSG1pd1lU/LmpwZw" className="d-block w-100" style={{ filter: "brightness(70%)", height:"500px" }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://imgs.search.brave.com/Cj7gvdrOTNTClzdA-w1QHCT68PV_P_cso40eBOP2w3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/Nzc1OTUyL3Bob3Rv/L2luc3RhbnQtbm9v/ZGxlcy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cnRxVi15/OVNJeDB3c0RNUEgw/TzRmZ2J6eFB6Z2dE/eXoxaGg4eXdibDl6/QT0" className="d-block w-100" style={{ filter: "brightness(70%)", height:"500px" }} alt="..." />
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
        </div>

    )
}
