import React from 'react'

const Converter = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
  <div className='container mx-auto'>
    <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
      Converter
    </h2>
    <div className="grid grid-cols-4 gap-x-4"> {/* 1ère ligne*/}
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"  
        style={{ backgroundImage: "url('/Produits/1.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 1
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"  
        style={{ backgroundImage: "url('/Produits/2.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 2
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"  
        style={{ backgroundImage: "url('/Produits/3.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 3
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4" 
        style={{ backgroundImage: "url('/Produits/4.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 4
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-x-4">
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/5.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 1
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/6.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 2
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/7.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 3
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/8.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 4
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-x-4">
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/9.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 1
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/10.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 2
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/11.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 3
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 rounded-lg mb-4"
        style={{ backgroundImage: "url('/Produits/12.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-xl rounded-lg">
          Texte 4
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Converter