"use client"; 

import { useState } from "react";
import YoutubePlayer from "@/app/components/video/YoutubePlayer";

export default function YoutubeDemoPage() {
  // store last event coming from YoutubePlayer (play / pause etc.)
  const [lastEvent, setLastEvent] = useState(null);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-white px-6 py-16">
      
      {/* Page Heading Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-wide text-yellow-400">
          LMS YouTube Player Demo
        </h1>
        <p className="text-gray-400 mt-2">
          Premium Video Tracking Component
        </p>
      </div>

      {/* YouTube Player Component */}
      <YoutubePlayer
        // you can change videoId to load different video
        videoId="w7ejDZ8SWv8"

        // this function runs when play/pause happens
        onPlayStateChange={(data) => {
          // store event data in state
          setLastEvent(data);
        }}
      />

      {/* Event Data Panel */}
      <div className="mt-14 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-yellow-500/20 shadow-xl p-8 transition-all duration-500 hover:border-yellow-400/40">
          
          {/* Panel Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Playback Activity
            </h2>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Real-time
            </span>
          </div>

          {/* If event exists, show data */}
          {lastEvent ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

              {/* Event Type */}
              <div className="bg-black/60 p-5 rounded-xl border border-yellow-400/10">
                <p className="text-gray-500 text-sm">Event Type</p>
                <p className="text-yellow-400 text-lg font-semibold mt-1">
                  {lastEvent.eventType.toUpperCase()}
                </p>
              </div>

              {/* Current Time */}
              <div className="bg-black/60 p-5 rounded-xl border border-yellow-400/10">
                <p className="text-gray-500 text-sm">Current Time</p>
                <p className="text-white text-lg font-semibold mt-1">
                  {lastEvent.currentTime.toFixed(2)} seconds
                </p>
              </div>

              {/* Video ID */}
              <div className="bg-black/60 p-5 rounded-xl border border-yellow-400/10">
                <p className="text-gray-500 text-sm">Video ID</p>
                <p className="text-white mt-1 break-all">
                  {lastEvent.videoId}
                </p>
              </div>

              {/* Timestamp (when event happened) */}
              <div className="bg-black/60 p-5 rounded-xl border border-yellow-400/10">
                <p className="text-gray-500 text-sm">Timestamp</p>
                <p className="text-white mt-1 text-sm">
                  {lastEvent.timestamp}
                </p>
              </div>
            </div>
          ) : (
            // If no event yet
            <div className="text-center py-10 text-gray-500">
              Start playing or pause the video to see tracking data.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}