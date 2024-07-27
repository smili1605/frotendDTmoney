import Header from "@/components/Header";
import Cards from "@/components/Cards";
import { cardData } from "@/data/cardData";
import {listData} from "@/data/listData";
import List from "@/components/List";

export default function Home() {
    return (
        <>
            <Header />
            <Cards cards={cardData}/>
            <List lists={listData}/>

        </>
    );
}