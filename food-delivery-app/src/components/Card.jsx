import React from 'react'

export default function Card(props) {

    let options = props.options
    let priceOptions = Object.keys(options)

  return (
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
                    <img src={props.foodImage} className="card-img-top" alt="..." style={{height:"180px",objectFit:"fill"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{props.foodName}</h5>
                            <div className='container w-100'>
                                <select className='m-2 h-100 bg-light rounded'>
                                    {Array.from(Array(10), (e,i)=>{
                                        return(
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        )
                                    })}
                                </select>
                                <select className='m-2 h-100 bg-light rounded'>
                                    {priceOptions.map((data)=>{
                                        return(
                                            <option key={data} value={data}>{data}</option>
                                        )
                                    })}
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    Total Price
                                </div>
                            </div>
                        </div>
                </div>
  )
}
