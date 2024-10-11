import Image from 'next/image';
import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import AnimeDetailsCard from '@/components/AnimeDetailsCard';
import CommentsList from '@/components/CommentsList';

// Define the type for Anime details based on the expected structure of the data
interface Anime {
  id: number;
  name: string;
  score: string;
  rating: string;
  status: string;
  episodes: number;
  aired_on: string;
  kind: string;
  genres: { name: string }[];
  screenshots: { original: string }[];
  videos: { player_url: string }[];
  image: { original: string };
}

interface Params {
  params: {
    id: string;
  };
}

const BASE_URL = 'https://shikimori.one';

const AnimeDetails = async ({ params }: Params) => {
  // Fetch anime details using params.id
  const response = await fetch(`${BASE_URL}/api/animes/${params.id}`);
  const data: Anime = await response.json(); // Ensure the data matches the Anime type

  return (
    <div className='flex justify-center flex-col items-center text-white min-h-screen'>
      <div className='flex flex-col sm:flex-row justify-around w-full'>
        {/* Display the anime image */}
        <Image
          className='rounded-l-sm w-full'
          src={`${BASE_URL}/${data.image.original}`}
          height={500}
          width={500}
          alt='anime'
        />

        {/* Pass anime details to the AnimeDetailsCard component */}
        <AnimeDetailsCard details={data} />
      </div>
    </div>
  );
};

export default AnimeDetails;
