import { useDispatch, useSelector } from "react-redux";
import data from "../data.json"
import { TrendingImage } from "../styled-components/sectionsStyles";
import { AppDispatch, RootState } from "../store";
import { changeBookmarks } from "../features/accountSlice";
import { TrendingDiv } from "../styled-components/elementsStyles";
import PlayImage from "/images/icon-play.svg"

export default function SingleTrending({name}: {
    name: string,
}) {
    const object = data.find((element) => element.title === name);
    const account = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch<AppDispatch>();
    function handleMark(){
        if(account.bookmarks.includes(name)){
            dispatch(changeBookmarks(account.bookmarks.filter((element) => element !== name)));
        }else{
            dispatch(changeBookmarks([...account.bookmarks, name]));
        }
    }

    return (
        <TrendingDiv >
            <img src={object?.thumbnail.trending?.small} alt="trending image" className="md:hidden h-[140px] rounded-[8px]"/>
            <img src={object?.thumbnail.trending?.large} alt="trending image" className="hidden md:block h-[230px] rounded-[8px]"/>
            <div className="play">
                <img src={PlayImage} alt="play"/>
                <h1>Play</h1>
            </div>
            <TrendingImage>
                <div className="mark" onClick={handleMark}>
                    {account.bookmarks.includes(name) ? 
                        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" className="fill">
                            <path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"/>
                        </svg> :
                        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" className="stroke">
                            <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" strokeWidth="1.5" fill="none"/>
                        </svg>
                    }
                </div>
                <div className="info">
                    <div className="details">
                        <h1>{object?.year}<span>•</span></h1>
                        {object?.category === "Movie" ? 
                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#FFFFFF"/>
                            </svg> :
                            <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF"/>
                            </svg>
                        }
                        <h1>{object?.category}<span>•</span>{object?.rating}</h1>
                    </div>
                    <h1 className="title">{object?.title}</h1>
                </div>
            </TrendingImage>
        </TrendingDiv>
    )
}