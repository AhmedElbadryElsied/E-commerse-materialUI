import { createContext, useContext, useState } from "react";


const DrawerContext = createContext();



 const DrawerProvider = ({children}) => {

      //  Drawer Shopping Cart functions

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <DrawerContext.Provider value={{toggleDrawer , state}}>
        {children}
    </DrawerContext.Provider>
  )
}
export default DrawerProvider

export const useDrawer = () => useContext(DrawerContext);