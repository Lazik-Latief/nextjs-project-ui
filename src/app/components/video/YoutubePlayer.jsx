"use client"; 

import { useEffect, useRef, useState } from "react";
import { loadYouTubeSDK } from "@/lib/youtubeSdk";

export default function YoutubePlayer({ videoId, onPlayStateChange }) {
  // store YouTube player instance
  const playerRef = useRef(null);

  // reference to the div where iframe will load
  const containerRef = useRef(null);

  // to check when player is ready
  const [isReady, setIsReady] = useState(false);

  // for handling errors (not used much for now)
  const [error, setError] = useState(null);

  // store latest callback safely (prevents re-render issues)
  const callbackRef = useRef(onPlayStateChange);

  // update callback if parent changes it
  useEffect(() => {
    callbackRef.current = onPlayStateChange;
  }, [onPlayStateChange]);

  useEffect(() => {
    let player;

    async function initPlayer() {
      // load YouTube Iframe SDK
      const YT = await loadYouTubeSDK();

      if (!containerRef.current) return;

      // prevent creating duplicate player
      if (playerRef.current) return;

      // create new YouTube player
      player = new YT.Player(containerRef.current, {
        videoId,
        events: {
          // when player is ready
          onReady: () => {
            setIsReady(true);
          },

          // when play / pause happens
          onStateChange: (event) => {
            if (!playerRef.current) return;

            const currentTime = playerRef.current.getCurrentTime();

            // check if playing or paused
            if (
              event.data === YT.PlayerState.PLAYING ||
              event.data === YT.PlayerState.PAUSED
            ) {
              // send data to parent component
              if (typeof callbackRef.current === "function") {
                callbackRef.current({
                  eventType:
                    event.data === YT.PlayerState.PLAYING ? "play" : "pause",
                  currentTime,
                  videoId,
                  timestamp: new Date().toISOString(),
                });
              }
            }
          },
        },
      });

      // save player instance
      playerRef.current = player;
    }

    initPlayer();

    // cleanup when component unmounts or videoId changes
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId]); // re-run if videoId changes

  return (
    <div className="w-full max-w-5xl mx-auto group">
      <div className="relative rounded-2xl overflow-hidden p-[2px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-all duration-500">
        <div className="relative w-full aspect-video bg-neutral-950 rounded-2xl overflow-hidden">
          
          {/* show loading text until player is ready */}
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-yellow-400 z-10">
              Loading Player...
            </div>
          )}

          {/* show error if exists */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-red-500">
              {error}
            </div>
          )}

          {/* this div is where YouTube iframe loads */}
          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}