import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function CandleLanterns() { 
    const candleLanternsData = {
        name: "Candle Lanterns",
        images: [
            "images/11.png"
        ],
        rentPrice: "$10 / Unit",
        stock: "12 Units",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Rustic Wooden Design",
        description: "The lanterns are crafted from high-quality wood, offering a natural, rustic charm that complements a variety of event themes and settings.",
        },
        {
        icon: GiResize,
        title: "Elegant Candle Display",
        description: "Each lantern contains a candle in a glass container, providing a safe and stylish way to illuminate your event with a soft, flickering light.",
        },
        {
        icon: GiSpanner,
        title: "Versatile Décor",
        description: "Whether used as table centerpieces, aisle decorations, or accent lighting, these lanterns add a touch of warmth and elegance to any event space.",
        },
        ],
 };

 return <OfferingsPageTemplate item={candleLanternsData} />;
}

export default CandleLanterns;