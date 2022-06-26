

const Nav = () => {

    return(
        <nav className="nav-header w-full  h-20 flex items-center">
        <div className="w-96">
          <h1 className="text-center text-4xl md:text-3xl md:text-left font-bold pl-4">
            <a href="/" className="text-green-500">HIRE</a> PURCHASE
          </h1>
        </div>
        <div className=" hidden md:flex  flex-row flex w-3/4 justify-end items-center mr-20 ">
          <ul className="flex ">
            <li className="mx-2">
                <a href="/" className="text-lg md:text-2xl hover:text-green-500 font-normal">Requests</a>
            </li>
            
            <li className="mx-2">
                <a href="/" className="text-lg md:text-2xl hover:text-green-500 font-normal text-black">Accounts</a>
            </li>
  
            <li className="mx-2">
                <a href="/" className="text-lg md:text-2xl hover:text-green-500  font-normal text-black">Reviews</a>
            </li>
  
            <li className="mx-2">
                <a href="/" className="text-lg md:text-2xl hover:text-green-500 font-normal text-black">Payments</a>
              </li>
          </ul>
          </div> 
      </nav>

    );
}

export default Nav