import Card from './Card'
import Data from './Data'

const Project = () => {

  const card = Data.map(i => {
    return(
        <Card
          title = {i.title}
          detail = {i.detail}
          img = {i.img}
          link = {i.link}
        />
    )
})
  return (
    <div className='bg-gray-900 text-slate-100' id='project'>
      <h1 className=' text-3xl text-center py-16'>Featured Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 pb-10'>  {card}   </div>
      <hr className='w-4/5 m-auto border-gray-800'></hr>
    </div>
  )
}

export default Project
