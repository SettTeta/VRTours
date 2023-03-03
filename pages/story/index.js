import { useEffect, useRef, useState } from "react";
import { Scene, Entity } from "aframe-react";
import Head from 'next/head'


export default function ImmersionZone() {
    const [fr, setFr] = useState(false);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

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
            videoRef.current.play();
            setPlaying(true);
        }
        console.log("playing")
    };

    const handlePause = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }

        console.log("pausing")
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

                        <button onClick={() => document.querySelector('Scene').requestFullscreen()} style={{ paddingTop: "70px" }}></button>

                        <Scene>
                            <a-assets>
                                <video
                                    id="intro"
                                    src="intro.mp4"
                                    autoPlay
                                    ref={videoRef}
                                    playsInline
                                ></video>
                            </a-assets>

                            <a-camera>
                                <a-cursor ></a-cursor>
                            </a-camera>

                            <a-videosphere

                                src="#intro"
                                rotation="0 -90 0"
                                // onClick={handlePlay}
                                autoPlay
                                playsInline
                            ></a-videosphere>
                            {/* {playing && ( */}

                            <Entity
                                position="-2 1 -3"
                                pause-icon="size: 1; color: #ffffff"
                                // onClick={handlePause}
                                events={{ click: handlePause, touchStart: handlePause }}
                            ></Entity>

                            <Entity
                                position="2 1 -3"
                                play-icon="size: 1; color: #ffffff"
                                // onClick={handlePlay}
                                events={{ click: handlePlay, touchStart: handlePlay }}
                            ></Entity>
                            {/* )} */}
                        </Scene>
                    </div>

                )}
            </div>
        </>
    );
}
