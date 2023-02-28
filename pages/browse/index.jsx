import Header from 'components/header'
import * as React from 'react'
import VideoCard from 'components/Card.js'
import Head from 'next/head'
import { useState } from "react";
import Link from 'next/link'

const url = process.env.API_URL;
// const url = "https://sp-2-eta.vercel.app"
// const url = "http://localhost:3000"

export default function BrowsePage({ videos }) {

  const [videosToShow, setVideosToShow] = useState(6);
  const [showOnlyTrue, setShowOnlyTrue] = useState(false);

  function loadMoreVideos() {
    setVideosToShow(videosToShow + 3);
  }

  console.log("url",url)


  function renderVideoCard(video) {
    return (
      <VideoCard
        key={video._id}
        title={video.title}
        link={video.thumbnail}
        desc={video.desc}
        onView={video._id}
        duration={video.duration}
        location={video.location}
        dOU={video.dateOfUpload}
      />
    );
  }



  function renderVideoCards() {
    const videosToDisplay = videos
      .filter(video => {
        if (showOnlyTrue) {
          return video.type === true;
        } else {
          return video.type === false;
        }
      })
      .slice(0, videosToShow);
    return videosToDisplay.map(renderVideoCard);
  }

  function handleShowAllClick() {
    setShowOnlyTrue(false);
  }


  function handleShowOnlyTrueClick() {
    setShowOnlyTrue(true);
  }

  if (!videos) return (
    <div>
        <p>Videos not found</p>
        <Link href="/browse">Back</Link>
    </div>
);

  return (
    <main role="main">
      <div>
        <Head>
          <title>VR Tours</title>
          <meta name="description" content="A VR Video Hosting platform" />
        </Head>
      </div>

      <Header />

      <section className="jumbotron text-center">
        <div className="container">
          <br></br>
          <h1 className="jumbotron-heading">VR Videos just for you</h1>
          <p className="lead text-muted">
            Browse our collection of VR videos and view them with your full entertainment
          </p>
        </div>
      </section>

      <br />

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" href="" onClick={handleShowAllClick}>360 VR Tour</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="" onClick={handleShowOnlyTrueClick}>Interactive Tour</Link>
        </li>
      </ul>
      
      {/* search bar = check search input by mapping it to the list of videos */}

      <div className="album py-5 bg-light">
        <div className="container-xxl content-row">
          <div className="row">
            {renderVideoCards()}
            {videosToShow < videos.length && (
              <button className="btn btn-secondary" onClick={loadMoreVideos}>Load more</button>
            )}
          </div>
        </div>
      </div>


    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://sp-2-eta.vercel.app/api/browse/videos/`)
  const videos = await res.json()
  return { props: { videos } }
}

