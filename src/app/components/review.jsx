import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

export default function Review({ rating, className = "" }) {
  const rounded = Math.round(rating * 2) / 2;

  return (
    <div
      className={`flex items-center space-x-1 ${className} [&>svg]:w-5 [&>svg]:h-5`} 
    >
      {[1, 2, 3, 4, 5].map((n) => {
        if (n <= rounded) {
          return (
            <FontAwesomeIcon
              key={n}
              icon={faStarSolid}
              className="text-yellow-400"
            />
          );
        } else if (n - 0.5 === rounded) {
          return (
            <FontAwesomeIcon
              key={n}
              icon={faStarHalfAlt}
              className="text-yellow-400"
            />
          );
        } else {
          return (
            <FontAwesomeIcon
              key={n}
              icon={faStarRegular}
              className="text-gray-500"
            />
          );
        }
      })}
      <span className="ml-2 text-sm text-white">{rating.toFixed(1)} Star Rating</span>
      
    </div>
  );
}
