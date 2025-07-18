import { createContext, useContext, useState } from "react";


const DrawerRevueContext = createContext({});


const DrawerRevueContextProvider = ({children})=>{


     
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    return(

<DrawerRevueContext.Provider value={{state , setState , toggleDrawer}}>
        {children}
</DrawerRevueContext.Provider>


    );


}


export default DrawerRevueContextProvider;

export const useDrawerRevueContext = () => useContext(DrawerRevueContext);