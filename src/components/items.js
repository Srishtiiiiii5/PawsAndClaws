import React from 'react'

const items = () => {
  return (
    <div>
        <div className='flex justify-center items-center text-5xl text-black font-bold mt-8'>
        <div className="bg-base-100 p-6">
      {/* Banner Section */}
      <div className="hero bg-black text-white rounded-lg shadow-lg mb-10 h-[75vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="/assets/Products/section1.PNG" 
            className="max-w-sm rounded-lg shadow-2xl" 
            alt="Dog" 
          />
          <div>
            <p className="text-sm">All Products</p>
            <h1 className="text-5xl font-bold mb-4">Save 50% Off</h1>
            <p className="py-2">Happy Pet, Happy You</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Card 1: Dog Supplies */}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/AccessoriesA1.png" alt="Dog Supplies" />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Accessories</h2>
          <p className='text-xs'>Make them wear stylish things</p>
          </div>
        </div>

        {/* Card 2: Cat Supplies */}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/BowlsAndFeedersA1.png" alt="Cat Supplies" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bowl and Feeders</h2>
            <p className='text-xs'>Treat them in amazing stuff</p>

          </div>
        </div>

        {/* Card 3: Other Utensils */}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/ClothingA1.png" alt="Other Utensils" />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Clothing</h2>
          <p className='text-xs'>Twin with your friend</p>

          </div>
        </div>
{/*card 4*/}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/GroomingA1.png" alt="Other Utensils" />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Grooming</h2>
          <p className='text-xs'>Keep their hair shiny</p>

          </div>
        </div>
        {/*card 5*/}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/TagsB1.png" alt="Other Utensils" />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Tags</h2>
          <p className='text-xs'>Customize tags with their name</p>

          </div>
        </div>

      {/*card 6*/}

      <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/TreatsA3.png" alt="Other Utensils" />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Treats</h2>
          <p className='text-xs'>Taasty, healthy and what not</p>
          </div>
        </div>


      </div>
      

      
    </div>
    </div>
      
    </div>
  )
}

export default items
