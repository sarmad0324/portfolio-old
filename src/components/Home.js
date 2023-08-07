
const Home = () => {
  return (
    <div className="bg-slate-800 text-slate-100" id="/">
      <div className="w-80 m-auto text-center py-36 md:w-3/5 md:m-auto md:py-44 xl:py-56">
        <img alt="profile" src={require("../assets/profile.png")}
          className="border rounded-full border-gray-600 w-48 h-48 m-auto md:w-60 md:h-60 hover:border-gray-900"
        />
        <h1 className="text-sm font-bold py-3 md:text-base">Hello, I am Sarmad!</h1>
        <p className="font-bold text-3xl py-8 md:text-5xl">A frontend developer <br></br>specialized in React</p>
        <a href="https://drive.google.com/file/d/1mkYkHjR2BJj3iqwOBGzCHLhEvk8Tccoe/view?usp=drive_link" target="blank">
          <button  type="button"  className=" text-center bg-indigo-800 border-0 py-2 px-8 focus:outline-none  hover:bg-indigo-600 rounded text-lg disabled:cursor-not-allowed">
          Download CV</button>
        </a> 
      </div>
      <hr className='w-4/5 m-auto border-gray-900'></hr>
    </div>
  )
}

export default Home
