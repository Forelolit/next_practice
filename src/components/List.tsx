import { Card } from './Card';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/api/fetchProducts';
import Link from 'next/link';

export const List = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: ['product'],
        queryFn: fetchProducts,
    });

    if (isPending) {
        return <div>loading...</div>;
    }
    if (isError) {
        return <div>error</div>;
    }

    return (
        <>
            <ul className="flex flex-wrap gap-5">
                {data?.map((item) => (
                    <li key={item.id}>
                        <Link href={`/products`}>
                            <Card
                                rating={item.rating}
                                title={item.title}
                                thumbnail={item.thumbnail}
                                price={item.price}
                                percent={item.discountPercentage}
                                stock={item.stock}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
