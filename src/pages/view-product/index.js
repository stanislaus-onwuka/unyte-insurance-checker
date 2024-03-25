import React from 'react'
import CompareIcon from "../../assets/icons/compare-icon.svg"
import ChevronLeft from "../../assets/icons/chevron-left.svg"
import UnyteUnlock from "../../assets/icons/not-insured-icon.svg"
import UnyteLock from "../../assets/icons/insured-icon.svg"
import { Link, useParams } from 'react-router-dom'
import data from '../../api/products.json'
import ProductAttribute from '../../components/product-attribute'
import { getProductAttributes } from '../../utils/functions'
import { excludeAttributes } from '../../constants/excludedAttributes'

function ViewProduct() {
    const { pid } = useParams()
    const currentProduct = data.products.find(product => product.pid === pid)    
    
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

    return (
        <div>
            <Link to="/" className="flex px-6 mb-[76px] sm:px-[50px]">
                <div>
                    <img src={ChevronLeft} alt="Chevron Left"/>
                </div>
                <span>Homepage</span>
            </Link>
            <section className='flex flex-col gap-16 px-[6.5%] lg:flex-row'>
                <div className='flex flex-col w-full max-w-full lg:max-w-[560px]'>
                    <div className='w-full '>
                        <img src={currentProduct.imgUrl} className='w-full' alt={ currentProduct.model } /> 
                    </div>
                    <Link to={`/compare/${pid}`} className='flex items-center gap-[10px] rounded-[24px] bg-base-green py-3 px-[18px] mt-[18px] self-center'>
                        <div>
                            <img src={CompareIcon} alt='compare icon'/>
                        </div>
                        <h4 className='text-base-white text-base font-medium md:text-lg'>Compare { currentProduct.model }</h4>
                    </Link>
                </div>
                <div>
                    <div>
                        <h1 className="font-semibold text-3xl text-base-black mb-2 md:text-5xl">{ currentProduct.model }</h1>
                        {
                            !currentProduct.insurable ? 
                                <div className='flex items-center gap-[5px]'>
                                    <img src={UnyteUnlock} className='w-3 md:w-4' alt='Uninsured Unyte'/>
                                    <h4 className='text-sm tracking-[-4%] text-[#A10606] mt-1'>Can not be insured under Unyte </h4>
                                </div>
                                :
                                <div className='flex items-center gap-[5px]'>
                                    <img src={UnyteLock} className='w-3 md:w-4' alt='Insured Unyte'/>
                                    <h4 className='text-sm tracking-[-4%] text-base-black mt-1'>Can be insured under Unyte's Plans</h4>
                                </div>
                        }
                    </div>
                    <div className='my-[53px]'>
                        <h2 className="text-base-black-60 tracking-[-2%] text-xl mb-[10px] font-medium sm:text-2xl">Description</h2>
                        <p className="text-base sm:text-lg">
                            {currentProduct.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base-black-60 tracking-[-2%] text-xl mb-5 sm:text-2xl">Features & Attributes</h2>
                        <div className='flex flex-wrap gap-10 w-full sm:w-[65%]'>
                            {renderProductAttributes()}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ViewProduct