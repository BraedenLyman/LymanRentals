import { GiWoodBeam, GiResize, GiSpanner } from "react-icons/gi";
import OfferingsPageTemplate from "../offeringsPageTemplate";

function EdisonLights() { 
    const edisonLightsData = {
        name: "Edison Lights",
        images: [
            "images/13.png"
        ],
        rentPrice: "$10 / Unit",
        stock: "7 Units (50ft each)",
        rentDuration: "1-2 Days",
        pickupLocation: "Smithville, ON",
        deliveryLocation: "Hamilton, ON",
        qualities: [
        {
        icon: GiWoodBeam,
        title: "Vintage Charm",
        description: "The Edison bulbs feature a classic design with exposed filaments, adding a touch of nostalgia and elegance to your event décor.",
        },
        {
        icon: GiResize,
        title: "Warm Ambient Lighting",
        description: "These lights provide a gentle, warm glow that creates a cozy and romantic atmosphere, perfect for evening events and intimate gatherings.",
        },
        {
        icon: GiSpanner,
        title: "Versatile String Design",
        description: "Easy to hang and arrange, the string of Edison Lights can be draped across ceilings, walls, or outdoor spaces, offering flexible lighting solutions to suit your venue.",
        },
        ],
 };

 return <OfferingsPageTemplate item={edisonLightsData} />;
}

export default EdisonLights;