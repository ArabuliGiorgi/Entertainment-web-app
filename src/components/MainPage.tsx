import { useState } from "react";
import data from "../data.json"
import { HeaderFont } from "../styled-components/elementsStyles";
import { Search } from "../styled-components/sectionsStyles";
import SingleMovie from "./SingleMovie";
import SingleTrending from "./SingleTrending";
import SearchIcon from "/images/icon-search.svg"
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function MainPage({list}: {
    list: string,
}) {
    const account = useSelector((state: RootState) => state.userReducer);
    const Trendings = data.filter((element) => element.isTrending);
    const showList = data.filter((element) => {
        switch(list){
            case "all": return !element.isTrending;
            case "movies": return element.category === "Movie";
            case "series": return element.category === "TV Series";
            default: return account.bookmarks.includes(element.title);
        }
    });
    const bookmarked = {
        Movies: [...showList.filter((element) => element.category === "Movie")],
        Series: [...showList.filter((element) => element.category === "TV Series")]
    }
    const [input, setInput] = useState("");
    const foundMovies = data.filter((element) => {
        if(input === "")
            return false;
        if(list === "all")
            return element.title.toLowerCase().includes(input.toLowerCase());
        if(list === "movies")
            return (element.title.toLowerCase().includes(input.toLowerCase()) && element.category === "Movie");
        if(list === "series")
            return (element.title.toLowerCase().includes(input.toLowerCase()) && element.category === "TV Series");
        return (element.title.toLowerCase().includes(input.toLowerCase()) && account.bookmarks.includes(element.title));
    });
    function handleInput(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.value.trim() === "" && e.target.value !== "")
            return;
        if(e.target.value.endsWith("  "))
            return;
        setInput(e.target.value);
    }

    return (
        <div className="w-[100%] pt-[24px] md:pt-[32px] pb-[61px] lg:pt-[64px] md:pl-0 lg:overflow-y-auto scrollbar-custom">
            <div className="pl-[16px] md:pl-[24px] md:pr-[24px] lg:pl-0 lg:pr-0">
                <Search>
                    <img src={SearchIcon} alt="search icon" />
                    <input type="text" placeholder="Search for movies or TV series" value={input} onChange={handleInput}/>
                </Search>
            </div>
            {input === "" ?
            <>
            {list === "all" ? 
                <>
                <HeaderFont>Trending</HeaderFont>
                <div className="w-[100%] overflow-x-auto flex mb-[24px] pl-[16px] md:pl-[24px] lg:pl-0 scrollbar-custom">
                    {Trendings.map((element, index) => (
                        <SingleTrending name={element.title} key={index}/>
                    ))}
                </div>
                </> :
                null
            }
            <HeaderFont>{list === "all" ? 'Recommended for you' : (list === "movies" ? 'Movies' : (list === "series" ? 'TV Series' : 
                (bookmarked.Movies.length !== 0 ? 'Bookmarked Movies' : (bookmarked.Series.length !== 0 ? 'Bookmarked TV Series' : 'No Bookmarks Found'))))}</HeaderFont>
            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-items-center pl-[16px] pr-[16px] md:pl-[24px] md:pr-[24px] lg:pl-0 lg:pr-[36px] lg:mb-[40px]">
                {list !== "bookmarks" ?
                showList.map((element, index) => (
                    <SingleMovie name={element.title} key={index}/>
                )) :
                (bookmarked.Movies.length === 0 ?
                bookmarked.Series.map((element, index) => (
                    <SingleMovie name={element.title} key={index}/>
                )) :
                bookmarked.Movies.map((element, index) => (
                    <SingleMovie name={element.title} key={index}/>
                ))
                )
                }
            </div>
            {bookmarked.Movies.length !== 0 && bookmarked.Series.length !== 0 && list === "bookmarks" ? 
                <>
                    <HeaderFont>Bookmarked TV Series</HeaderFont>
                    <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-items-center pl-[16px] pr-[16px] md:pl-[24px] md:pr-[24px] lg:pl-0 lg:pr-[36px]">
                        {bookmarked.Series.map((element, index) => (
                            <SingleMovie name={element.title} key={index}/>
                        ))}
                    </div>
                </> :
                null
            }
            </> :
            <>
            <HeaderFont>Found {foundMovies.length} results with '{input}'</HeaderFont>
            <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-items-center pl-[16px] pr-[16px] md:pl-[24px] md:pr-[24px] lg:pl-0 lg:pr-[36px]">
                {foundMovies.map((element, index) => (
                    <SingleMovie name={element.title} key={index}/>
                ))}
            </div>
            </>
            }
        </div>
    )
}