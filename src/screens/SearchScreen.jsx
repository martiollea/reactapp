import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getComics } from "../Api";
import { getYear } from "../utils";
import "./SearchScreen.css";
import NoResults from "../components/NoResults";
import Loading from "../components/Loading";

function Comic({ item }) {
  const navigate = useNavigate();

  if (item === null) {
    return <Loading />;
  }
  if (item.length === 0) {
    return <NoResults />;
  }

  return (
    <div
      className="comic"
      onClick={() => {
        navigate(`/Comic/${item.id}`);
      }}
    >
      <img
        className="image"
        src={item.thumbnail.path + "." + item.thumbnail.extension}
      />
      <div className="info">
        <div id="title">{item.title} </div>
        <div className="sub">
          <div className="date">{getYear(item.dates[1].date)}</div>
          <div className="price">{item.prices[0].price}€</div>
        </div>
        <div className="description">{item.description}</div>
      </div>
    </div>
  );
}

export default function SearchScreen() {
  const [data, setData] = useState([]);
  const loadComics = async () => {
    const comics = await getComics(data);

    setData(comics);
  };

  const MapItems = () => {
    return data.map((item) => (
      <div key={item.id}>
        <Comic item={item} />
      </div>
    ));
  };

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <div className="search-screen">
      <div className="comic-list">{MapItems()}</div>
    </div>
  );
}
