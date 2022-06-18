import axios from "axios";
import { API_KEY, HASH } from "./Config.js";

export const getComics = async () => {
  const results = await axios(
    `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=abf1ee41e19dde26f3fcc92689895772&hash=9d068a43fa510ad4daded1ab68a615ed`,
    {}
  );
  return results.data.data.results;
};

export const getOneComic = async (comicId) => {
  const results = await axios(
    `http://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=abf1ee41e19dde26f3fcc92689895772&hash=9d068a43fa510ad4daded1ab68a615ed`,
    {}
  );
  return results.data.data.results[0];
};
