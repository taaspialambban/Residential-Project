import { NavLink } from "react-router-dom";

const ResidentialPages = ({residency}) => {
    console.log(residency)
    const {image,estate_title,id,segment_name,description,price,status,area,location,facilities} = residency
    return (
        <div className="">
           <NavLink to={`/userProfile/${residency.id}`}>
           <div
            className="shadow-lg h-[780px] drop-shadow-2xl border border-[#13131326] py-4">
            <img className="h-[250px] mx-auto w-[350px]" src={image} alt="" />
           <div className="px-4 font-Poppins text-lg pt-4">
           <h2 className=""> {id} </h2>
            <h2 className="font-Oswald text-2xl">{estate_title}</h2>
            <h2 className="font-Tagesschrift text-xl"> {segment_name} </h2>
            <h2> {description} </h2>
            <h2> {price} </h2>
            <h2> {status} </h2>
            <h2> {area} </h2>
            <h2> {location} </h2>    residentialPages
            <h2>{
                facilities.map((facility)=>(
                    <li>{facility}</li>
                ))
                }</h2>
           </div>
        </div>
           </NavLink>
           <div className="h-full">
               <button className="btn mx-6 -mt-28 border-none bg-sky-600 text-white">View Property</button>
               </div>
        </div>
    );
};

export default ResidentialPages;