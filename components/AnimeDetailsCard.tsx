import React from 'react';
import CarouselComponent from './CarouselComponent';
import { CarouselItem } from './ui/carousel';
import Image from 'next/image';
import VideoPlayer from './VideoPlayer';

const BASE_URL = 'https://shikimori.one';

// Define the type for Anime details based on the expected structure
interface AnimeDetailsProps {
  details: {
    name: string;
    score: string;
    rating: string;
    status: string;
    episodes: number;
    aired_on: string;
    kind?: string;
    genres: { name: string }[];
    screenshots: { original: string }[];
    videos: { player_url: string }[];
  };
}

const AnimeDetailsCard: React.FC<AnimeDetailsProps> = ({ details }) => {
  return (
    <div className='bg-gray-900 text-white flex flex-col w-full md:w-[80%] p-10 md:p-20 rounded-lg shadow-lg'>
      <h1 className='font-bold text-2xl md:text-3xl mb-4 text-teal-400 text-center md:text-left'>
        {details.name}
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <span className='text-lg'>
          <span className='font-semibold text-gray-300'>Score:</span>
          <span className='text-yellow-400 ml-2'>{details.score}</span>
        </span>
        <span className='text-lg'>
          <span className='font-semibold text-gray-300'>Rating:</span>
          <span className='text-gray-400 ml-2'>{details.rating}</span>
        </span>
        <span className='text-lg'>
          <span className='font-semibold text-gray-300'>Status:</span>
          <span className='text-gray-400 ml-2'>{details.status}</span>
        </span>
        <span className='text-lg'>
          <span className='font-semibold text-gray-300'>Episodes:</span>
          <span className='text-gray-400 ml-2'>{details.episodes}</span>
        </span>
        <span className='text-lg'>
          <span className='font-semibold text-gray-300'>Aired:</span>
          <span className='text-gray-400 ml-2'>{details.aired_on}</span>
        </span>
        <span className='text-lg'>
          <span className='font-semibold text-gray-300'>Type:</span>
          <span className='text-gray-400 ml-2'>
            {details.kind?.toUpperCase()}
          </span>
        </span>
      </div>

      <div className='text-lg mb-6'>
        <span className='font-semibold text-gray-300'>Genres:</span>
        <span className='text-gray-400 ml-2'>
          {details.genres.map((item) => item.name).join(', ')}
        </span>
      </div>

      <div className='flex flex-col items-center justify-between w-full gap-6'>
        <div className='w-full p-5'>
          <CarouselComponent>
            {details.screenshots.map(
              (item: { original: string }, index: number) => (
                <CarouselItem key={index} className='flex justify-center'>
                  <Image
                    className='rounded-md shadow-md'
                    src={`${BASE_URL}${item.original}`}
                    height={300}
                    width={600}
                    alt={`Screenshot ${index}`}
                  />
                </CarouselItem>
              )
            )}
          </CarouselComponent>
        </div>

        {details.videos.length > 0 && (
          <div className='w-full h-[100%] relative pt-[56.25%]'>
            <VideoPlayer
              height={'100%'}
              width={'100%'}
              volume={0.2}
              url={details.videos[0].player_url}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetailsCard;
