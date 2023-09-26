import PageHead from "../../compenents/pageHead/PageHead"
import FrontBodySvg from "../../compenents/bodySvg/FrontBodySvg" 
import BackBodySvg from "../../compenents/bodySvg/BackBodySvg" 
import "./workouts.css"

const Workouts = () => {

    return (
        <>
        <PageHead title="Exercises by muscle group" paragraph="Choose the muscle group you want to target"/>
        <div className="workouts__bodies container">
            <FrontBodySvg />
            <BackBodySvg />
        </div>
        </>
    )
}

export default Workouts