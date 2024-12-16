import { Button } from '@/components/ui/button';
import { Category, Country, MovieDetailResponse } from '@/types/movie';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export default async function MovieDetailPage(props: any) {
  const slug = props.params.slug;
  const response = await fetch(`https://ophim1.com/phim/${slug}`);
  const data: MovieDetailResponse = await response.json();
  // console.log("MovieDetailPage ~ data:", data)
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-4 mr-20'>
          <div className='w-full h-[400px] rounded-lg relative'>
            <Image
              src={data.movie.thumb_url}
              fill
              className='w-full h-full object-cover rounded-lg'
              alt='image'
            />
          </div>
        </div>
        <div className='col-span-8'>
          <h3 className='font-bold text-3xl text-white'>{data.movie.name}</h3>
          <div className='flex items-center gap-x-5 my-3'>
            <Button className='px-4 py-3 bg-blue-500 hover:bg-blue-600'>
              Code 50k
            </Button>
            <Link href={`/movie/watch/${data.movie.slug}`}>
              <Button className='px-4 py-3 bg-red-500 hover:bg-red-600'>
                Xem phim
              </Button>
            </Link>
          </div>
          <div className=''>
            <div className='text-white text-base mb-2'>
              Ngày cập nhật:{' '}
              {new Date(data.movie.created.time).toLocaleDateString()}
            </div>
            <div className='text-white text-base mb-2'>
              Đạo diễn: {data.movie?.director ?? 'Chưa cập nhật'}
            </div>
            <div className='text-white text-base mb-2'>
              Diễn viên: {data.movie?.actor.join(', ') ?? 'Chưa cập nhật'}
            </div>
            <div className='text-white text-base mb-2'>
              Thời lương: {data.movie.time ?? 'Chưa cập nhật'}
            </div>
            <div className='text-white text-base mb-2'>
              Trạng thái:{' '}
              {data.movie.status == 'completed'
                ? 'Hoàn thành'
                : 'Chưa hoàn thành'}
            </div>
            <div className='text-white text-base mb-2'>
              Vietsub: {data.movie.sub_docquyen ? 'Có' : 'Không'}
            </div>
            <div className='text-white text-base mb-2'>
              Năm phát hành: {data.movie.year}
            </div>
            <div className='text-white text-base mb-2'>
              Quốc gia:{' '}
              {data.movie.country
                .map((item: Country) => item.name)
                .join(', ') ?? 'Chưa cập nhật'}
            </div>
            <div className='text-white text-base mb-2'>
              Thể loại:{' '}
              {data.movie?.category
                .map((item: Category) => item.name)
                .join(', ') ?? 'Chưa cập nhật'}
            </div>
            <div className='text-white text-base mb-2'>
              Diễn viên: {data.movie?.actor.join(', ') ?? 'Chưa cập nhật'}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Accordion type='single' collapsible>
          <AccordionItem
            value='item-1'
            className='border-b-0 bg-blue-400/20 rounded-md'
          >
            <AccordionTrigger className='text-white font-medium bg-blue-500/60 py-2 px-3 rounded-md'>
              Nội dung
            </AccordionTrigger>
            <AccordionContent className='py-2 px-3'>
              <div
                className='content-movie text-white'
                dangerouslySetInnerHTML={{ __html: data.movie.content }}
              ></div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
