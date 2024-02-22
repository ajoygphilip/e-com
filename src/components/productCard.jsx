export default function ProductCard(){
    return(
        <div className="w-[230px] p-4 h-[270px] flex flex-col gap-[8px] justify-center items-center bg-white border hover:shadow-xl transition ease-in-out delay-100">

            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/697/882/small_2x/the-blank-soda-can-isolated-the-grey-background-generate-ai-photo.jpg" alt="" />
            <p className="self-start text-[12px]">As low as $4</p>
            <p className="self-start text-[12px]">Product Name</p>

        </div>
    )
}