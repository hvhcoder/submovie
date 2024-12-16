import NavHeader from '../nav/NavHeader';
import { ModeToggle } from '../ui/ModeToggle';

export default function Header() {
  return (
    <header className='sticky top-0 z-40 w-full flex-none bg-[#0c2738]'>
      <div className='container'>
        <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='text-2xl mr-6'>Logo</div>
              <NavHeader></NavHeader>
            </div>
            <div className='rounded-xl h-10 bg-slate-100 flex items-center'>
              <input
                type='text'
                className='w-60 h-full rounded-xl p-2 bg-transparent focus:ring ring-blue-500/40 focus:outline-none dark:text-slate-400 dark:placeholder:text-slate-500'
                placeholder='Tìm kiếm tên phim...'
              />
              <button className='h-full p-2 w-24 rounded-r-xl bg-blue-500 text-white text-center'>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
