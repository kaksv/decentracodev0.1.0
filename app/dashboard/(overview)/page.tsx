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
  supabaseUrl: "https://sdnsnvaxabsvaapyspkw.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbnNudmF4YWJzdmFhcHlzcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTU5NTgsImV4cCI6MjAxNjg5MTk1OH0.Kt6o-LSQP-eR_NhWJ0_f374sCNWy4fmPESziK5KwMPc",
});

export default async function Page () {

  
    // const notify = () => toast('Here is your toast.');
    // const handleParticipation = () => {
    //   toast('Under Ipmlementation! Meanwhile, join our social media by Clicking the icons.');
    // }
    const { data: bounties } = await supabase
      .from("posts")
      .select("id, title, description")
    
    
    return (
      <>
      <div>
        <div
        className="absolute mt-2 top-8 sm:top-2 right-8 sm:right-12 p-1 rounded-3xl shadow-md  hover:bg-gray-200 space-x-2"
        >
            <w3m-button />         
        </div>

            <div>
              {bounties?.reverse().map(bounty => (
                <div
                className='px-4 py-4 mt-4 mx-auto bg-gray-100 rounded-xl shadow-md sm:flex sm:items-center  border-b border-gray-200' 
                key={bounty.id}>
                  <Link href={`/dashboard/${bounty.id}`}>
                    <h1 className='text-2xl font-bold mb-4'>{bounty.title}</h1>
                  <p className='text-xl font-medium mb-4 '>{bounty.description}</p>
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