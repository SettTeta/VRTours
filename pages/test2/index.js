import { useEffect, useRef, useState } from "react";
import { Scene, Entity } from "aframe-react";
import Head from 'next/head'
import Script from "next/script";


export default function ImmersionZone() {
    const [fr, setFr] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);

    const videoOrderList = ["#intro", "#sala", "#end"];

    const [currentVideo, setCurrentVideo] = useState(videoOrderList[videoIndex]);



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
        }
    };

    const handlePause = () => {
        if (playing) {
            const video = document.querySelector(currentVideo);
            video.pause();
            setPlaying(false);
        }
    };

    const handleVideoChange = () => {
        const i = videoIndex + 1;
        if (i >= videoOrderList.length) {
            setVideoIndex(0);
        } else {
            setVideoIndex(i)
        }

        // Pause the currently playing video (if any)
        if (playing) {
            const currentVideoRef = document.querySelector(currentVideo);
            currentVideoRef.pause();
            setPlaying(false);
        }

        // Set the new video source and reset the playing state
        setCurrentVideo(videoOrderList[videoIndex]);
        setPlaying(false);
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

                        {/* for layout */}
                        <Script src="https://unpkg.com/aframe-layout-component@4.x.x/dist/aframe-layout-component.min.js"></Script>

                        <button onClick={() => document.querySelector('Scene').requestFullscreen()} style={{ paddingTop: "70px" }}></button>

                        <Scene>
                            <a-assets>
                                <audio
                                    id="click-sound"
                                    src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
                                ></audio>

                                <video
                                    id="intro"
                                    src="intro.mp4"
                                    loop
                                    autoPlay
                                    playsInline
                                ></video>
                                <video
                                    id="sala"
                                    src="sala-jat.mp4"
                                    loop
                                    autoPlay
                                    playsInline
                                ></video>
                                <video
                                    id="end"
                                    src="end.mp4"
                                    loop
                                    autoPlay
                                    playsInline
                                ></video>
                            </a-assets>

                            <a-camera>
                                <a-cursor
                                    id="cursor"
                                    animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
                                    // animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
                                    animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"></a-cursor>
                            </a-camera>

                            <a-videosphere
                                id="videosphere"
                                src={currentVideo}
                                rotation="0 -90 0"
                                // onClick={handlePlay}
                                playsInline
                            ></a-videosphere>


                            <Entity id="gui" layout="type: line; margin: 1" position="0 1 -1">
                                {playing && (
                                <Entity
                                    // position="0 1 -1"
                                    // rotation="-15 20 0"
                                    pause-icon="size: 0.3; color: #ffffff"
                                    // onClick={handlePause}
                                    events={{ click: handlePause, touchStart: handlePause }}
                                ></Entity>
                              )} 

                                 {!playing && ( 
                                <Entity
                                    // position="0 1 -1"
                                    // rotation="-15 -20 0"
                                    play-icon="size: 1; color: #ffffff"
                                    // onClick={handlePlay}
                                    events={{ click: handlePlay, touchStart: handlePlay }}
                                    sound="on: click; src: #click-sound"
                                ></Entity>
                              )} 

                                <Entity
                                    // position="0.5 1 -1"
                                    events={{ click: handleVideoChange }}
                                    play-icon="size: 1; color: white"
                                    sound="on: click; src: #click-sound"
                                />
                                <Entity
                                    // position="0.7 1 -1"
                                    events={{ click: handleVideoChange }}
                                    play-icon="size: 1; color: white"
                                    sound="on: click; src: #click-sound"
                                />

                            </Entity>

                        </Scene>
                    </div>

                )}
            </div>
        </>
    );
}
