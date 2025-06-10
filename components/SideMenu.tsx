import React, {FC} from "react";
import Logo from "./Logo";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6">
        <div className="flex items-center justify-between">
            <Logo className='text-white' spanDesign="group-hover:text-white"/>
            <button onClick={onClose} className="hover:text-shop_light_green hoverEffect">X</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideMenu;
