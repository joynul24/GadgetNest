/* eslint-disable react/prop-types */

const Heading = ({title, subtitle, btn}) => {
    return (
        <div className="bg-[#9538E2] container mx-auto rounded-2xl mt-8 text-white pb-48">
            <div  className="container mx-auto flex flex-col items-center text-center pt-12">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="opacity-70 md:max-w-3xl">{subtitle}</p>
            {
             btn &&<button className="btn bg-white text-[#9538E2] rounded-4xl border-0 font-bold mt-8">Shop Now</button>
            }
            </div>
        </div>
    );
};

export default Heading;