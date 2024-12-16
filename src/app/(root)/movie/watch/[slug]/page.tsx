'use client';

import LoadingSpin from '@/components/loading/LoadingSpin';
import HlsVideoMoviePlayer from '@/components/video/HlsVideoMovie';
import { MovieDetailResponse } from '@/types/movie';
import React, { useEffect, useState } from 'react';

export default function WatchPage(props: any) {
  const slug = props.params.slug;

  // State để quản lý link m3u8
  const [currentM3u8, setCurrentM3u8] = useState<string>('');
  const [movieData, setMovieData] = useState<MovieDetailResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://ophim1.com/phim/${slug}`);
      const data: MovieDetailResponse = await response.json();
      setMovieData(data);
      // Lấy link m3u8 đầu tiên từ dữ liệu tập
      setCurrentM3u8(data.episodes[0].server_data[0].link_m3u8);
    }
    fetchData();
  }, [slug]);

  // Nếu dữ liệu chưa tải, hiển thị loading
  if (!movieData) {
    return <LoadingSpin/>;
  }

  return (
    <div>
      <h4 className='font-bold text-3xl text-white mb-8'>
        {movieData.movie.name}
      </h4>
      <div className='w-full mb-8'>
        <HlsVideoMoviePlayer
          src={currentM3u8}
          autoPlay={true}
          controls={true}
        />
      </div>

      {/* Danh sách tập */}
      <div className='text-white'>
        <h5 className='font-bold text-2xl mb-4'>Episodes:</h5>
        <div className='flex flex-wrap gap-4'>
          {movieData.episodes[0].server_data.map((episode) => (
            <button
              key={episode.slug}
              onClick={() => setCurrentM3u8(episode.link_m3u8)}
              className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white'
            >
              Tập {episode.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
