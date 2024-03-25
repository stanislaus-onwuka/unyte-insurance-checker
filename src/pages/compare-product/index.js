import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import CarImage from '../../assets/images/Toyota_Corolla.jpg'
import ChevronLeft from '../../assets/icons/chevron-left.svg'
import data from '../../api/products.json'
import { getProductAttributes } from '../../utils/functions'
import { excludeAttributes } from '../../constants/excludedAttributes'
import ProductAttribute from '../../components/product-attribute'
import CheckIcon from '../../assets/icons/check-icon.svg'
import WrongIcon from '../../assets/icons/wrong-icon.svg'
import RecompareIcon from '../../assets/icons/refresh-icon.svg'
import ProductItem from '../../components/product-item'

function CompareProduct() {
    // Import data
    const { products } = data

    const [searchParams, setSearchParams] = useSearchParams();
    const { pid } = useParams()
    const productToCompareId = searchParams.get("compareWith")

    const currentProduct = products.find(product => product.pid === pid)
    const productToCompare = products.find( product => product.pid === searchParams.get("compareWith") )


    const clearProductToCompare = () => {
        setSearchParams((params) => {
            params.delete('compareWith');
            return params;
        });
    }

    const renderProductAttributes = () => {
        return getProductAttributes(excludeAttributes, currentProduct)
            .map(([key, value], idx) => (
                <ProductAttribute
                    key={idx}
                    attributeTitle={key}
                    attributeValue={value}
                />
            )
        )
    }

    const renderProductToCompareAttributes = () => {
        return getProductAttributes(excludeAttributes, productToCompare)
            .map(([key, value], idx) => (
                <ProductAttribute
                    key={idx}
                    attributeTitle={key}
                    attributeValue={value}
                />
            )
        )
    }

    const renderView = () => {

        if (!productToCompareId) {
            const filteredProducts = products.filter(product => product.pid !== pid)

            return (
                <div>
                    <h2 className="text-base-black-60 tracking-[-2%] text-lg font-medium mb-10">Select a product to compare with</h2>
                    <div className="grid grid-cols-responsive-grid gap-10">
                        {
                            filteredProducts.map((product, idx) => {
                                return <ProductItem key={idx} product={product} compareMode={true} />
                            })
                        }
                    </div>
                </div>
    
            )
        }
    
        return (
            <section className="flex flex-col mt-10">
                <div className='flex gap-6 mb-24 sm:gap-11'>
                    <div>
                        <div className='max-w-[500px]'>
                            <img src={CarImage} alt='Car'/>
                        </div>
                        <div>
                            <h3 className='text-xl text-base-black font-bold my-8 text-center sm:text-3xl sm:my-11 sm:text-left'>{ currentProduct.model }</h3>
                            <div className='flex flex-col gap-4 max-w-[80%] text-center sm:flex-wrap sm:gap-9 sm:text-left sm:flex-row'>
                                {renderProductAttributes()}
                            </div>
                            <div className='mt-[42px]'>
                                {
                                    currentProduct.insurable ? (
                                        <div className='flex items-center gap-[5px]'>
                                            <img src={CheckIcon} className='w-4 md:w-6' alt='Insured' />
                                            <h4 className='text-sm md:text-lg'>Insured by Unyte</h4>
                                        </div>
                                    ) : (
                                        <div className='flex items-center gap-[5px]'>
                                            <img src={WrongIcon} className='w-4 md:w-6' alt='Not insured' />
                                            <h4 className='text-sm md:text-lg'>Not insured by Unyte</h4>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <h1 className='text-2xl self-center sm:text-4xl'>Vs</h1>
                    <div>
                        <div className='max-w-[500px]'>
                            <img src={CarImage} alt='Car'/>
                        </div>
                        <div>
                            <h3 className='text-xl text-base-black font-semibold my-8 text-center sm:text-3xl sm:my-11 sm:text-left'>{ productToCompare.model }</h3>
                            <div className='flex flex-col gap-4 max-w-[80%] text-center sm:flex-wrap sm:gap-9 sm:text-left sm:flex-row'>
                                {renderProductToCompareAttributes()}
                            </div>
                            <div className='mt-[42px]'>
                                {
                                    productToCompare.insurable ? (
                                        <div className='flex items-center gap-[5px]'>
                                            <img src={CheckIcon} className='w-4 md:w-6' alt='Insured' />
                                            <h4 className='text-sm md:text-lg'>Insured by Unyte</h4>
                                        </div>
                                    ) : (
                                        <div className='flex items-center gap-[5px]'>
                                            <img src={WrongIcon} className='w-4 md:w-6' alt='Not insured' />
                                            <h4 className='text-sm md:text-lg'>Not insured by Unyte</h4>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={clearProductToCompare} className='flex items-center gap-[10px] rounded-[26px] border-2 border-base-green py-3 px-[18px] mt-[18px] self-center'>
                    <div>
                        <img src={RecompareIcon} className='w-4 sm:w-6' alt='compare another product'/>
                    </div>
                    <h4 className='text-base-green font-medium text-base sm:text-lg'>Compare another product</h4>
                </button>
            </section>
        )
    }


    

    return (
        <div className='px-[6.5%]'>
            <Link to={`/view/${pid}`} className="flex mb-6 sm:mb-0">
                <div>
                    <img src={ChevronLeft} alt="Chevron Left"/>
                </div>
                <span>{ currentProduct.model }</span>
            </Link>
            <h1 className="font-semibold text-3xl text-base-black my-3 sm:text-5xl sm:my-9">Compare { currentProduct.model } with { productToCompareId ? productToCompare.model : "..." }</h1>
            <div>
                {renderView()}
            </div>
        </div>
    )
}

export default CompareProduct