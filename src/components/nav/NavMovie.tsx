import Link from 'next/link';

type NavMovieProps = {
  title: string;
  url: string;
};
export default function NavMovie(props: NavMovieProps) {
  const { title, url } = props;
  return (
    <div className='flex justify-between'>
      <h1 className='text-3xl font-black text-yellowPrimary'>{title}</h1>
      <Link href={url} className='text-yellowPrimary'>Xem thêm</Link>
    </div>
  );
}
