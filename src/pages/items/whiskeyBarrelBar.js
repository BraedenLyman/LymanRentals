import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function WhiskeyBarrelBarPage() { 
    const whiskeyBarrelBarData = {
        name: "Whiskey Barrel Bar",
        images: [
            "images/6.png"
        ],
        rentPrice: "$150 / Unit",
        stock: "1 Unit",
        rentDuration: "1-2 Days",
        pickupLocation: "Smitvhille, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Authentic Craftsmanship",
        description: "Built with genuine whiskey barrels, this bar brings a rich, rustic feel to your event, embodying both style and durability.",
        },
        {
        icon: GiResize,
        title: "Versatile Design",
        description: "Whether you're hosting a wedding, reception, or corporate event, the Whiskey Barrel Bar seamlessly blends with various themes and settings, making it a standout piece.",
        },
        {
        icon: GiSpanner,
        title: "Sturdy and Spacious",
        description: "With a solid wood top, this bar provides ample space for bartending needs or showcasing your event's finest offerings, all while ensuring stability throughout your celebration.",
        },
        ],
 };

 return <OfferingsPageTemplate item={whiskeyBarrelBarData} />;
}

export default WhiskeyBarrelBarPage;