'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import toast from 'react-hot-toast';

export const revalidate = 0;
const supabase = createClientComponentClient({
  supabaseUrl: "https://sdnsnvaxabsvaapyspkw.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbnNudmF4YWJzdmFhcHlzcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTU5NTgsImV4cCI6MjAxNjg5MTk1OH0.Kt6o-LSQP-eR_NhWJ0_f374sCNWy4fmPESziK5KwMPc",
});

export default async function Page () {
  // const [bounties, setBounties] = useState<any>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [bounty, setBounty] = useState({ bounty_name: "", bounty_description: "", bounty_prize:""}) 
  // const { bounty_name, bounty_description, bounty_prize} = bounty

  // useEffect(() =>{
  //   fetchBounties();
  //   // setLoading(false);
  // }, [])


  // async function createBounty(){
  //   await supabase.from("bounty").insert([
  //     bounty_name, bounty_description, bounty_prize
  //   ]).single()
  //   setBounty({ bounty_name: "", bounty_description: "", bounty_prize: ""})
  //   fetchBounties()
  // }

  
    // <div className="">
      {/* <input
        placeholder="Name of the challenge/bounty"
        value={bounty_name}
        onChange={e => setBounties({ ... bounty, bounty_name: e.target.value })}
      />
      <input
        placeholder="A description of about the challenge or bounty"
        value={bounty_description}
        onChange={e => setBounties({ ... bounty, bounty_description: e.target.value })}
      />
      <input
        placeholder="Explanation of how the bounty shall be given out"
        value={bounty_prize}
        onChange={e => setBounties({ ... bounty, bounty_prize: e.target.value })}
      /> */}
      {/* <button className='bg-blue-500 text-white' onClick={createBounty}> Create challenge</button> */}
      {
      
    }
      {/* : {
        bounties.map(bounty =>(
          <div key={bounty.id}>
            <h3>{bounty.bounty_name}</h3>
            <p>{bounty.bounty_description}</p>
            <p>{bounty.bounty_prize}</p>
          </div>
        ))
      } */}
    // </div>
    const notify = () => toast('Here is your toast.');
    const handleParticipation = () => {
      toast('Under Ipmlementation! Meanwhile, join our social media by Clicking the icons.');
    }
    const { data: bounties } = await supabase
      .from("bounties")
      .select('bounty_id, bounty_name, bounty_description')
    
    
    return (
      <>
  
  {/* <div className="p-12 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"> 
</div> */}
<div className='static'>
<button className="absolute top-2 right-16 py-1 px-1  font-semibold rounded-3xl shadow-md  hover:bg-gray-200">
<w3m-button />
</button>

     
      {bounties?.reverse().map(bounty => (
        <div className='p-4 mt-4 mx-auto bg-gray-100 rounded-xl shadow-md flex items-center space-x-4 border-b border-gray-200' key={bounty.bounty_id}>
          <h1 className='text-2xl font-bold mb-4 '>{bounty.bounty_name}</h1>
          <p className='p-2 text-ml'>{bounty.bounty_description}</p>
          <button onClick={notify}
          className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border 
          border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent 
          focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Participate</button>
          {/* <p className='p-2 text-xl'>${bounty.bounty_prize}</p> */}
        </div>
      ))}
    </div>
      </>
    );

  
}