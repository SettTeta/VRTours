import { useEffect, useState } from "react";
import { Scene, Entity } from "aframe-react";
import Head from 'next/head'
import Script from "next/script";


export default function ImmersionZone() {
    const [fr, setFr] = useState(false);
    const [playing, setPlaying] = useState(false);

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
            setPlaying(true);
        }
        console.log("playing")
    };

    const handlePause = () => {
        if (playing) {
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
                                src={playing ? "#sala" : "#intro"}
                                rotation="0 -90 0"
                                autoPlay
                                playsInline
                            ></a-videosphere>

                            {playing && (
                                <Entity
                                    position="-0.3 1 -1"
                                    pause-icon="size: 0.3; color: #ffffff"
                                    events={{ click: handlePause, touchStart: handlePause }}
                                ></Entity>
                            )}

                            {!playing && (
                                <Entity
                                    position="0.3 1 -1"
                                    play-icon="size: 1; color: #ffffff"
                                    events={{ click: handlePlay, touchStart: handlePlay }}
                                ></Entity>
                            )}

                        </Scene>
                    </div>

                )}
            </div>
        </>
    );
}
