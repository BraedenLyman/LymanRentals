import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function WhiskeyBarrelTablePage() { 
    const whiskeyBarrelTableData = {
        name: "Whiskey Barrel Table",
        images: [
            "images/1.png",
        ],
        rentPrice: "$75 / Unit (Stools: Extra $5 / Stool)",
        stock: "4 Units",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Charming & Rustic Look",
        description: "Creates the perfect gathering spot for guest to chat and enjoy their meals",
        },
        {
        icon: GiResize,
        title: "Authentic",
        description: "Adds a touch of vintage elegance, making it an ideal centerpiece for any celebration",
        },
        {
        icon: GiSpanner,
        title: "Sturdy & Spacious",
        description: "Provides ample room for drinks and appetizers",
        },
        ],
 };

 return <OfferingsPageTemplate item={whiskeyBarrelTableData} />;
}

export default WhiskeyBarrelTablePage;