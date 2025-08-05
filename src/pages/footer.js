import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdFacebook, MdMail, MDMail} from "react-icons/md";

function Footer() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      as="footer"
      padding="5"
      backgroundColor="#FFF"
    >
      <Heading size="xl" marginBottom="10px" textAlign="center" color="#000">
        <Text>Lyman Rentals</Text>
      </Heading>

      {/* Facebook/Gmail Links */}
      <Flex
        direction="row"
        justify="center"
        marginBottom="20px"
      >
        <Link to="https://www.facebook.com/LymanRentals" target="_blank">
          <Icon width="60px" height="60px" color="black">
            <MdFacebook />
          </Icon>
        </Link>
        
        <Link to="https://www.gmail.com" target="_blank">
          <Icon width="60px" height="60px" color="black">
            < MdMail/>
          </Icon>
        </Link>
      </Flex>

      {/* Footer Links */}
      <Flex
        direction="row"
        width="350px"
        justifyContent="space-between"
      >
      
        <Link to="/about">
          <Text fontSize="20px" color="#000">
            About
          </Text>
        </Link>

        <Link to="/contact">
          <Text fontSize="20px" color="#000">
            Contact Us
          </Text>
        </Link>
      </Flex>

      <div style={{ border: "1px solid black", width: "480px", marginLeft: "auto", marginRight: "auto", marginBottom: "5px", marginTop: "60px" }} />

      {/* Legal Links*/}
      <Flex
        direction="row"
        width="350px"
        justifyContent="space-between"
      >
        <Link to="/terms-of-service">
          <Text fontSize="20px" color="#000">
            Terms Of Service
          </Text>
        </Link>
        <Link to="/privacy-policy">
          <Text fontSize="20px" color="#000">
            Privacy Policy
          </Text>
        </Link>
      </Flex>

      <Text fontSize="20px" marginTop="30px" color="#000"  >Copyright &copy; LymanRentals. All rights reserved.</Text>
    </Flex>
  );
}

export default Footer;