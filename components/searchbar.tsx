'use client'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setSearchQuery } from '@/app/store/features/search-bar/searchpokemonSlice'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleSearch = () => {
    dispatch(setSearchQuery(search))
    router.push('/search-result')
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event)
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <div className='flex items-center bg-white rounded-full p-1 text-black'>
      <input
        type='text'
        placeholder='Search...'
        className='flex-grow outline-none px-2 py-1 rounded-full'
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className='bg-red-500 text-white px-4 py-1 rounded-full ml-2'
      >
        Search
      </button>
    </div>
  )
}
export default SearchBar