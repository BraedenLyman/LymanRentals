import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function MemoryLadder() { 
    const memoryLadderData = {
        name: "Memory Ladder",
        images: [
           "images/9.png"
        ],
        rentPrice: "$25 / Unit",
        stock: "1 Unit", 
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Elegant Display",
        description: "The ladder's multiple shelves offer ample space to beautifully arrange photos, candles, and keepsakes, creating a dignified and memorable tribute to loved ones.",
        },
        {
        icon: GiResize,
        title: "Versatile and Portable",
        description: "With its easy setup and mobility, the Memory Ladder can be placed anywhere in your venue, providing a flexible and meaningful addition to your event décor.",
        },
        {
        icon: GiSpanner,
        title: "Personalized Tribute",
        description: "Easily adapt the display to reflect the unique personalities and cherished memories of those you wish to honor, making the ladder a special and personal part of your event.",
        },
        ],
 };

 return <OfferingsPageTemplate item={memoryLadderData} />;
}

export default MemoryLadder;