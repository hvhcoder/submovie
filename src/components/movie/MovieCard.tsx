import { Movie } from "@/types/movie";
import { pathImage } from "@/utils/constand";
import Image from "next/image";
import Link from "next/link";
interface MovieCardProps {
    data:Movie
}
export default function MovieCard(props: MovieCardProps) {
    const { data } = props;
    // console.log("MovieCard ~ data:", data)
    return (
        <Link href={`/movie/${data.slug}`}>
            <div className="w-full rounded-lg">
                <div className="w-full h-60 relative">
                    <Image 
                        src={`${pathImage}/${data.thumb_url}`}
                        fill
                        className="w-full h-full object-cover rounded-lg"
                        alt="image"
                    />
                    <div className="adlabel">
                        {data.year}
                    </div>
                    </div>               
            </div>
            <h4 className="text-white mt-2 text-xl font-semibold line-clamp-2">{data.name}</h4>
        </Link>
    );
}