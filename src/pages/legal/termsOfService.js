import { Heading, Text, Box, Flex, Image, Button, Card, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TermsOfService() {

  return (
    <div>
        <Heading size="xl" textAlign="center" marginTop="80px" marginBottom="80px">
           Terms Of Service
        </Heading>

        <Flex
            direction="column"
            align="center"
            justify="center"
            //gap="80px"
            marginBottom="200px"
            width="80%"
            marginLeft="auto"
            marginRight="auto"
        >
            
            {/* Section 1 */}
            <Text fontSize="25px" marginRight="auto">
                1. Introduction
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                Welcome to LymanRentals. By renting our products, you agree to abide by these Terms of Service. Please read them carefully.
            </Text>

            {/* Section 2 */}
            <Text fontSize="25px" marginRight="auto">
                2. Rental Agreement
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Rental Period: The rental period begins on the date specified in your rental agreement and ends on the agreed return date.<br/>
                b. Pricing: Rental prices are specified in the rental agreement. Additional fees may apply for late returns, damages, or lost items.<br/>
                c. Payment: A deposit may be required ahead of time to ensure rental spot is secured. Full payment is required by the end of the booking. We accept e-transfer or cash.<br/>
            </Text>

            {/* Section 3 */}
            <Text fontSize="25px" marginRight="auto">
                3. Cancellations and Refunds
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Cancellation Policy: Cancellations made more than 5 days before the rental date will receive a full refund.<br/>
                b. Refunds: Refunds will be processed within 14 days of the cancellation date.<br/>
            </Text>

            {/* Section 4 */}
            <Text fontSize="25px" marginRight="auto">
                4. Use of Rental Items
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Care and Maintenance: Renters are responsible for the proper care and maintenance of all rental items. Items must be returned in the same condition as received.<br/>
                b. Damage or Loss: Renters will be charged for any damage or loss of rental items. Charges will be assessed based on the cost of repair or replacement.<br/>
                c. Prohibited Uses: Rental items must not be used for illegal activities or in any manner that could cause harm or damage.<br/>
            </Text>

            {/* Section 5 */}
            <Text fontSize="25px" marginRight="auto">
                5. Delivery and Pick-Up
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Delivery: We offer delivery services within the Hamilton area. Delivery fees and details will be specified in the rental agreement.<br/>
                b. Pick-Up: Renters may choose to pick up and return rental items themselves. Items must be picked up and returned at the agreed times and locations.<br/>
            </Text>

            {/* Section 6 */}
            <Text fontSize="25px" marginRight="auto">
                6. Liability
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Indemnification: Renters agree to indemnify and hold LymanRentals harmless from any claims, damages, or expenses arising from the use of our rental items.<br/>
                b. Limitation of Liability: LymanRentals is not liable for any indirect, incidental, or consequential damages resulting from the use of our rental items.<br/>
            </Text>

            {/* Section 7 */}
            <Text fontSize="25px" marginRight="auto">
                7. Privacy
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Personal Information: We collect and use personal information in accordance with our Privacy Policy, available on our website.<br/>
                b. Data Protection: We take reasonable measures to protect the personal information of our customers.<br/>
            </Text>

            {/* Section 8 */}
            <Text fontSize="25px" marginRight="auto">
                8. Changes to Terms of Service
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                LymanRentals reserves the right to update or modify these Terms of Service at any time. Any changes will be posted on our website and will take effect immediately.
            </Text>

            {/* Section 9 */}
            <Text fontSize="25px" marginRight="auto">
                9. Contact Information
            </Text>
            <Text fontSize="16px" marginBottom="80px" width="90%">
                For any questions or concerns regarding these Terms of Service, please contact us at: Email: lymanrentals@gmail.com
            </Text>

            {/* Closing Statement */}
            <Text fontSize="16px" width="90%" marginBottom="20px" textAlign="center">
                By renting from LymanRentals, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </Text>
            <Text fontSize="16px" width="90%" textAlign="center">
                Thank you for choosing LymanRentals for your event needs!
            </Text>
        </Flex>
    </div>
  );
}

export default TermsOfService;