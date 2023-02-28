import Header from 'components/header'
import * as React from 'react'
import VideoCard from 'components/Card.js'
import Head from 'next/head'
import { useState } from "react";
import Link from 'next/link'

// const url = process.env.API_URL;
// const url = "https://sp-2-eta.vercel.app"
// const url = "http://localhost:3000"

export default function BrowsePage({ videos }) {

  const [videosToShow, setVideosToShow] = useState(6);
  const [showOnlyTrue, setShowOnlyTrue] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");


  function loadMoreVideos() {
    setVideosToShow(videosToShow + 3);
  }

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

  function search(){
    setSearchValue("");
    setVideosToShow(6);
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
      .filter(video => {
        return video.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      .slice(0, videosToShow);
    return videosToDisplay.map(renderVideoCard);
  }

  function handleShowAllClick() {
    setShowOnlyTrue(false);
    setActiveTab("all");
  }

  function handleShowOnlyTrueClick() {
    setShowOnlyTrue(true);
    setActiveTab("true");
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

      <div className="input-group rounded" style={{ padding: "0 15% 0 15%" }}>
        <input type="search" className="form-control rounded" placeholder="Thailand" aria-label="Search" aria-describedby="search-addon" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search" onClick={search}>Clear</i>
        </span>
      </div>

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "all" ? "active" : ""}`} href="" onClick={handleShowAllClick} >360 VR Tour</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeTab === "true" ? "active" : ""}`} href="" onClick={handleShowOnlyTrueClick} >Interactive Tour</Link>
          </li>
        </ul>
      </div>


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
  const res = await fetch(`https://sp-2-git-working-settteta.vercel.app/api/browse/videos/`)
  // const res = await fetch(`http://localhost:3000/api/browse/videos/`)
  const videos = await res.json()
  return { props: { videos } }
}

