import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function DeserLadder() { 
    const desertLadderData = {
        name: "Desert Ladder",
        images: [
            "images/8.png"
        ],
        rentPrice: "$40 / Unit",
        stock: "1 Unit",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Multi-Tiered Display",
        description: "With multiple shelves, the Dessert Ladder offers ample space to showcase a variety of desserts, allowing you to create an eye-catching and organized presentation.",
        },
        {
        icon: GiResize,
        title: "Versatile and Portable",
        description: "Easy to set up and move, this ladder can be placed anywhere in your venue, making it a versatile addition to your event décor.",
        },
        {
        icon: GiSpanner,
        title: "Charming Rustic Design",
        description: "The wooden ladder exudes a rustic, vintage charm that complements any event theme, adding a cozy and welcoming touch to your dessert display.",
        },
        ],
 };

 return <OfferingsPageTemplate item={desertLadderData} />;
}

export default DeserLadder;