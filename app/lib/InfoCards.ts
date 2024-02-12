import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Web3 Builders Incentivised.",
        bodyText: " We are keen on forcusing to incentivising Developers to keep developing and growing in the Web3 space.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Web3 Education",
        bodyText: "Educating Web3 developers to learn and master building web3 Solutions in Africa is at the core.",
        icon: AlarmClockOff,
        id: 2
    },
    {
        title: "Founding and Global employment opportunities.",
        bodyText: " We are dedicated to partner with Stake holders to incubate founders and produce global talent in competent on the global stage.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards