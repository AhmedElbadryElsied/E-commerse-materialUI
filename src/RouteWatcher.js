import nProgress from "nprogress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import "nprogress/nprogress.css"



nProgress.configure({showSpinner:false})


function RouteWatcher() {
  
    const location = useLocation();

    useEffect(() => {
      
        nProgress.start();
        const timer = setTimeout(()=> nProgress.done(), 500)
        
        return () => {

            clearTimeout(timer);
            nProgress.done();
        };
    }, [location.pathname]);

    return null
    
}

export default RouteWatcher;