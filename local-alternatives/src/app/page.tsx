import Image from "next/image"
import SearchBar from "@SMART/components/SearchBar"

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden flex items-center justify-center flex-col text-center space-y-8 mb-24">
        <div className="font-baskerville text-4xl lg:text-6xl">
          Discover Canadian <br />alternatives <br/>for everyday <br />products
        </div>
        <div className="">   
          <SearchBar />
        </div>
        <div className="animate-marquee relative w-full overflow-hidden flex pt-10 gap-x-2 font-baskerville text-[20px] items-center">
          <div className="">
            <Image alt = "maple leaf" src={"/images/mapleLeaf.png"} width={200} height={20}></Image>
          </div>
          <div className="max-w-100">
            Swap imports for our local favorites!
          </div>
          <div className="">
            <Image alt = "maple leaf" src={"/images/mapleLeaf.png"} width={200} height={20}></Image>
          </div>
          <div className="max-w-100">
            Choose from over 10000+ products!
          </div>
          <div className="">
            <Image alt = "maple leaf" src={"/images/mapleLeaf.png"} width={200} height={20}></Image>
          </div>
          <div className="max-w-100">
            Support local businesses!      
          </div>
          <div className="">
            <Image alt = "maple leaf" src={"/images/mapleLeaf.png"} width={200} height={20}></Image>
          </div>
        </div>
    </div>
    {/* <div className="bg-amber-100 mt-10 lg:mt-0">
      <div className=" flex flex-col lg:items-center justify-center lg:flex-row pt-25 lg:pt-40 items-left">
        <div className="flex items-center">
        <Image className= "fade-in lg:w-[300px] ml-10" alt = "maple syrup" src={"/images/maplesyrup.png"} width={200} height={20}></Image>
        <div className="font-baskerville text2xl ml-10 block lg:hidden"> Find Canadian-alternatives to your favorite products </div>
        </div>
          <Image className= "fade-in lg:w-[300px] relative z-1 ml-40 -mt-5 " alt = "beavertails" src={"/images/beaverTails.png"} width={200} height={20}></Image>
          <Image className= "fade-in lg:w-[400px] relative z-0 ml-15 -mt-6"alt = "coffee crisp" src={"/images/coffeeCrisp.png"} width={200} height={20}></Image>
      </div>
      <div className="flex items-center justify-center">
        <div className="font-baskerville mt-30 mb-30 text-4xl  hidden lg:block"> Find Canadian-alternatives to your favorite products </div>
      </div>
    </div> */}
    <div className="rounded-t-3xl flex fixed bottom-0 w-full h-18 bg-red-300 items-center justify-center">
      <Image className= "transform scale-x-[-1]" alt = "search" src={"/svgs/searchAnimateSVG.svg"} width={50} height={50}></Image>
    </div>
  </div>
  )
}