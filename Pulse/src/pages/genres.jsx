import { useEffect, useState } from "react";
import { CardItem } from "../components/card/CardItem";
import { Header } from "../components/genre/header";
import { List } from "../components/genre/List";
import FadeInAndOut from "../framer_motion/fadeInOut";
import ApiClient from "../utils/apiEndpoints/ApiClient";

const Genres = () => {
  const [genre, setGenre] = useState(null);
  const [genreLists, setGenreLists] = useState([]);
  useEffect(() => {
    const getGenresData = async () => {
      try {
        const data = await ApiClient.get(
          "genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20"
        );
        setGenre(data.content.items.find((x) => x.rendering === "HEADER"));
        setGenreLists(data.content.items.filter((x) => x.rendering === "LIST"));
      } catch (error) {
        console.error("Error fetching genre data:", error);
      }
    };
    getGenresData();
  }, []);
  return (
    <FadeInAndOut>
      {genre && (
        <Header name={genre.name} imageUrl={ genre.images[0].url}/>
      )}
      {genreLists.length>0 &&
      
      genreLists.map((item) => (
          <div key={item.id} className="px-4">
            <List id={item.id} name={item.name}  items={item.content.items}></List>
          </div>
        ))}
    </FadeInAndOut>
  );
};

export default Genres;
