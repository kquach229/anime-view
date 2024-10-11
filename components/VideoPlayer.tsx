'use client';
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({
  url,
  height,
  width,
}: {
  url: string;
  height: number | string;
  width: number | string;
  volume: number;
}) => {
  return (
    <ReactPlayer
      style={{ position: 'absolute', top: '0', left: '0' }}
      pip
      controls
      url={url}
      height={height}
      width={width}
      volume={0.05}
    />
  );
};

export default VideoPlayer;
