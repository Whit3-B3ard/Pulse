import React from 'react';
import Card from './playlistCard'; 

const RowCarousel = ({ items }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {items.map((item) => (
        <Card key={item.id} {...item} onClick={() => console.log(`Play ${item.title}`)} />
      ))}
    </div>
  );
};

export default RowCarousel;
