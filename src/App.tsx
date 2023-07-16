import "./App.css"
import { useState } from "react"


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(isOpen);
  return (

    <div className="grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h2 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href='/' className="hover:text-gray-700 ">Food Ninja</a>
            </h2>

            <div className="px-4 cursor-pointer md:hidden" id="burger" onClick={() => setIsOpen(!isOpen)}>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </div>
          <ul className={isOpen ? "text-sm mt-6 block" : "text-sm mt-6 hidden md:block"}>
            <li className="text-gray-900 font-bold py-1" >
              <a href='#' className="px-4 flex justify-end border-r-4 border-primay"><span>Home</span>
                <svg
                  className="w-6 ml-2 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

              </a>
            </li>
            <li className="py-1">
              <a href='#' className="px-4 flex justify-end border-r-4 border-white"> <span>About</span>
                <svg
                  className="w-6 ml-2 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href='#' className="px-4 flex justify-end border-r-4 border-white"> <span>Contact</span>
                <svg
                  className="w-6 ml-2 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>

        </nav>
      </div>


      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a href='#' className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
          <a href='#' className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 ">Sign Up</a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold " >Recipies</h2>
          <h3 className="text-2xl" >For Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200 ">latest Recipes</h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10 ">
            {/* card go here */}
            <div className="card hover:shadow-lg">
              <img src="\Image\product-img-2.jpg" alt="Graps " className="w-full h-32 sm:h-48 object-cover" />
              <div className="ml-2 mt-m-4">
                <span className="font-bold">Fresh Grapes</span>
                <span className="block text-gray-500 text-sm">Organic fresh fruits</span>
              </div>
              <div className="badge">
                <svg
                  className="w-6 inline-block h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>

                <span className="px-1">25 kg </span>
              </div>
            </div>
            <div className="card hover:shadow-lg">
              <img src="\Image\product-img-1.jpg" alt="Strewberry " className="w-full h-32 sm:h-48 object-cover" />
              <div className="ml-2 mt-m-4">
                <span className="font-bold">Organic Stewberry</span>
                <span className="block text-gray-500 text-sm">Organic fresh fruits</span>
              </div>
              <div className="badge">
                <svg
                  className="w-6 inline-block h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"

                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>

                <span className="px-1">25 Kg </span>
              </div>
            </div>
            <div className="card hover:shadow-lg">
              <img src="\Image\product-img-5.jpg  " alt="Green Apple " className="w-full h-32 sm:h-48 object-cover" />
              <div className="ml-2 mt-m-4">
                <span className="font-bold">Ever Greenapple</span>
                <span className="block text-gray-500 text-sm">Organic fresh fruits</span>
              </div>
              <div className="badge">
                <svg
                  className="w-6 inline-block h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>
                <span className="px-1">25 Kg </span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200 ">Most Popular</h4>
          <div className="mt-8">
            { /* cards go here */}
          </div>
          <div className="flex justify-center" >
            <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 ">Load More</div>
          </div>
        </div>


      </main>
    </div>
  )
}

export default App
