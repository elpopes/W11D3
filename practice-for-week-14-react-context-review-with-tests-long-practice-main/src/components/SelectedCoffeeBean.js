import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useCoffeeContext } from "../context/CoffeeContext";




const SelectedCoffeeBean = () => {

    const {coffeeBean} = useCoffeeContext()
    return <div className="selected-coffee">
    <h2>{coffeeBean.name}</h2>
  </div>;
    debugger
};

export default SelectedCoffeeBean;
