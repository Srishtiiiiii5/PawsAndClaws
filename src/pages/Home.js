import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
        {/* Section 1: Full-screen Image */}
        <section className="h-screen bg-black mb-12 ml-8 mr-8"> {/* Adds margin below the section */}
          <img src="/Assets/Home/section1.png" alt="Image 1" className="w-full h-full object-cover" />
        </section>
{/* --------------- page 2 --------------*/}
        <section className="flex items-center justify-center h-screen bg-white">
      {/* Left Side - Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/263/888/large_2x/cute-little-golden-retriever-dog-on-white-background-generative-ai-free-photo.jpg" // Replace with the correct path of your image
          alt="Cute Dog"
          className="w-[75%] object-contain"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-1/2 p-8">
        <h2 className="text-orange-500 font-bold uppercase mb-4">About Us</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          We Love to Take Care of Your Pets
        </h1>
        <p className="text-gray-600 mb-6">
          PawsCare is the largest specialty pet retailer of services and solutions for the lifetime needs of pets. At PawsCare, we love pets, and we believe pets make us better people.
        </p>

        {/* List of Features */}
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">✔</span>
            <span className="text-gray-700">Skilled Personnel</span>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">✔</span>
            <span className="text-gray-700">Best Veterinarians</span>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">✔</span>
            <span className="text-gray-700">Pets Care 24/7</span>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">✔</span>
            <span className="text-gray-700">Quality Food</span>
          </li>
        </ul>
      </div>
    </section>


{/* --------------- page 3 --------------*/}


            {/* Section 2: Full-screen Image */}
            <section className="h-screen bg-gray-500 mb-4"> {/* Adds margin below the section */}
          <img src="/Assets/Home/section2.jpg" alt="Image 2" className="w-full h-full object-cover" />
        </section>
{/* --------------- page 4 --------------*/}

<section className="flex items-center justify-center h-screen">
      {/* Left Side - Text Content */}
      <div className="w-1/2 p-8 mr-8 ml-8">
        <h2 className="text-gray-500 uppercase tracking-wide mb-2">Our promise to you...</h2>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Happy pets, happy humans
        </h1>
        <p className="text-gray-600 mb-6">
          Come see how PawsAndClaws helps bring out the best moments for your pets with 
          love, care, and affection. With our team of experts and specialists, we 
          ensure your pets live their happiest lives.
        </p>

        <a href="#" className="text-indigo-600 font-semibold underline">
          Learn more
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/assets/Home/section3.png" // Replace with the correct path of your image
          alt="Happy Pet"
          className="w-[75%] object-contain"
        />
      </div>
    </section>
      </div>
{/*-----------------------Page 5----------------------- */}

<div className="bg-base-100">
      <h1 className="text-6xl font-bold text-black uppercase tracking-widest text-center p-6">
        COOLEST T-SHIRTS
      </h1>
    </div>
<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
    <img src="/assets/Home/section5a.png"/>
  </div>
  <div className="divider divider-horizontal"></div>
  <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
  <img src="/assets/Home/section5b.png"/>
  </div>
</div>

{/*page  6 */}
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
        </div>

        {/* Card 2: Cat Supplies */}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/BowlsAndFeedersA1.png" alt="Cat Supplies" />
          </figure>
        </div>

        {/* Card 3: Other Utensils */}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/ClothingA1.png" alt="Other Utensils" />
          </figure>
        </div>
{/*card 4*/}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/GroomingA1.png" alt="Other Utensils" />
          </figure>
        </div>
        {/*card 5*/}
        <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/TagsB1.png" alt="Other Utensils" />
          </figure>
        </div>

      {/*card 6*/}

      <div className="card bg-white shadow-lg">
          <figure>
            <img src="/assets/TreatsA3.png" alt="Other Utensils" />
          </figure>
        </div>
      </div>
      

      
    </div>
    </div>
    </div>



    
  )
}

export default Home
