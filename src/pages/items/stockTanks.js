import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function StockTanks() { 
    const stockTanksData = {
        name: "Stock Tanks",
        images: [
            "images/15.png",
            "images/16.png"
        ],
        rentPrice: "$50 / Unit",
        stock: "2 Units",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, On",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Robust Steel Construction",
        description: "Made from high-quality steel, these stock tanks are built to last, offering both durability and a sleek, industrial look that complements any event setting.",
        },
        {
        icon: GiResize,
        title: "Spacious and Functional",
        description: "With ample capacity, these tanks can hold a large quantity of ice and drinks, making them ideal for keeping multiple beverages cold and easily accessible for your guests.",
        },
        {
        icon: GiSpanner,
        title: "Versatile Use",
        description: "Perfect for outdoor events or indoor gatherings, the steel stock tanks provide a practical solution for beverage cooling, enhancing your event with both style and functionality.",
        },
        ],
 };

 return <OfferingsPageTemplate item={stockTanksData} />;
}

export default StockTanks;