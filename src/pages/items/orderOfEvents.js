import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function OrderOfEvents() { 
    const orderOfEventsData = {
        name: "Order Of Events",
        images: [
            "images/10.png"
        ],
        rentPrice: "$75 / Unit (Includes custom vinyl lettering)",
        stock: "1 Unit",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Customizable Layout",
        description: "Simply provide us with your order of events and preferred font style, and we'll handle the rest, creating a stunning schedule display that ensures your day flows seamlessly and looks fantastic.",
        },
        {
        icon: GiResize,
        title: "Clear and Organized Display",
        description: "The pallet design provides ample space to clearly list your event's schedule, helping guests stay informed and on time throughout the day.",
        },
        {
        icon: GiSpanner,
        title: "Rustic Aesthetic",
        description: "Crafted from natural wood, this pallet list adds a warm, rustic feel to your event décor, complementing a variety of themes and settings.",
        },
        ],
 };

 return <OfferingsPageTemplate item={orderOfEventsData} />;
}

export default OrderOfEvents;