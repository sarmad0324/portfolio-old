import React from 'react'

const Card = (props) => {
    return (
      
            
            <div className="w-11/12 m-auto " >
                <div className="h-full rounded-xl overflow-hidden  bg-gray-800 text-gray-500">
                    <img className="lg:h-80 md:h-64 2xl:h-96 w-full object-cover object-center hover:border-gray-400" src={props.img} alt="blog" />
                    <div className="p-6">
                        <h1 className="title-font text-lg  mb-3 font-bold text-slate-200">{props.title}</h1>
                        <p className="leading-relaxed mb-3">{props.detail}</p>
                        <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-500" href={props.link} target="blank">Go to Website
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>

            
   
    )
}

export default Card