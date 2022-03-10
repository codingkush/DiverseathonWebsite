import classes from "./button.module.css";

const CustomOutlinedButton = ({ name }) => {
    return (
        <>
            <span className={classes.outlinedButton}>{name}</span>
        </>
    );
};
export default CustomOutlinedButton;
