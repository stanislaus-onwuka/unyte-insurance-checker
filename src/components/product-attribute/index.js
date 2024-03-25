import React from 'react'

function ProductAttribute({ attributeTitle, attributeValue }) {
    return (
        <div>
            <h6 className='text-xs tracking-[-2%] uppercase text-base-black-60 font-medium sm:text-sm'>
                {attributeTitle.replace(/_/g, ' ')}
            </h6>
            <h3 className="text-base-black tracking-[-2%] text-base font-medium sm:text-lg">
                {attributeValue}
            </h3>
        </div>
    )
}

export default ProductAttribute