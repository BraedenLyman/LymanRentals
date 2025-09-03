import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function WaterJugs() { 
    const waterJugsData = {
        name: "Water Jugs",
        images: [
            "images/14.png"
        ],
        rentPrice: "$3 / Unit",
        stock: "24 Units",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Classic Glass Design",
        description: "The jugs are made from high-quality glass, offering a clear view of your beverages while adding a touch of sophistication to your drink presentation.",
        },
        {
        icon: GiResize,
        title: "Vintage-Style Lids",
        description: "Each jug is topped with a charming old-fashioned lid, providing a nostalgic touch while keeping your drinks fresh and secure.",
        },
        {
        icon: GiSpanner,
        title: "Elegant and Practical",
        description: "Ideal for serving water, lemonade, or iced tea, these jugs add a stylish, practical element to your event, ensuring that your guests enjoy their refreshments in a refined manner.",
        },
        ],
 };

 return <OfferingsPageTemplate item={waterJugsData} />;
}

export default WaterJugs;