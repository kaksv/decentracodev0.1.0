/* eslint-disable @next/next/no-async-client-component */
'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import toast from 'react-hot-toast';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export const revalidate = 0;
const supabase = createClientComponentClient({
  supabaseUrl: 'https://uqlayyqkosbsvoayqanv.supabase.co',
  supabaseKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbGF5eXFrb3Nic3ZvYXlxYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1OTcxMDYsImV4cCI6MjAzNDE3MzEwNn0.j3ldvn_kNM6LqtX69BhPnKQih-rAJq5YO03V70jbyWs',
});

export default async function Page() {
  // const notify = () => toast('Here is your toast.');
  // const handleParticipation = () => {
  //   toast('Under Ipmlementation! Meanwhile, join our social media by Clicking the icons.');
  // }
  const { data: bounties } = await supabase
    .from('Post')
    .select('id, title, content');

  return (
    <>
      <div>
        <div className="absolute right-8 top-8 mt-2 space-x-2 rounded-3xl p-1 shadow-md hover:bg-gray-200  sm:right-12 sm:top-2">
          <w3m-button />
        </div>

        <div>
          {bounties?.reverse().map((bounty) => (
            <div
              className="mx-auto mt-4 rounded-xl border-b border-gray-200 bg-gray-100 px-4 py-4 shadow-md  sm:flex sm:items-center"
              key={bounty.id}
            >
              <Link href={`/dashboard/${bounty.id}`}>
                <h1 className="mb-4 text-2xl font-bold">{bounty.title}</h1>
                <p className="mb-4 text-xl font-medium ">{bounty.content}</p>
                {/* <p className='p-2 text-ml'>{bounty.bounty_description}</p>
                  <p className='p-2 text-ml'>{bounty.bounty_id}</p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
