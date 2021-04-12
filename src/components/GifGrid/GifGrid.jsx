import React from 'react'
import { GifGridItem } from '../GifGridItem/GifGridItem'
import { useFetchGifs } from '../../hooks/useFetchGifs'
export const GifGrid = ({ category }) => {

    const { loading, data: imgs } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">

                {
                    imgs.map((img) => (
                        <GifGridItem key={img.id} {...img} />))
                }

            </div>
        </>
    )
}
