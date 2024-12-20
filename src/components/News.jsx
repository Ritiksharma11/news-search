import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NewsCard from './NewsCard';

const News = () => {
  const [search, setSearch] = useState('latest news');
  const [news, setNews] = useState(null);

  const APIKey = '620caed95fdd41528ce4d4d47b37998f'

  useEffect(() => {
    fetchNews();
  }, [search])

  const clickInput = (e) => {
    setSearch(e.target.value);
  }

  const fetchNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${APIKey}`);
    const data = await response.json();
    console.log(data.articles)
    setNews(data.articles)
  }

  return (
    <div>
      <nav className='bg-blue-300 flex justify-between py-2 px-2 md:px-5 xl:px-12 '>
        <div>
          <h1 className='text-3xl md:text-4xl font-semibold text-purple-950'>NewsSearch</h1>
        </div>
        <div className='flex items-center gap-3'>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder='Search News' className='px-2 py-1 border-none outline-none shadow-md shadow-slate-500 rounded-md '
          />
          <button onClick={fetchNews} className='py-1 px-4 bg-blue-700 text-white font-semibold rounded-full '>Search</button>
        </div>
      </nav>
      <div className='flex w-full justify-center gap-5 py-5'>
        <button onClick={clickInput} value='sports' className='py-1 px-2 bg-purple-800 font-semibold text-white rounded-full'>Sports</button>
        <button onClick={clickInput} value='politics' className='py-1 px-2 bg-purple-800 font-semibold text-white rounded-full'>Politics</button>
        <button onClick={clickInput} value='health' className='py-1 px-2 bg-purple-800 font-semibold text-white rounded-full'>Health</button>
        <button onClick={clickInput} value='entertainment' className='py-1 px-2 bg-purple-800 font-semibold text-white rounded-full'>Entertainment</button>
      </div>

      <div>
        {
          news ? <NewsCard data={news} /> : null
        }
      </div>
    </div>
  )
}

export default News