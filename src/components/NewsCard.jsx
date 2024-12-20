import React from 'react'

const NewsCard = ({ data }) => {
  return (
    <div className='flex gap-5 justify-center flex-wrap max-w-7xl mx-auto py-8 md:mx-2'>
      {
        data.map((item, index) => {
          if (!item.urlToImage) {
            return null
          }
          else {
            return (
              <div className='w-80 border-2 rounded-md flex flex-col justify-around p-1 '>
                <img src={item.urlToImage} alt="image" className='w-80 h-40 bg-cover ' />
                <div className='p-2'>
                  <h1 className='text-lg font-bold pb-4'>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <button onClick={()=>window.open(item.url)} className='mx-2 my-4 px-4 py-1 bg-blue-700 text-white  '>Read More</button>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default NewsCard