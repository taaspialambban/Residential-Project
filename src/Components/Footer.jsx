import { FcHome } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 w-[400px] md:w-[800px] lg:w-full divide-y dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-between space-x-11 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-3xs ">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <FcHome className="text-3xl"></FcHome>
				</div>
				<span className="self-center text-2xl font-semibold">EliteLiving</span>
			</a>
		</div>
        
		<div className="grid text-sm 
        gap-x-64 gap-y-8 lg:w-full sm:grid-cols-4">
            
			<div className="space-y-3 lg:w-[200px]">
				<h3 className="tracking-wide text-2xl font-semibold uppercase dark:text-gray-900">Quick Links:</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Home</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Update Profile</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">About Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3 lg:-mx-8 lg:w-[270px]">
				<h3 className="tracking-wide text-xl font-bold uppercase dark:text-gray-900">Contact Information:</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Email</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Phone</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Address</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3 lg:w-[200px]">
				<div className="uppercase text-2xl font-semibold dark:text-gray-900">Social media</div>
				<div className="flex text-2xl justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<FaFacebook></FaFacebook>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						<TfiTwitterAlt></TfiTwitterAlt>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<FaInstagram></FaInstagram>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
</footer>
    );
};

export default Footer;