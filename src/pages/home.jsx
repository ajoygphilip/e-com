import ProductCard from "../components/productCard"


export default function Home() {
    return(
        <div className=' flex flex-wrap gap-[10px] pl-24 pr-24 p-8'>
          
        
            {[1,2,3,4,5,6,7,8,9,0].map(n=><ProductCard/>)}
         
        </div>
    )
};
