import {useSelector} from "react-redux";

export const Like=()=>{
    const {wishlist} = useSelector(({wishlist: {wishlist}}) => ({
        wishlist
    }))
    return(
      <div>
          {
              wishlist&&wishlist.map(item=><h1>{item.original_title}</h1>)
          }
      </div>
  )
}