// import supabase from '@/app/lib/supabase';

import CardWrapper from '@/app/ui/dashboard/cards';
// import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

export const revalidate = 0;

export default async function Page() {
    // const { data } = await supabase.from("postst").select();
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    // const {
    //     numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices
    // } = await fetchCardData();

    return (
        <main>
            <h1 className={ `${lusitana.className} mb-4 text-x1 md:text-2x1 `}>
                Dashboard
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            </h1>
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense> */}
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="pending" value={totalPendingInvoices} type="pending" />
                <Card title = "Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card
                    title="Total Cusomers"
                    value={numberOfCustomers}
                    type="customers"
                    /> */}
               
            {/* </div> */}
            {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"> */}
                {/* <RevenueChart revenue={revenue}  /> */}
                {/* <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>} */}
                {/* > */}
                    {/* <LatestInvoices />
                </Suspense> */}
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            {/* // </div> */}
        </main>
    );
}