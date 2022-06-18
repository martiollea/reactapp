import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneComic } from "../Api";
import Loading from "../components/Loading";
import { getYear } from "../utils";
import "./DetailsScreen.css";

export default function DetailsScreen() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

 
  const loadComic = async () => {
    const comic = await getOneComic(comicId);
    setComic(comic);
    
  };

  useEffect(() => {
    loadComic();
  }, []);

  if (comic === null) {
    return <Loading />;
  }
  
  //title, image, year, description, price, characters, authors

  return (
    <div className="details-screen" >
      <div className="wrapper">
        <div className="header">
          <img className="poster" src={comic.thumbnail.path + "." + comic.thumbnail.extension} />
          <div className="text">
            <h1 className="title">{comic.title}</h1>
            <div className="subtitle">
              <div className="year">{getYear(comic.dates[1].date)}</div>
              <div className="space" />
              <div className="price">{comic.prices[0].price}€</div>
              <div className="flex-space" />
            </div>
            <div className="description">{comic.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
