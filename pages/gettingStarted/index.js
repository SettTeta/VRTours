import * as React from 'react'
import Head from 'next/head'
import Header from 'components/header'
import Image from 'next/image'

import iosIcon from 'public/iosIcon.jpg';
import andIcon from 'public/androidIcon.jpg';
import cardIcon from 'public/cardboardIcon.jpg';
import desktopIcon from 'public/desktopIcon.jpg';
import vrIcon from 'public/vrIcon.jpg';


function GettingStartedPage() {
    return (
        <main role="main">

            <Head>
                <title>Getting Started</title>
            </Head>

            <Header />


            <section className="jumbotron text-center">
                <div className="container">
                    <br></br>
                    <h1 className="jumbotron-heading">Choose your Device</h1>
                    <p className="lead text-muted">
                        The device that you will use will determine what kind of experience you will have. There are different ways to experience the same video.
                    </p>
                </div>
            </section>


            <div className="album py-5 bg-light">
                <div className='container'>

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-2 align-self-center ">
                                <br></br>
                                <Image className="rounded mx-auto d-block"
                                    src={iosIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" />
                                <br></br>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">iOS Devies</h3>
                                    <p className="card-text">Includes iPad and iPhone as well as other Apples products except the Mac.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseExample1" aria-controls="collapseExample1">More Details</a>
                                    <br />
                                    <a className="btn btn-outline-secondary" data-bs-toggle="collapse" href="#collapseExample1" aria-controls="collapseExample1">View Device</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 ">
                            <div className="collapse" id="collapseExample1" style={{padding:"20px"}}>
                                <div className="card card-body">
                                    <h5>Intro:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Experience:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Limitations:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-2 align-self-center ">
                                <br></br>
                                <Image className="rounded mx-auto d-block"
                                    src={andIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" />
                                <br></br>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">iOS Devies</h3>
                                    <p className="card-text">Includes iPad and iPhone as well as other Apples products except the Mac.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseExample2" aria-controls="collapseExample2">More Details</a>
                                    <br />
                                    <a className="btn btn-outline-secondary" data-bs-toggle="collapse" href="#collapseExample2" aria-controls="collapseExample2">View Device</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 ">
                            <div className="collapse" id="collapseExample2" style={{padding:"20px"}}>
                                <div className="card card-body">
                                    <h5>Intro:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Experience:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Limitations:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-2 align-self-center ">
                                <br></br>
                                <Image className="rounded mx-auto d-block"
                                    src={desktopIcon}
                                    alt="Picture of the author"
                                    width="100"
                                    height="100" />
                                <br></br>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">iOS Devies</h3>
                                    <p className="card-text">Includes iPad and iPhone as well as other Apples products except the Mac.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseExample3" aria-controls="collapseExample3">More Details</a>
                                    <br />
                                    <a className="btn btn-outline-secondary" data-bs-toggle="collapse" href="#collapseExample3" aria-controls="collapseExample3">View Device</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 ">
                            <div className="collapse" id="collapseExample3" style={{padding:"20px"}}>
                                <div className="card card-body">
                                    <h5>Intro:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Experience:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Limitations:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-2 align-self-center ">
                                <br></br>
                                <Image className="rounded mx-auto d-block"
                                    src={cardIcon}
                                    alt="Picture of the author"
                                    width="100"
                                    height="70" />
                                <br></br>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">iOS Devies</h3>
                                    <p className="card-text">Includes iPad and iPhone as well as other Apples products except the Mac.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseExample4" aria-controls="collapseExample4">More Details</a>
                                    <br />
                                    <a className="btn btn-outline-secondary" data-bs-toggle="collapse" href="#collapseExample4" aria-controls="collapseExample4">View Device</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 ">
                            <div className="collapse" id="collapseExample4" style={{padding:"20px"}}>
                                <div className="card card-body">
                                    <h5>Intro:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Experience:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Limitations:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-2 align-self-center ">
                                <br></br>
                                <Image className="rounded mx-auto d-block"
                                    src={vrIcon}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130" />
                                <br></br>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">iOS Devies</h3>
                                    <p className="card-text">Includes iPad and iPhone as well as other Apples products except the Mac.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body">
                                    <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseExample5" aria-controls="collapseExample5">More Details</a>
                                    <br />
                                    <a className="btn btn-outline-secondary" data-bs-toggle="collapse" href="#collapseExample5" aria-controls="collapseExample5">View Device</a>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 ">
                            <div className="collapse" id="collapseExample5" style={{padding:"20px"}}>
                                <div className="card card-body">
                                    <h5>Intro:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Experience:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>

                                    <h5>Limitations:</h5>
                                    <p>jasdasdkbskbdkjabs</p>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </main>
    )
}

export default GettingStartedPage