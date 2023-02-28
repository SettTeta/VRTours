import Head from "next/head"
import Link from "next/link"
import * as React from 'react'
import Header from 'components/header'

const url = process.env.API_URL;
// const url = "https://sp-2-eta.vercel.app"
// const url = "http://localhost:3000"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Video({ video }) {

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
                    <br></br>
                    <h1 className="jumbotron-heading">{video.title}</h1>
                    <br />
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container-xxl content-row">

                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
                        <iframe className="vr-iframe" width="921" height="518" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            src={video.link} style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} allowFullScreen></iframe>
                    </div>

                    <br />

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="card-title">Description:</h4>
                                    <p className="card-text">{video.desc}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <h4 className="card-title">Location:</h4>
                                    <p className="card-text">{video.location}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <h4 className="card-title">Duration:</h4>
                                    <p className="card-text">{video.duration}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <h4 className="card-title">Uploaded:</h4>
                                    <p className="card-text">{video.dateOfUpload}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <Link href={video.link} className="btn btn-primary my-2">Go to Website</Link>
                    </div>

                    <div className="card mb-3">
                        <Link href="/browse" className="btn btn-danger my-2">Back</Link>
                    </div>

                </div>
            </div>
            <section className="jumbotron" >
                <div className="container">
                    <p className="lead text-muted" style={{ background: "#fafafa", padding: "10px 30px", borderRadius: "10px" }}>
                        Description:
                        <br></br>
                        {video.desc}
                    </p>


                </div>
            </section>
        </>
    )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
    console.debug('params', params)
    const res = await fetch(`${url}/api/browse/videos/${params.id}`)
    const video = await res.json()
    console.debug('blog 1', video)
    return { props: { video } }
}