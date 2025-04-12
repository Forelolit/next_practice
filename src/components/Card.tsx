import { StarIcon } from 'lucide-react';
import Image from 'next/image';

type cardProps = {
    rating: number;
    title: string;
    thumbnail: string;
    price: number;
    percent: number;
    stock: number;
};

export const Card = ({ rating, title, thumbnail, price, percent, stock }: cardProps) => {
    return (
        <article className="bg-gray-100 text-black rounded-xl p-5 w-60">
            <div className="flex justify-between items-start gap-1 border-b pb-1 mb-2">
                <h3 className="font-medium">{title}</h3>
                <div className="flex gap-1 items-center">
                    <StarIcon fill="orange" />
                    <span className="text-xl font-semibold">{rating}</span>
                </div>
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-2">
                <Image src={thumbnail} alt="image" fill className="object-cover" />
            </div>
            <div className="flex gap-2 justify-end items-center">
                <span className="font-semibold text-xl">${price}</span>
                <span className="text-zinc-700 italic">{percent}%</span>
            </div>
            <div className="text-right font-semibold">Stock: {stock}</div>
        </article>
    );
};
