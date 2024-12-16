import MovieCard from '@/components/movie/MovieCard';
import NavMovie from '@/components/nav/NavMovie';
import { LIST_API } from '@/utils/constand';
import CardLoading from '../loading/CardLoading';
export default async function NewMovieList() {
  const respose = await fetch(LIST_API.NEW_MOVIE);
  const data = await respose.json();
  const items = data.items;
  if (!items) return <CardLoading></CardLoading>;
  // if(!items.length) return ;
  return (
    <div>
      <NavMovie title='Phim bộ mới' url='/list-movie/new-movie'></NavMovie>
      <div className='grid grid-cols-4 gap-3 mt-5'>
        {items.slice(0, 12).map((item: any, index: number) => (
          <MovieCard data={item} key={index}></MovieCard>
        ))}
      </div>
    </div>
  );
}
