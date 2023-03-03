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

                        {/* <Script src="https://rawgit.com/rdub80/aframe-gui/master/dist/aframe-gui.min.js" /> */}

                        <button onClick={() => document.querySelector('Scene').requestFullscreen()} style={{ paddingTop: "70px" }}></button>

                        <Scene>
                            <a-assets>
                                <video
                                    id="intro"
                                    src="intro.mp4"
                                    loop
                                    playsInline
                                ></video>
                                <video
                                    id="sala"
                                    src="sala-jat.mp4"
                                    loop
                                    playsInline
                                ></video>
                                <video
                                    id="end"
                                    src="end.mp4"
                                    loop
                                    playsInline
                                ></video>
                            </a-assets>

                            <a-camera>
                                <a-cursor ></a-cursor>
                            </a-camera>

                            <a-videosphere
                                id="videosphere"
                                src={currentVideo}
                                rotation="0 -90 0"
                                // onClick={handlePlay}
                                autoPlay
                                playsInline
                            ></a-videosphere>

                            {playing && (
                                <Entity
                                    position="0 1 -1"
                                    // rotation="-15 20 0"
                                    pause-icon="size: 0.3; color: #ffffff"
                                    // onClick={handlePause}
                                    events={{ click: handlePause, touchStart: handlePause }}
                                ></Entity>
                            )}

                            {!playing && (
                                <Entity
                                    position="0 1 -1"
                                    // rotation="-15 -20 0"
                                    play-icon="size: 1; color: #ffffff"
                                    // onClick={handlePlay}
                                    events={{ click: handlePlay, touchStart: handlePlay }}
                                ></Entity>
                            )}

                            <Entity
                                position="0.5 1 -1"
                                events={{ click: handleVideoChange }}
                                play-icon="size: 1; color: white"
                                />
                            <Entity
                                position="0.7 1 -1"
                                events={{ click: handleVideoChange }}
                                play-icon="size: 1; color: white"
                                />


                        </Scene>
                    </div>

                )}
            </div>
        </>
    );
}
