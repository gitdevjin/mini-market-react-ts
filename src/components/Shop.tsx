import { useState, useEffect } from 'react';
import axios from 'axios';

export type ProductType = {
    pid: number;
    name: string;
    price: number;
    desc: string;
    category: string;
    image: string;
}

const initState: ProductType[] = [];


export default function Shop() {
    const [products, setProducts] = useState<ProductType[]>(initState);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async (url: string) => {
            const response = await axios.get(url, {
                cancelToken: source.token
            });

            const temp: ProductType[] = [];

            response.data.forEach((item: {
                id: number; title: string;
                price: number; desc: string; category: string; image: string;
            }) => {
                const prod: ProductType = {
                    pid: item.id,
                    name: item.title,
                    price: item.price,
                    desc: item.desc,
                    category: item.category,
                    image: item.image
                };

                temp.push(prod);
                setProducts(temp);

            });
        }

        fetchData("https://fakestoreapi.com/products/");
    }, [])


    return (
        <div>
            {products.map((item: ProductType) => {
                return (
                    <div>
                        {item.name}
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
    )
}
