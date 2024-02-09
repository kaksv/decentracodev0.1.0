
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { notFound } from "next/navigation";

export const revalidate = 0;

export async function generateStaticParams() {
    const { data: bounties } = await supabase.from("bounties").select("id");
    // const { data: bounties} = await supabase.from('bounties').select().eq('id', bounty_id).single();
    return bounties ??  [];
}
const supabase = createClientComponentClient({
    supabaseUrl: "https://sdnsnvaxabsvaapyspkw.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbnNudmF4YWJzdmFhcHlzcGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTU5NTgsImV4cCI6MjAxNjg5MTk1OH0.Kt6o-LSQP-eR_NhWJ0_f374sCNWy4fmPESziK5KwMPc",
  });

export default async function Page({params: { id }} : {params: { id: string }
}) {
    

    const { data: bounty } = await supabase.from('bounties').select().match({ id }).single();

    // if(!bounty) {
    //     notFound();
    // }
    return (
        <>
        <pre>{JSON.stringify(bounty, null, 2)}</pre>
        </>
    )
}