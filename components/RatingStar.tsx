//Icons
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

interface RatingStarProps {
    starNumb: number;
    rating: number;
}

export default function RatingStar({ starNumb, rating } : RatingStarProps) {
    return(
        <div>
            {starNumb < rating ? 
                <IoStar size={20} className="text-yellow-300" /> :
                starNumb < rating + 1 ?
                    <IoStarHalf size={20} className="text-yellow-300" /> : <IoStarOutline size={20} className="text-gray-400" />
            }
        </div>
    );
}