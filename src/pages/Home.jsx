import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "../Shares/Banner";
import ResidentialPages from "../Shares/ResidentialPages";
import { useState } from "react";


const Home = () => {
    const Residences = useLoaderData();
    const [ShowAll , setShowAll] = useState(false);

    const displayedData = ShowAll ? Residences : Residences.slice(0, 3);
    console.log(displayedData)

    return (
       <HelmetProvider>
         <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Residential Home page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <h2 className="text-center w-[400px] md:w-[800px] lg:w-full mt-10 font-Oswald text-teal-500 text-4xl font-semibold">Our Residences</h2>
            <div className="w-[400px] md:w-[800px] lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-5 text-black">
            {
                 displayedData.map((residency) => (
                    <ResidentialPages key={residency.id} residency={residency} />
                  ))
            }
            </div>
             {Residences.length > 3 && (
        <div className="text-center w-[400px] md:w-[800px] lg:w-full mt-6">
          <button
            onClick={() => setShowAll(!ShowAll)}
            className="bg-lime-500 hover:bg-lime-700 text-xl font-bold font-Oswald text-white px-5 py-2 rounded shadow mb-10"
          >
            {ShowAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
            </div>
       </HelmetProvider>
    );
};

export default Home;