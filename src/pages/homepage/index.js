import React from "react";
import ProductSearch from "../../components/product-search";
import ProductItem from "../../components/product-item";
import data from '../../api/products.json'

function Homepage() {
    const { products } = data

    return (
        <>
            <section>
                <div className="mt-[60px] max-w-full px-[4%] mb-8 md:max-w-[55%]">
                    <h1 className="text-3xl font-bold text-base-black mb-5 sm:text-5xl">
                        Insurance Checker
                    </h1>
                    <p className="text-base text-base-black-60 md:text-lg">
                        Discover which products, goods, or belongings are eligible for
                        coverage through Unyte. Additionally, we will furnish details
                        regarding the appropriate insurance plan applicable for each item
                        insured.
                    </p>
                </div>
                <div className="px-[4%]"> 
                    <ProductSearch/>
                </div>
            </section>
            <section className="px-[4%] mt-[100px]">
                <h2 className="text-2xl text-base-black font-medium mb-10 md:text-3xl">Recently viewed products</h2>
                <div className="grid grid-cols-responsive-grid gap-10">
                    {
                        products.slice(3,9).map((product, idx) => {
                            return <ProductItem key={idx} product={product} />
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Homepage;
