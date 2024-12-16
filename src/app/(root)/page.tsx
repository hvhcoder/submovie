
import MultiMovieList from '@/components/movie/MultiMovieList';
import NewMovieList from '@/components/movie/NewMovieList';
import SibarMovie from '@/components/movie/SibarMovie';
import SingleMovieList from '@/components/movie/SingleMovieList';

export default async function Home() {

  return (
    <div className='pt-10'>
      <div className='grid grid-cols-12 gap-x-10'>
        <div className='col-span-9'>
          <div className='mb-5'>
            <NewMovieList></NewMovieList>
          </div>
          <div className="mb-5">
            <SingleMovieList></SingleMovieList>
          </div>
          <div className="">
            <MultiMovieList></MultiMovieList>
          </div>
       
        </div>
        <div className='col-span-3'>
          <SibarMovie></SibarMovie>
        </div>
      </div>
    </div>
  );
}
