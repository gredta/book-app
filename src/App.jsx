
import './index.css';
import * as Icons from "react-feather";



function App() {

  return (

  <div className='bg-glass w-4/5 text-white mx-auto mt-20 rounded-3xl border-3 drop-shadow-lg grid grid-cols-4 mb-20'>
    {/* Left Sidebar */}
      <div className='bg-glass text-navy rounded-l-3xl'>
        <h1 className='text-3xl font-kaoly font-bold text-center mt-8 mb-16'>Bookshelf</h1>
        <img className='w-20 mx-auto' src={"/generic-avatar.svg"} alt="avatar" />
        <h2 className='text-2xl font-lora font-extrabold text-center mt-6 mb-20'>Jane Doe</h2>
        <div className="w-fit mx-auto">
          <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
            <Icons.User className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Profile</h3></div></a>
          <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
            <Icons.Bell className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Notifications</h3></div></a>
          <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
          <Icons.Bookmark className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Collections</h3></div></a>
          <a href=""><div className="justify-left flex mx-auto gap-4 my-8 items-center">
          <Icons.Settings className="w-7 h-7 text-primary" /><h3 className="text-xl font-lora text-primary">Settings</h3></div></a>
        </div>
      </div>
    {/* Right Sidebar */}
    <div className='w-8/9 mx-auto rounded-r-3xl col-span-3 '>
        <div className='mt-8 bg-glass rounded-xl px-4 py-2 my-12 flex place-content-between'>
          <div className="text-navy justify-left flex items-center gap-4"><a href="">
            <Icons.Menu className="w-5 h-5 text-primary"/></a><h3 className="text-md font-lora text-primary">What do you want to read?</h3>
          </div>
        <div className="flex justify-right items-center text-navy">
          <Icons.Search className="w-5 h-5 text-primary" />
        </div>
      </div>
      <h2 className="font-playfair text-2xl text-navy my-8 font-black">Featured Books</h2>
      <div className=' bg-glass rounded-xl px-8 mx-auto py-8 flex gap-8'>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
      </div>
      <div className=' bg-glass rounded-xl px-8 mx-auto pb-8 flex gap-8 mb-10'>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
        <div className='w-45 h-60 bg-navy rounded-2xl'></div>
      </div>
    </div>
    
  </div>
  );
}

export default App;
