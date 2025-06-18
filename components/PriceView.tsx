import React from 'react';
import PriceFormatter from './PriceFormatter';
import { cn } from '@/lib/utils';

interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
    const hasDiscount = price !== undefined && discount !== undefined && discount > 0;

    const discountedPrice = hasDiscount
        ? price! * (1 - discount! / 100)
        : price;

    return (
        <div className='flex items-center justify-between gap-5'>
            <div className='flex items-center gap-2'>
                {/* Hiển thị giá sau khi giảm (nếu có giảm), ngược lại là giá gốc */}
                <PriceFormatter
                    amount={discountedPrice}
                    className={cn("text-shop_dark_green", className)}
                />

                {/* Nếu có giảm thì hiển thị giá gốc có gạch ngang */}
                {hasDiscount && (
                    <PriceFormatter
                        amount={price}
                        className='line-through text-xs font-normal text-zinc-500'
                    />
                )}
            </div>
        </div>
    );
}

export default PriceView;
