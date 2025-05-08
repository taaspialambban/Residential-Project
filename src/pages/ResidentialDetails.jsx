import { useLoaderData } from "react-router-dom";


const ResidentialDetails = () => {
  
    const residency = useLoaderData();
   
    return (
        <div>
            <div style={{backgroundImage:`url(${residency.image})`}}
             className="h-[300px] lg:h-[400px] w-[400px] lg:w-[1180px] lg:mx-auto mt-6 relative bg-center bg-cover bg-[#C4C4C4]">
                <div className="bg-linear-65 text-center space-y-3 pt-20 h-[300px] lg:h-[400px] from-[#000000] to-[#00000000]">
                <h2 className="font-Oswald text-3xl font-bold">{residency.estate_title}</h2>
                <h2 className="font-Poppins text-xl font-semibold"> {residency.location} </h2>
                </div>
             </div>
            <div
            className="shadow-lg h-[350px] mt-8 w-[400px] lg:w-[700px] lg:mx-auto mb-10 drop-shadow-2xl text-black border border-[#13131326] py-4">
           <div className="px-6 space-y-2 font-Poppins text-lg pt-4">
            
            <h2 className="font-Tagesschrift text-xl"> {residency.segment_name} </h2>
            <h2 className="text-base"> {residency.description} </h2>
            <h2> {residency.price} </h2>
            <h2> {residency.status} </h2>
            <h2> {residency.area} </h2>
               
            <h2>{
                residency.facilities.map((facility)=>(
                    <li>{facility}</li>
                ))
            }
            </h2>
                
           </div>
        </div>
        </div>
    );
};

export default ResidentialDetails;