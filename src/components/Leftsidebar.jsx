    
import './index.css';
import * as Icons from "react-feather";


export default function Leftsidebar() {
    return (
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
  );
}

export default Leftsidebar;