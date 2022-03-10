import CustomGradientButton from "../components/buttons/gradient-button";
import CustomOutlinedButton from "../components/buttons/outlined-button";

const Home = (props) => {
    return (
        <div style={{ background: "blue", height: "150vh" }}>
            <h1>navbar </h1>
            <h1>header </h1>
            <h1>about </h1>
            <h1>registration </h1>
            <h1>events </h1>
            <h1>schedule </h1>
            <h1>guide and rules </h1>
            <h1>speakers </h1>
            <h1>prizes </h1>
            <h1>sponsors </h1>
            <h1>faqs </h1>
            {/* the button component here */}
            <CustomGradientButton name="Register" />
            <CustomOutlinedButton name="Join Discord" />
        </div>
    );
};
export default Home;
