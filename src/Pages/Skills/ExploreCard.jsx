import React from "react";
import { Star, StarHalf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreCard = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mentors", { state: { mentor: props } });
  };

  const stars = [];
  const fullStars = Math.floor(props.star);
  const hasHalfStar = props.star % 1 !== 0;
  const emptyStars = 5 - Math.ceil(props.star);

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="fill-yellow-500 text-yellow-500"
        size={18}
      />,
    );
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <StarHalf
        key="half"
        className="fill-yellow-500 text-yellow-500"
        size={18}
      />,
    );
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={18} />);
  }

  return (
    <div
    onClick={handleClick}
    className="flex justify-center cursor-pointer items-center gap-5">
      <img
        src={props.img}
        alt=""
        className="h-40 w-40 rounded-full object-cover"
      />
      <div className="leading-8">
        <p className="theme-color text-xl ">{props.name}</p>
        <p className="text-[15px]">{props.skill}</p>
        <p className="text-yellow-900">{props.review}</p>
        <div className="flex">{stars}</div>
      </div>
    </div>
  );
};

export default ExploreCard;
