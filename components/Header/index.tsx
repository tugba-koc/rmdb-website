import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className='stick top-0 z-40 w-full h-24 bg-zinc-900 '>
      <div className='flex justify-between w-full h-full max-w-7xl px-4 items-center m-auto'>
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <div className='invisible md:visible'>
              <Image
                src='/rmdb-logo.svg'
                alt='rmdb logo'
                width={150}
                height={50}
                priority
              />
            </div>
            <div className='absolute md:invisible'>
              <Image
                src='/rmdb-logo-small.svg'
                alt='rmdb logo small'
                width={42}
                height={42}
                priority
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
