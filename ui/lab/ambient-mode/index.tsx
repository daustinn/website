'use client'

import React from 'react'

interface AmbientModeVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  sectionClass?: string
  canvasClass?: string
}

/**
 * AmbientModeVideo component.
 * This component creates a video player with a canvas overlay for ambient mode.
 * @param {...AmbientModeProps} rest - Video element props.
 * @returns JSX.Element.
 */
export const AmbientModeVideo: React.FC<AmbientModeVideoProps> = ({
  sectionClass,
  canvasClass,
  ...rest
}) => {
  // Refs for video and canvas elements
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  let step: number | undefined
  let frameCount = 0 // Counter for controlling drawing frequency

  React.useEffect(() => {
    // Function to draw video frame on canvas
    const draw = () => {
      const video = videoRef.current
      const canvas = canvasRef.current
      if (!video || !canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    }

    // Function to continuously draw video frames at a slower rate
    const drawLoop = () => {
      // Control drawing frequency
      if (frameCount % 2 === 0) {
        // Adjust this value to change the speed
        draw()
      }
      frameCount++
      step = window.requestAnimationFrame(drawLoop)
    }

    // Function to pause drawing loop
    const drawPause = () => {
      if (step) window.cancelAnimationFrame(step)
      step = undefined
    }

    // Initialize event listeners for video element
    const init = () => {
      const video = videoRef.current
      if (!video) return
      video.addEventListener('loadeddata', draw, false)
      video.addEventListener('seeked', draw, false)
      video.addEventListener('play', drawLoop, false)
      video.addEventListener('pause', drawPause, false)
      video.addEventListener('ended', drawPause, false)
      // Start drawing loop if autoplay is enabled
      if (rest.autoPlay) drawLoop()
    }

    // Clean up event listeners
    const cleanup = () => {
      const video = videoRef.current
      if (!video) return
      video.removeEventListener('loadeddata', draw)
      video.removeEventListener('seeked', draw)
      video.removeEventListener('play', drawLoop)
      video.removeEventListener('pause', drawPause)
      video.removeEventListener('ended', drawPause)
    }

    // Initialize listeners when component mounts
    init()

    // Clean up listeners when component unmounts
    return cleanup
  }, [rest.autoPlay]) // Listen for changes in autoplay prop

  return (
    <section className={`relative ${sectionClass}`}>
      {/* Video element */}
      <video
        controls
        muted
        className="rounded-3xl w-full z-[1] relative h-full object-cover"
        ref={videoRef}
        loop
        {...rest}
      />
      {/* Canvas element for ambient mode overlay */}
      <canvas
        className={`absolute pointer-events-none select-none w-full h-full z-[0] inset-0 scale-105 blur-[50px] hidden dark:block opacity-70, ${canvasClass}`}
        ref={canvasRef}
      />
    </section>
  )
}
