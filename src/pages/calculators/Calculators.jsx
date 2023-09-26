import PageHead from "../../compenents/pageHead/PageHead"
import calculators from "../../data/calculators"
import CalculatorItem from "../../compenents/calculatorItem/CalculatorItem"
import "./calculators.css"

const Calculators = () => {
    return (
      <>
        <PageHead title="Track your progress" paragraph="Find and click on the relevant fitness calculator below." />
        <div className="calculators container">
          {calculators.map((item) => (
            <CalculatorItem
              key={item.id}
              calculator={item.calculator}
              component={item.component}
            />
          ))}
        </div>
      </>
    )
  }
  
  export default Calculators