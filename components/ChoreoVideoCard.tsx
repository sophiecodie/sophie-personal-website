"use client";

import { useRef, useState } from "react";
import { ChoreoVideo } from "@/data/dance";
import PixelStar from "./PixelStar";

/**
 * A local class video. Only the poster loads up front (preload="none");
 * the video itself downloads when the play button is pressed, and native
 * controls take over from there. Starting one video pauses any other.
 */
export default function ChoreoVideoCard({ video, number }: { video: ChoreoVideo; number: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const portrait = video.height > video.width;

  function play() {
    setStarted(true);
    ref.current?.play();
  }

  return (
    <figure className={`group w-full ${portrait ? "max-w-[280px]" : "max-w-[420px]"}`}>
      <figcaption className="mb-3">
        <span className="flex items-center gap-3">
          <span className="text-sm text-brand-blue/60">{number}</span>
          <span className="text-lg font-semibold uppercase tracking-wide">{video.label}</span>
          <PixelStar
            size="h-1 w-1"
            className="transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125"
          />
        </span>
        <span className="mt-1 block text-sm text-brand-blue/70">choreo by {video.choreographer}</span>
      </figcaption>

      {/* lifts on hover only before playing, so the controls stay put while you use them */}
      <div
        className={`relative overflow-hidden border-2 border-navy bg-navy shadow-[4px_4px_0_0_#12163A] transition-[transform,border-color] duration-300 ease-out group-hover:border-brand-blue ${
          started ? "" : "group-hover:-translate-y-1.5"
        }`}
      >
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          width={video.width}
          height={video.height}
          preload="none"
          playsInline
          controls={started}
          // hide the Download option in the player menu and the right-click "Save video as"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          onPlay={(e) => {
            setStarted(true);
            document.querySelectorAll("video").forEach((v) => v !== e.currentTarget && v.pause());
          }}
          className="block h-auto w-full"
        />
        {!started && (
          <button
            type="button"
            onClick={play}
            aria-label={`Play ${video.label}, choreography by ${video.choreographer}`}
            className="absolute inset-0 flex items-end justify-start p-3"
          >
            <span className="flex items-center gap-2 border-2 border-navy bg-brand-yellow px-3 py-1 text-sm uppercase tracking-wider text-navy">
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">▶</span>
              play
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}
