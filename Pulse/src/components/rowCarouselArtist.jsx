import ArtistCard from "./artistCard";


const RowCarouselArtist = ({ items }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {items.map((item) => (
        <ArtistCard key={item.id} {...item} onClick={() => console.log(`Play ${item.title}`)} />
      ))}
    </div>
  );
};

export default RowCarouselArtist;