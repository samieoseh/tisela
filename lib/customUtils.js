import { Star } from "lucide-react";

export const getStars = (count) => {
  let starsSpan = [];
  for (let index = 0; index < count; index++) {
    console.log(starsSpan);
    starsSpan.push(<Star style={{ fill: "#ffd600", stroke: "#ffd600" }} />);
  }
  return starsSpan;
};
