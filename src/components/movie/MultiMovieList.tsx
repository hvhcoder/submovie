import MovieCard from '@/components/movie/MovieCard';
import NavMovie from '@/components/nav/NavMovie';
import { LIST_API } from '@/utils/constand';
export default async function MultiMovieList() {
  const respose = await fetch(LIST_API.MULTI_MOVIE);
  const data = await respose.json();
  // console.log("SingleMovieList ~ data:", data)
  const items = data.data.items;
  // console.log("SingleMovieList ~ items:", items)
  if (!items) return null;
  return (
    <div>
      <NavMovie title='Phim lẻ' url='/list-movie/phim-le'></NavMovie>
      <div className='grid grid-cols-4 gap-3 mt-5'>
        {items.slice(0, 12).map((item: any, index: number) => (
          <MovieCard data={item} key={index}></MovieCard>
        ))}
      </div>
    </div>
  );
}
