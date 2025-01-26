import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import ProductContainer from "../ProductContainer/ProductContainer";

const Home = () => {
    return (
        <div className="">
            {/* Heading */}
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`} btn={true}></Heading>
            {/* Banner */}
            <Banner></Banner>
            {/* Show all Products */}
            <ProductContainer></ProductContainer>
        </div>
    );
};

export default Home;