import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function Decorations() { 
    const decorationsData = {
        name: "Decorations",
        images: [
            "images/12.png"
        ],
        rentPrice:  "Wooden Mr/Mrs & Love: $5 / Unit" + 
                    "6ft Vines: $5 / Unit" +
                    "Name Placeholders (Can do custom cardstock names for additional $.50 / unit): $1 / Unit" +
                    "Custom Frame Signs (Customization Included): $5 / Unit",
                    stock: "Varies", 
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON & Surrounding Area",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Timeless Aesthetics",
        description: "Our collection features a variety of vintage-inspired decorations, each crafted to bring a classic, nostalgic feel to your event, seamlessly complementing a range of themes and styles.",
        },
        {
        icon: GiResize,
        title: "Versatile Design",
        description: "Each piece in the collection is chosen for its ability to enhance different aspects of your event, from centerpieces and table decor to display accents, providing a cohesive look throughout your space.",
        },
        {
        icon: GiSpanner,
        title: "High-Quality Craftsmanship",
        description: "Designed with attention to detail and made from durable materials, our decorations not only look beautiful but also stand up to the rigors of event use, ensuring they enhance your celebration with both style and practicality.",
        },
        ],
 };

 return <OfferingsPageTemplate item={decorationsData} />;
}

export default Decorations;