"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoPlayer({ project }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      {project.id ? (
        playing ? (
          <iframe
            title={project.title || "youtube-player"}
            src={`https://www.youtube.com/embed/${project.id}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0 object-cover"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-9 w-9 text-black"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )
      ) : (
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}