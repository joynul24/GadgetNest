/* eslint-disable react/prop-types */

const Heading = ({title, subtitle, btn}) => {
    return (
        <div className="flex flex-col items-center text-center mt-12">
            <h1 className="text-6xl font-bold mb-6">{title}</h1>
            <p className="opacity-70 md:max-w-3xl">{subtitle}</p>
            {
             btn &&<button className="btn bg-white text-[#9538E2] rounded-4xl border-0 font-bold mt-8">Shop Now</button>
            }
        </div>
    );
};

export default Heading;