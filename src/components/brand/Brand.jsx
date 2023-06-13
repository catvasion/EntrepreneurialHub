import React from 'react'
import './brand.css'
import { sauroncyber, mithriltech, moriasoft } from './imports'

const Brands = [
  {
    company: sauroncyber,
    image: sauroncyber,
  },
  {
    company: mithriltech,
    image: mithriltech,
  },
  {
    company: moriasoft,
    image: moriasoft,
  },
]


const Brand = () => {
  return (
    <div className='company__brand '>
      
       {
        Brands.map(brand => (
          <div>
          <img src={brand.image} alt={brand.company} />
          </div>
        ))
       }
       
        {/* <div>
          <img src={sauroncyber} alt='sauroncyber'/>
        </div>

        <div>
          <img src={mithriltech} alt='mithriltech'/>
        </div>

        <div>
          <img src={moriasoft} alt='moriasoft'/>
        </div> */}

    </div>
  )
}
export default Brand

// import React from 'react'
// import './brand.css'
// import { hobbitVentures, elvenEnterprises, gondorTech, dwarvenInnovations } from './imports'

// const Brand = () => {
//   return (
//     <div className='company__brand section__padding'>
//       <div>
//         <img src={hobbitVentures} alt='Hobbit Ventures' />
//       </div>

//       <div>
//         <img src={elvenEnterprises} alt='Elven Enterprises' />
//       </div>

//       <div>
//         <img src={gondorTech} alt='Gondor Tech' />
//       </div>

//       <div>
//         <img src={dwarvenInnovations} alt='Dwarven Innovations' />
//       </div>
//     </div>
//   )
// }

// export default Brand

//D2D6DC colour