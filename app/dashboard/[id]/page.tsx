import supabase from "@/app/config/supabaseconfig";
import { notFound } from "next/navigation";

export const revalidate = 0;

// export async function generateStaticParams() {
//     const { data: bounties } = await supabase.from("bounties").select("id");
//     return bounties ??  [];
// }

export default async function Bounty({
    params: { id }
} : {
    params: { id: string }
}) {
    const { data: bounty } = await supabase
    .from("bounties")
    .select()
    .match({ id })
    .single();

    if(!bounty) {
        notFound();
    }
    return (
        <pre>{JSON.stringify(bounty, null, 2)}</pre>
    )
}