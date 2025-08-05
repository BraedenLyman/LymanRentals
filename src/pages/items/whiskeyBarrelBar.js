import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function WhiskeyBarrelBarPage() { 
    const whiskeyBarrelBarData = {
        name: "Whiskey Barrel Bar",
        images: [
            "https://via.placeholder.com/300",
            "https://via.placeholder.com/300",
            "https://via.placeholder.com/300",
        ],
        rentPrice: "$50",
        rentDuration: "Per Day",
        pickupLocation: "Our Warehouse",
        deliveryLocation: "Within 50 miles",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Authentic Materials",
        description: "Crafted from genuine whiskey barrels for a rustic look.",
        },
        {
        icon: GiResize,
        title: "Perfect Size",
        description: "Ideal for cocktails, and cake stands.",
        },
        {
        icon: GiSpanner,
        title: "Sturdy Construction",
        description: "Built to be durable and stable for any event.",
        },
        ],
 };

 return <OfferingsPageTemplate item={whiskeyBarrelBarData} />;
}

export default WhiskeyBarrelBarPage;