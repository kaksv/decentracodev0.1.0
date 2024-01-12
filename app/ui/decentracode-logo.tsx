
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function DecentracodeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-start sm:items-center text-[rgb(172,184,204)]`}
    >

      <Image
      src='/favicon.png'
      width={40}
      height={40}
      className='hidden md:block'
      alt='Decentracode'
      />
       
       {/* <Image
      src='/favicon.png'
      width={40}
      height={40}
      className='block md:hidden'
      alt='Decentracode'
      /> */}

      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className=" text-[32px]">Decentracode</p>
    </div>
  );
}
