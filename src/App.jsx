
import './index.css';
import * as Icons from "react-feather";



function App() {

  return (

  <div className='bg-glass w-4/5 text-white mx-auto mt-20 rounded-3xl border-3 drop-shadow-lg grid grid-cols-2 gap-4'>
    {/* Left Sidebar */}
      <div className='bg-glass w-3/5 text-navy rounded-l-3xl'>
        <h1 className='text-3xl font-kaoly font-bold text-center mt-8 mb-20'>Bookshelf</h1>
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
    <div className=''></div>
    
  </div>
  );
}

export default App;
