import * as React from "react"
import Image from "next/image"

function CardTemplate(props) {
    const { title, link, desc, onView, duration, location, dOU } = props
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-header bg-light" style={{verticalAlign:"middle"}}>
                    <h5>{title}</h5>
                </div>

                <div style={{ background: "#eee" }}>
                    <img src={link} style={{height:"100%", width:"100%", borderRadius: "1%", padding:"5px"}}></img>
                </div>

                <div className="card-body">
                    <p className="card-text" style={{ borderBottom: "3px solid #eee", paddingBottom: "10px" }}>{desc}</p>
                    <small className="text-muted">Location: {location}</small>
                    <br />
                    <small className="text-muted">Duration: {duration} mins</small>
                    <br />
                    <small className="text-muted">Uploaded: {dOU}</small>
                    <br />
                    <br />

                    <a type="button" style={{ width: "100%" }} className="btn btn-sm btn-primary" href={`/browse/${onView}`}>View</a>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate