"use client"
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Button } from '../ui/button';

interface HlsVideoProps {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
}

const HlsVideoMoviePlayer: React.FC<HlsVideoProps> = ({
  src,
  autoPlay = false,
  controls = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [qualityLevels, setQualityLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(-1);

  useEffect(() => {
    const video = videoRef.current;
    let hls: Hls | null = null;

    if (video) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          const levels = hls.levels.map((level, index) => ({
            index,
            resolution: `${level.width}x${level.height}`,
            bitrate: level.bitrate,
          }));
          setQualityLevels(levels);
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    }

    const skipSegments = [
      { start: 597, duration: 30 },
      { start: 4854, duration: 30 },
    ];

    const handleTimeUpdate = () => {
      if (video) {
        skipSegments.forEach(({ start, duration }) => {
          if (Math.floor(video.currentTime) === start) {
            video.currentTime += duration;
          }
        });
      }
    };

    video?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video?.removeEventListener('timeupdate', handleTimeUpdate);
      hls?.destroy();
    };
  }, [src]);

  const handleQualityChange = (levelIndex: number) => {
    if (videoRef.current) {
      Hls.DefaultConfig.autoStartLoad = false;
    }
    setCurrentLevel(levelIndex);
  };

  return (
    <div className='video-container'>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        controls={controls}
        className='w-full rounded-lg aspect-video'
      />
      <div className='flex items-center gap-x-3 mt-5'>
        <Button className='px-2 py-1.5 bg-blue-500 hover:bg-blue-600' onClick={() => videoRef.current && (videoRef.current.currentTime -= 10)}>- 10s</Button>
        <Button className='px-2 py-1.5 bg-blue-500 hover:bg-blue-600' onClick={() => videoRef.current && (videoRef.current.currentTime += 10)}>+ 10s</Button>
        <select
          value={currentLevel}
          onChange={(e) => handleQualityChange(Number(e.target.value))}
          className="px-2 py-1 border rounded"
        >
          <option value={-1}>Auto</option>
          {qualityLevels.map((level) => (
            <option key={level.index} value={level.index}>
              {level.resolution} ({Math.round(level.bitrate / 1000)} kbps)
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HlsVideoMoviePlayer;
