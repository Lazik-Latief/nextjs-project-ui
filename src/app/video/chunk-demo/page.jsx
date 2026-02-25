"use client"; 

import { useState } from "react"; 
import ChunkVideoPlayer from "@/app/components/video/ChunkVideoPlayer";  

export default function ChunkDemoPage() {
  const [lastEvent, setLastEvent] = useState(null); // Store latest video event data

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-white px-6 py-16">
      
       
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">
          Chunk Streaming Video Demo
        </h1>
        <p className="text-gray-400 mt-2">
          HTTP Range Progressive Streaming Player
        </p>
      </div>

       
      <ChunkVideoPlayer
        videoId="sample-video" // Pass video ID
        onPlayStateChange={(data) => {
          setLastEvent(data); // Update state when video event happens
        }}
      />

       
      <div className="mt-14 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-neutral-900/80 border border-yellow-500/20 p-8">
          <h2 className="text-2xl text-yellow-400 mb-6">
            Playback Activity
          </h2>

          
          {lastEvent ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              
              
              <div>
                <p className="text-gray-500 text-sm">Event Type</p>
                <p className="text-yellow-400 font-semibold">
                  {lastEvent.eventType}
                </p>
              </div>

              
              <div>
                <p className="text-gray-500 text-sm">Current Time</p>
                <p>{lastEvent.currentTime?.toFixed(2)} seconds</p>
              </div>

            
              <div>
                <p className="text-gray-500 text-sm">Video ID</p>
                <p>{lastEvent.videoId}</p>
              </div>

            
              <div>
                <p className="text-gray-500 text-sm">Timestamp</p>
                <p className="text-sm">{lastEvent.timestamp}</p>
              </div>
            </div>
          ) : (
             
            <p className="text-gray-500">
              Play or pause video to see tracking data.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}