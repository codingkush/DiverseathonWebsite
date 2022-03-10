import classes from "./button.module.css";

const CustomGradientButton = ({ name }) => {
    return (
        <>
            <span className={classes.gradientButton}>{name}</span>
        </>
    );
};
export default CustomGradientButton;
