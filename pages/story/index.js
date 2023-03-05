import { useEffect, useRef, useState } from "react";
import { Scene, Entity } from "aframe-react";
import Head from 'next/head'
import Script from "next/script";


export default function ImmersionZone() {
    const [fr, setFr] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [videoPlayer, setVideoPlayer] = useState(true);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const [videoOrderList, setVideoOrderList] = useState(["intro", "sala", "end"]);

    const [currentVideo, setCurrentVideo] = useState(`#${videoOrderList[currentVideoIndex]}`);



    useEffect(() => {
        const loadAframe = async () => {
            const AFRAME = await import("aframe");
            const pauseIcon = await import("components/pauseIcon");
            const playIcon = await import("components/playIcon");
            console.log(AFRAME);
            setFr(true);
        };
        loadAframe();
    }, []);

    const handlePlay = () => {
        if (!playing) {
            const video = document.querySelector(currentVideo);
            video.play();
            setPlaying(true);
            setVideoPlayer(false)
        }
    };

    const handlePause = () => {
        if (playing) {
            const video = document.querySelector(currentVideo);
            video.pause();
            setPlaying(false);
        }
    };

    const handleVideoNext = () => {
        const nextIndex = (currentVideoIndex + 1) % videoOrderList.length;

        // Pause the currently playing video (if any)
        if (playing) {
            const currentVideoRef = document.querySelector(currentVideo);
            currentVideoRef.pause();
            setPlaying(false);
        }

        // Set the new video source and reset the playing state
        setCurrentVideoIndex(nextIndex);
        setCurrentVideo(`#${videoOrderList[nextIndex]}`);
        setPlaying(false);
    };


    const handleHide = () => {
        if (videoPlayer === false) {
            setVideoPlayer(true)
        } else {
            setVideoPlayer(false)
        }
    }

    const handleVideoEnd = () => {
        setPlaying(false);
        const nextVideoIndex = (currentVideoIndex + 1) % videoOrderList.length;
        setCurrentVideoIndex(nextVideoIndex);
        setCurrentVideo(`#${videoOrderList[nextVideoIndex]}`);
        setVideoPlayer(true)
    };

    console.log("playing:", playing);

    return (
        <>
            <Head>
                <title>Woop</title>
            </Head>


            <div>
                {fr && (

                    <div>
                        {/* aframe-gui-component */}
                        <Script src="https://rawgit.com/rdub80/aframe-gui/master/dist/aframe-gui.min.js" />


                        <button onClick={() => document.querySelector('.Scene').requestFullscreen()} style={{ paddingTop: "70px" }}>Request Fullscreen</button>

                        <Scene>
                            <a-assets>
                                <audio
                                    id="click-sound"
                                    src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
                                ></audio>

                                {videoOrderList.map((videoSrc, index) => (
                                    <video
                                        id={videoSrc}
                                        key={videoSrc}
                                        src={`${videoSrc}.mp4`}
                                        onEnded={handleVideoEnd}
                                        playsInline
                                    />
                                ))}

                            </a-assets>

                            <a-camera>
                                <a-cursor
                                    id="cursor"
                                    animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
                                    // animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
                                    animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing">
                                </a-cursor>

                                <a-gui-cursor id="cursor"
                                    raycaster="objects: [HTMLElement]"
                                    fuse="true" fuse-timeout="2000"
                                    color="#ECEFF1"
                                    hover-color="#CFD8DC"
                                    active-color="#607D8B"
                                    design="ring"
                                >
                                </a-gui-cursor>
                            </a-camera>


                            <a-videosphere
                                id="videosphere"
                                src={currentVideo}
                                rotation="0 -90 0"
                                // autoPlay
                                playsInline
                            ></a-videosphere>

                            {!videoPlayer && (<Entity id="show" position="0 -10 0" events={{ click: handleHide, touchStart: handleHide }}
                            >
                                <Entity 
                                    rotation="90 0 0"
                                    geometry="primitive: torus; radius: 8; radiusTubular: 0.4"
                                    material="color: #ffffff; opacity: 0.8"
                                />
                                <Entity
                                    geometry="primitive: cylinder; radius: 7"
                                    material="color: #ffffff; opacity: 0.5"
                                />

                            </Entity>)}

                            {videoPlayer && (<Entity id="videoPlayer"
                                position="0 1 -1"
                                rotation="-15 0 0"
                                geometry="primitive: plane; width: 2; height: 0.8"
                                material="color: #ffffff; opacity: 0.5"
                            >
                                <Entity id="title"
                                    position="0 0.3 0"
                                    text="value: Video Player; align: center; color: #000000"
                                />

                                <Entity id="hide"
                                    position="0.8 0.3 0"
                                    geometry="primitive: box; width: 0.2; height: 0.05; depth:0.1;"
                                    material="color: #ffffff"
                                    events={{ click: handleHide, touchStart: handleHide }}
                                />

                                {playing && (
                                    <Entity id="pause"
                                        // position="0 1 -1"
                                        pause-icon="size: 0.3; color: #ffffff"
                                        events={{ click: handlePause, touchStart: handlePause }}
                                    ></Entity>
                                )}

                                {!playing && (
                                    <Entity id="play"
                                        // position="0 1 -1"
                                        play-icon="size: 1; color: #ffffff"
                                        events={{ click: handlePlay, touchStart: handlePlay }}
                                        sound="on: click; src: #click-sound"
                                    ></Entity>
                                )}

                                <Entity id="next" events={{ click: handleVideoNext }} sound="on: click; src: #click-sound">
                                    <Entity
                                        position="0.5 0 0"
                                        play-icon="size: 1; color: white"
                                    />
                                    <Entity
                                        position="0.7 0 0"
                                        play-icon="size: 1; color: white"
                                    />
                                </Entity>

                            </Entity>
                            )}

                        </Scene>
                    </div>

                )}
            </div>
        </>
    );
}
