import React from 'react';
import ProductCard from './ProductCard';
import img1 from "../../puplic/assets/img32.png"
import img4 from '../../puplic/assets/Arrow-mail.png'


const products = Array.from({ length: 10 }).map((_, index) => ({
    title: index % 2 === 0 ? 'ENOVOWHEEL X2' : 'ENOVOWHEEL X3',
    price: index % 2 === 0 ? '11865' : '13035',
    image: '/assets/scooter.png', // Replace with actual image path
}));

const ProductPage: React.FC = () => {
    return (
        <div className="flex shopping-products">
            {/* Sidebar */}
            <aside className="shopping-slide w-60 p-4">
                <div className="filtter flex">
                    <img src={img1} />
                    <h3 className=""> Filters</h3>

                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-2 filter-check">
                        <input type="checkbox" className="accent-teal-500" />
                        Scooter
                    </label>
                    <label className="flex items-center gap-2 filter-check">
                        <input type="checkbox" className="accent-teal-500" />
                        Accessories
                    </label>
                </div>
            </aside>

            {/* Product Grid */}
            <main className="flex-1 p-6">
                <div className="shopping-sort">
                    <p className="sort-by">Sort By:<span> Best selling</span><img src={img4} /></p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
                
            </main>
        </div>
    );
};

export default ProductPage;
