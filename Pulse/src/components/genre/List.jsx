import FadeInAndOut from "../../framer_motion/fadeInOut";

import { PlayList } from "./PlayList";

export const List = ({ id, name, items }) => {
  const imgUrl = "";
  const onClickHandler = () => {};
  return (
    <>
      <FadeInAndOut id={id}>
        <div className="flex flex-col">
       

          <div className="p-1 pt-[10px]">
            <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
          </div>
        </div>
      </FadeInAndOut>
      <div className="flex gap-4">
      {items.length > 0 &&
        items.map((item) => <PlayList key={item.id} {...item} />)}
        </div>
    </>
  );
};
