import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { title } from 'process';
export default function NavHeader() {
  const menu = [
    {
      title: 'Trang chủ',
      href: '/',
    },
    {
      title: 'Phim bộ',
      href: '/',
    },

    {
      title: 'Thể loại',
      href: '/',
      submenu: [
        {
          name: 'Hành động',
          href: '/',
        },
        {
          name: 'Hành động',
          href: '/',
        },

        {
          name: 'Hành động',
          href: '/',
        },
        {
          name: 'Hành động',
          href: '/',
        },
      ],
    },
    {
      title: 'Quốc gia',
      href: '/',
      submenu: [
        {
          name: 'Hành động',
          href: '/',
        },
        {
          name: 'Hành động',
          href: '/',
        },

        {
          name: 'Hành động',
          href: '/',
        },
        {
          name: 'Hành động',
          href: '/',
        },
      ],
    },
    {
      title: 'Sắp chiếu',
      href: '/',
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-x-3'>
        {menu.map((item, index) =>
          item.submenu ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className='cursor-pointer focus:outline-none flex items-center text-base font-medium text-gray-400'>
                {item.title}
                <span className='inline-block text-base font-medium ml-3 text-violet-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-max grid grid-cols-3 gap-3'>
                {item.submenu.map((subItem, subIndex) => (
                  <DropdownMenuItem key={subIndex}>
                    <Link
                      href={subItem.href}
                      className='text-base text-gray-400'
                    >
                      {subItem.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavigationMenuItem key={index}>
              <Link
                href={item.href}
                className='text-base font-medium text-gray-400'
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
