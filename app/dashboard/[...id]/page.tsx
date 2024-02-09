
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";

export const revalidate = 0;

export async function generateStaticParams() {
    const { data: bounties } = await supabase.from("bounties").select("id");
    return bounties ??  [];
}
const supabase = createClientComponentClient({
    supabaseUrl: "https://sdnsnvaxabsvaapyspkw.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbnNudmF4YWJzdmFhcHlzcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTU5NTgsImV4cCI6MjAxNjg5MTk1OH0.Kt6o-LSQP-eR_NhWJ0_f374sCNWy4fmPESziK5KwMPc",
  });

export default async function Page({params: { id }} : {params: { id: string }
}) {
    

    const { data: bounty } = await supabase
    .from('posts')
    .select()
    .match({ id })
    .single();

    if(!bounty) {
        notFound();
    }
    return (
        <>
        <div
         className='block h-full p-4 m-4 mx-auto bg-gray-100 rounded-xl shadow-md items-start sm:items-center border-gray-200' 
         >
         <h1 className='text-2xl font-bold mb-2'>{bounty.title}</h1>
         <p className='text-xl font-medium mb-4 '>{bounty.description}</p>
         <div className="sm:flex sm:mx-2 space-x-4">
         <input className="py-2 mb-3 block rounded-md" type="text" placeholder="Your Project Link"/>
         <button
        //    onClick={() =>{}} 
          className="p-2 mb-3 block  text-lg sm:text-sm text-green-400 font-semibold rounded-full  border 
         border-purple-400 sm:border-purple-300 hover:text-white hover:bg-green-400 hover:border-transparent 
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">Submit Project.</button>
          </div>
        </div>

  
        
        </>
    )
}