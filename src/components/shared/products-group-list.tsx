import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";


interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listclassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    className,
    listclassName
}) => {
    return (
        <div className={(className)}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listclassName)}>
                {items.map((product, i) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
}