import { useEffect, useRef, useState } from "react";
import { Scene, Entity } from "aframe-react";


export default function ImmersionZone() {
    const [fr, setFr] = useState(false);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const loadAframe = async () => {
            const AFRAME = await import("aframe");
            const pauseIcon = await import("components/pauseIcon");
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
            <div>
                {fr && (
                    <Scene>
                        <a-assets>
                            <video
                                id="intro"
                                src="intro.mp4"
                                autoPlay
                                ref={videoRef}
                            ></video>
                        </a-assets>

                        <a-camera>
                            <a-cursor ></a-cursor>
                        </a-camera>

                        <a-videosphere
                            src="#intro"
                            rotation="0 -90 0"
                            onClick={handlePlay}
                            autoPlay
                        ></a-videosphere>
                        {/* {playing && ( */}

                        <Entity
                            position="0 1 -3"
                            pause-icon="size: 2; color: #ffffff"
                            onClick={handlePause}
                            events={{ click: handlePause }}
                            pauseIcon={{ size: 0.1, color: '#ffffff' }}
                        ></Entity>
                        {/* )} */}
                    </Scene>
                )}
            </div>
        </>
    );
}
