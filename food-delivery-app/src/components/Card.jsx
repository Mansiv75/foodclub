import React from 'react'

export default function 
() {
  return (
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
                    <img src="https://imgs.search.brave.com/OoPgg4k7se643Ew8t_4kEN0o45sx7razgT7ynpUr1tE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/NTkwOTU3L3Bob3Rv/L3Rpa2thLWJvdHMt/MTAuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVFSeC12N0k4/WW5zSVpGS3hna28z/c0RPRVB1aXVTNmRQ/blZ1S0RZdlp2dXc9" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build</p>
                            <div className='container w-100'>
                                <select className='m-2 h-100 bg-secondary rouned'>
                                    {Array.from(Array(10), (e,i)=>{
                                        return(
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        )
                                    })}
                                </select>
                                <select className='m-2 h-100 bg-secondary rouned'>
                                    <option value="half">Half</option>
                                    <option value="full">Full</option>
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    Total Price
                                </div>
                            </div>
                        </div>
                </div>
  )
}
