import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CarLink from '../../assets/images/Toyota_Corolla.jpg'
import { Link } from 'react-router-dom'

function ProductItem({ product, compareMode = false }) {
    const { pid, model, category } = product
    // eslint-disable-next-line
    const [ _ , setSearchParams] = useSearchParams();

    const handleCompareNavigation = () => {
        setSearchParams({ compareWith: pid });
    }
    
    if (compareMode) {
        return (
            <button onClick={handleCompareNavigation}>
                <div className="relative rounded-[10px] border-[1.5px]">
                    <div className='object-fill rounded-t-[10px] h-full'>
                        <img src={CarLink} className='rounded-[10px] h-full' alt='car' />
                    </div>
                    <div className="absolute bottom-0 w-full px-[14px] py-[18px] bg-gradient-to-b from-transparent to-base-black rounded-b-[10px]">
                        <div className=' mb-[30px]'>
                            <h3 className='text-lg text-base-white mb-[2px] font-medium -tracking-wider sm:text-2xl'>{ model }</h3>
                            <h6 className='text-sm text-base-white-65 font-medium'>Category: {category}</h6>
                        </div>
                    </div>
                </div>
            </button>
        )
    }

    return (
        <div className="relative rounded-[10px] border-[1.5px]">
            <div className='object-fill rounded-t-[10px] h-full'>
                <img src={CarLink} className='rounded-[10px] h-full' alt='car' />
            </div>
            <div className="absolute bottom-0 w-full px-[14px] py-[18px] bg-gradient-to-b from-transparent to-base-black rounded-b-[10px]">
                <div className=' mb-[30px]'>
                    <h3 className='text-lg text-base-white mb-[2px] font-medium -tracking-wider sm:text-2xl'>{ model }</h3>
                    <h6 className='text-sm text-base-white-65 font-medium'>Category: {category}</h6>
                </div>
                <div className="flex gap-[11px]">
                    <Link to={`/view/${pid}`} className="py-[10px] bg-base-green text-base-white rounded-lg duration-150 hover:text-base-light-green w-full text-center">
                        View More
                    </Link>    
                    <Link to={`/compare/${pid}`}  className="py-[10px] border-2 border-base-green text-base-white rounded-lg w-full text-center">
                        Compare
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default ProductItem