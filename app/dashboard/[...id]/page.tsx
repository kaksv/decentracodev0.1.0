import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export async function generateStaticParams() {
  const { data: bounties } = await supabase.from('bounties').select('id');
  return bounties ?? [];
}
const supabase = createClientComponentClient({
  supabaseUrl: 'https://uqlayyqkosbsvoayqanv.supabase.co',
  supabaseKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbGF5eXFrb3Nic3ZvYXlxYW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1OTcxMDYsImV4cCI6MjAzNDE3MzEwNn0.j3ldvn_kNM6LqtX69BhPnKQih-rAJq5YO03V70jbyWs',
});

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: bounty } = await supabase
    .from('Post')
    .select()
    .match({ id })
    .single();

  if (!bounty) {
    notFound();
  }
  return (
    <>
      <div className="m-4 mx-auto block h-full items-start rounded-xl border-gray-200 bg-gray-100 p-4 shadow-md sm:items-center">
        <h1 className="mb-2 text-2xl font-bold">{bounty.title}</h1>
        <p className="mb-4 text-xl font-medium ">{bounty.content}</p>
        <div className="space-x-4 sm:mx-2 sm:flex">
          <input
            className="mb-3 block rounded-md py-2"
            type="text"
            placeholder="Your Project Link"
          />
          <button
            //    onClick={() =>{}}
            className="mb-3 block rounded-full  border border-purple-400 p-2 text-lg font-semibold  text-green-400 
         hover:border-transparent hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 
          focus:ring-green-400 focus:ring-offset-2 sm:border-purple-300 sm:text-sm"
          >
            Submit Project.
          </button>
        </div>
      </div>
    </>
  );
}
