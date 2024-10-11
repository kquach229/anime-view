import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import LoadMore from '../components/LoadMore';
import { fetchAnime } from './action';
import Hero from '@/components/Hero';

async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className='sm:p-16 py-16 px-8 flex flex-col gap-10 text-white max-w-7xl justify-center mx-auto'>
      <Hero />
      <h2 className='text-3xl font-bold'>Explore Anime</h2>

      <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto'>
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
