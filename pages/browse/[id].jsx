import Head from "next/head"
import Link from "next/link"
import * as React from 'react'
import Header from 'components/header'
import { useState } from "react"
import { Button } from "react-bootstrap"
import Image from "next/image"

import iosIcon from 'public/iosIcon.jpg';
import andIcon from 'public/androidIcon.jpg';
import deskIcon from 'public/desktopIcon.jpg';
import cardIcon from 'public/cardboardIcon.jpg';
import vrIcon from 'public/vrIcon.jpg';
import backArrow from 'public/backArrow2.jpg';


const url = process.env.BRANCH_URL;
// const url = "https://sp-2-eta.vercel.app"
// const url = "http://localhost:3000"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Video({ video }) {

    const [activeTab, setActiveTab] = useState("");

    function handleTab(i) {
        setActiveTab(i)
    }


    if (!video) return (
        <div>
            <p>Video not found</p>
            <Link href="/browse">Back</Link>
        </div>
    );

    return (
        <>
            <Head>
                <title>{video.title}</title>
            </Head>

            <Header />

            <section className="jumbotron">
                <div className="container">
                    <br />
                    <h1 className="jumbotron-heading">{video.title}</h1>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Button className={`nav-link ${activeTab === "ios" ? "active" : ""}`} onClick={() => handleTab("ios")} data-bs-toggle="collapse" href="#collapseExample1" aria-controls="collapseExample1"><Image className="rounded mx-auto d-block"
                                src={iosIcon}
                                alt=""
                                width="40"
                                height="40" /></Button>
                        </li>
                        <li className="nav-item">
                            <Button className={`nav-link ${activeTab === "android" ? "active" : ""}`} onClick={() => handleTab("android")} data-bs-toggle="collapse" href="#collapseExample2" aria-controls="collapseExample2"><Image className="rounded mx-auto d-block"
                                src={andIcon}
                                alt=""
                                width="40"
                                height="40" /></Button>
                        </li>
                        <li className="nav-item">
                            <Button className={`nav-link ${activeTab === "desktop" ? "active" : ""}`} onClick={() => handleTab("desktop")} ><Image className="rounded mx-auto d-block"
                                src={deskIcon}
                                alt=""
                                width="40"
                                height="40" /></Button>
                        </li>
                        <li className="nav-item">
                            <Button className={`nav-link ${activeTab === "card" ? "active" : ""}`} onClick={() => handleTab("card")} ><Image className="rounded mx-auto d-block"
                                src={cardIcon}
                                alt=""
                                width="40"
                                height="30"
                            /></Button>
                        </li>
                        <li className="nav-item">
                            <Button className={`nav-link ${activeTab === "vrHeadset" ? "active" : ""}`} onClick={() => handleTab("vrHeadset")} ><Image className="rounded mx-auto d-block"
                                src={vrIcon}
                                alt=""
                                width="40"
                                height="40" /></Button>
                        </li>
                    </ul>
                </div>


                <div className="collapse" id="collapseExample1" style={{ padding: "20px" }}>
                    <div className="card card-body">
                        <h6>1. iOS Mobile Devices must be viewed on Youtube for the full experience.</h6>
                        <h6>2. Proceed by clicking this <Link href={video.link}>link</Link>.</h6>
                    </div>
                </div>

                <div className="collapse" id="collapseExample2" style={{ padding: "20px" }}>
                    <div className="card card-body">
                        <h6>1. iOS Mobile Devices must be viewed on Youtube for the full experience.</h6>
                        <h6>2. Proceed by clicking this <Link href={video.link}>link</Link>.</h6>
                    </div>
                </div>

                <div className="container-xxl content-row">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
                        <iframe className="vr-iframe" width="921" height="518" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            src={video.link} style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} allowFullScreen></iframe>
                    </div>

                    <br />


                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h5 className="card-title">Description:</h5>
                                    <p className="card-text">{video.desc}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <h5 className="card-title">Location:</h5>
                                    <p className="card-text">{video.location}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <h5 className="card-title">Duration:</h5>
                                    <p className="card-text">{video.duration}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <h5 className="card-title">Uploaded:</h5>
                                    <p className="card-text">{video.dateOfUpload}</p>
                                </div>
                            </div>
                        </div>
                        <Link href={video.link} className="btn btn-primary my-2" style={{ margin: "50px" }}>Go to Website</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
    console.debug('params', params)
    const res = await fetch(`${url}/api/browse/videos/${params.id}`)
    // const res = await fetch(`http://localhost:3000/api/browse/videos/${params.id}`)
    const video = await res.json()
    console.debug('blog 1', video)
    return { props: { video } }
}