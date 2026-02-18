"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Maximize, X } from "lucide-react";
import Image from "next/image";

interface LoomPlayerAdvancedProps {
  videoId: string;
  title?: string;
  thumbnailUrl?: string;
  autoplay?: boolean;
  hideOwner?: boolean;
  hideShare?: boolean;
  hideTitle?: boolean;
}

export default function LoomPlayerAdvanced({
  videoId,
  title = "Watch the video",
  thumbnailUrl = '/images/thumbnail.png',
  autoplay = false,
  hideOwner = true,
  hideShare = true,
  hideTitle = true,
}: LoomPlayerAdvancedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Loom thumbnail URLs
  const staticThumbnail =
    thumbnailUrl || `https://cdn.loom.com/sessions/thumbnails/${videoId}-00001.jpg`;

  // Build embed URL with options
  const buildEmbedUrl = (autoplayEnabled: boolean = false) => {
    const params = new URLSearchParams({
      autoplay: autoplayEnabled ? "1" : "0",
      hide_owner: hideOwner ? "true" : "false",
      hide_share: hideShare ? "true" : "false",
      hide_title: hideTitle ? "true" : "false",
      hideEmbedTopBar: "true",
      t: "0",
    });
    return `https://www.loom.com/embed/${videoId}?${params.toString()}`;
  };

  // Auto-hide controls
  const resetControlsTimeout = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(true);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handlePlay = () => {
    setIsPlaying(true);
    resetControlsTimeout();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Player */}
      <div
        className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-video bg-grey-900 ring-1 ring-grey-200/50 group"
        onMouseMove={resetControlsTimeout}
        onMouseEnter={() => setShowControls(true)}
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <Image
              src={staticThumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              onError={(e) => {
                // Fallback if thumbnail fails to load
                (e.target as HTMLImageElement).src = "/images/video-placeholder.jpg";
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

            {/* Play Button */}
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
              aria-label="Play video"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-electric-500/20 animate-ping" />
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-electric-500 text-primary-foreground shadow-2xl transition-all duration-300 ease-out-expo hover:scale-110 hover:bg-electric-400 active:scale-95">
                  <Play
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm md:text-base font-medium text-white/90 line-clamp-2">
                {title}
              </p>
            </div>

            {/* Loom Badge */}
            <div className="absolute top-4 right-4 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z"
                  fill="#625DF5"
                />
                <path
                  d="M22.667 16L12 22.667V9.333L22.667 16z"
                  fill="white"
                />
              </svg>
              <span className="text-white text-xs font-medium">Loom</span>
            </div>
          </>
        ) : (
          <>
            {/* Loom Embed */}
            <iframe
              src={buildEmbedUrl(true)}
              title={title}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute inset-0 w-full h-full"
            />

            {/* Custom Controls Overlay */}
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-auto">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90 truncate pr-4">
                    {title}
                  </p>
                  <button
                    onClick={openModal}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Open in fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={buildEmbedUrl(true)}
              title={title}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}