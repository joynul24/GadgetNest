import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";

const Home = () => {
    return (
        <div>
            {/* Heading */}
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`} btn={true}></Heading>
            {/* Banner */}
            <Banner></Banner>
        </div>
    );
};

export default Home;