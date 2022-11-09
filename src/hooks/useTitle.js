import { useEffect } from "react";


const useTitle = title =>{
    useEffect(() => {
        document.title = `Food Court - ${title}`;
    }, [title]);
}

export default useTitle;