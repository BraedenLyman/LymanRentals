import { Heading, Text, Box, Flex, Image, Button, Card, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {

  return (
    <div>
        <Heading size="xl" textAlign="center" marginTop="80px" marginBottom="80px">
           Privacy Policy
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
                LymanRentals is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
            </Text>

            {/* Section 2 */}
            <Text fontSize="25px" marginRight="auto">
                2. Information We Collect
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Personal Information: We collect personal information you provide to us, such as your name, email address, phone number, and payment information.<br/>
                b. Usage Information: We collect information about how you use our website, including your IP address, browser type, and browsing history.<br/>
                c. Cookies: We use cookies to enhance your experience on our website.<br/>
                Cookies are small data files stored on your device.
            </Text>

            {/* Section 3 */}
            <Text fontSize="25px" marginRight="auto">
                3. How We Use Your Information
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Service Delivery: We use your personal information to process your rental orders, deliver rental items, and provide customer support.<br/>
                b. Communication: We use your contact information to send you updates, promotional offers, and other information related to our services.<br/>
                c. Improvement: We analyze usage information to improve our website, services, and user experience.<br/>
                d. Legal Compliance: We may use your information to comply with legal obligations and protect our rights.<br/>
            </Text>

            {/* Section 4 */}
            <Text fontSize="25px" marginRight="auto">
                4. Sharing Your Information
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Service Providers: We may share your information with third-party service providers who assist us in delivering our services.<br/>
                b. Legal Requirements: We may disclose your information if required by law or in response to legal requests.<br/>
                c. Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.<br/>
            </Text>

            {/* Section 5 */}
            <Text fontSize="25px" marginRight="auto">
                5. Data Security
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
            </Text>

            {/* Section 6 */}
            <Text fontSize="25px" marginRight="auto">
                6.  Your Rights
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Access: You have the right to access the personal information we hold about you.<br/>
                b. Correction: You have the right to request corrections to any inaccurate or incomplete information.<br/>
                c. Deletion: You have the right to request the deletion of your personal information, subject to legal obligations.<br/>
                d. Objection: You have the right to object to the processing of your personal information in certain circumstances.<br/>
            </Text>

            {/* Section 7 */}
            <Text fontSize="25px" marginRight="auto">
                7. Cookies and Tracking Technologies
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                a. Use of Cookies: We use cookies to improve your experience on our website, such as remembering your preferences and tracking website usage.<br/>
                b. Managing Cookies: You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your experience on our website.<br/>
            </Text>

            {/* Section 8 */}
            <Text fontSize="25px" marginRight="auto">
                8. Changes to This Privacy Policy
            </Text>
            <Text fontSize="16px" marginBottom="40px" width="90%">
                LymanRentals reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website and will take effect immediately.
            </Text>

            {/* Section 9 */}
            <Text fontSize="25px" marginRight="auto">
                9. Contact Information
            </Text>
            <Text fontSize="16px" marginBottom="80px" width="90%">
                For any questions or concerns regarding this Privacy Policy, please contact us at: Email: lymanrentals@gmail.com
            </Text>

            {/* Closing Statement */}
            <Text fontSize="16px" width="90%" marginBottom="20px" textAlign="center">
                By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </Text>
            <Text fontSize="16px" width="90%" textAlign="center">
                Thank you for choosing LymanRentals for your event needs!
            </Text>

           
        </Flex>
    </div>
  );
}

export default PrivacyPolicy;