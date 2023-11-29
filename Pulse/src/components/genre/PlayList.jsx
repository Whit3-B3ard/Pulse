import SmoothHoverEffect from "../../framer_motion/smoothHover";
import { CardItem } from "../card/CardItem";

export const PlayList = (props) => {
  return (
    <SmoothHoverEffect>
      <CardItem image={props.images[0].url} title={props.name}></CardItem>
    </SmoothHoverEffect>
  );
};
