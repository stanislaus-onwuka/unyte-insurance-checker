import React, { useEffect, useState } from 'react'
import SearchIcon from '../../assets/icons/search.svg'
import { Link } from 'react-router-dom'
import CarImg from '../../assets/images/Toyota_Corolla.jpg'
import data from "../../api/products.json"
import {classNames} from "../../utils/functions"
import useDebounce from '../../hooks/useDebounce'

function ProductSearch() {
  const [searchInput, setSearchInput] = useState("")
  const [filteredResults, setFilteredResults] = useState(data.products)
  const debouncedSearchValue = useDebounce(searchInput, 200)
  
  useEffect(() => {
    const results = data.products.filter(product =>
      product.model.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );

    setFilteredResults(results);
  }, [debouncedSearchValue]);

  const renderSearchResults = () => {
    if (filteredResults.length > 0 && debouncedSearchValue) {
      return filteredResults.map((result, idx) => {
        return (
          <Link to={`/view/${result.pid}`} key={idx}>
            <div className='flex gap-3 p-2 border-b-[1px] border-base-light-green duration-150 hover:bg-base-light-green'>
              <div className='max-w-[80px]'>
                <img src={CarImg} alt='Car'/>
              </div>
              <div>
                <h3 className='text-base'>{ result.model }</h3>
                <h6 className='text-xs text-base-black-60'>{ result.make || result.brand }</h6>
              </div>
            </div>
          </Link>
        )
      })
    }

    if (filteredResults.length === 0 && debouncedSearchValue) {
      return (
        <h3 className='text-sm px-4 py-5'>No results found</h3>
      )
    }
  }

  return (
    <div className='relative max-w-[600px]'>
      <div className='flex border-4 border-base-green rounded-[40px] p-[3px]'>
        <div className='bg-base-green p-[11px] rounded-full'>
          <img src={SearchIcon} alt='Search icon'/>
        </div>
        <input
          type='text'
          onChange={e => setSearchInput(e.target.value)}
          placeholder='Enter product name'
          className='text-lg !font-body w-[85%] bg-transparent ml-2 focus:outline-[0.05] focus:outline-dotted'
        />
      </div>
      {/* Search results */}
      <div className={ classNames('absolute rounded bg-base-white top-full w-[95%] z-[2] left-4 shadow-md mt-2', debouncedSearchValue ? "block" : "hidden")}>
        {renderSearchResults()}
      </div>
    </div>
  )
}

export default ProductSearch