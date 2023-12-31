


// import { createClient } from '@supabase/supabase-js';

import supabase from '@/app/config/supabaseconfig';

export const revalidate = 0;

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
    const { data: bounties } = await supabase
      .from("bounties")
      .select('bounty_id, bounty_name, bounty_description, bounty_prize')
    
    
    return (
      <>
  

     
      {bounties?.reverse().map(bounty => (
        <div className='p-4 border-b border-gray-400' key={bounty.bounty_id}>
          <h1 className='text-2xl font-bold mb-4 '>{bounty.bounty_name}</h1>
          <p className='p-2 text-ml'>{bounty.bounty_description}</p>
          <p className='p-2 text-xl'>${bounty.bounty_prize}</p>
        </div>
      ))}
      </>
    )

  
}