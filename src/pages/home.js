import { Heading, Text, Box, Flex, Image, Button, Card, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      {/* Welcome Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
      >
        <Heading size="3xl" textAlign="center">
            Welcome to Lyman Rentals!
        </Heading>
      </Flex>

      {/* Small Blurb */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        //minH="80vh"
      >
        <Heading size="xl" textAlign="center" marginBottom="60px">
            <Text marginBottom="20px">Where your dream events begin</Text>
            <Text marginBottom="20px">with our exquisite rentals.</Text>
        </Heading>  
        <div style={{border: "1px solid black", width: "500px", marginLeft: "auto", marginRight: "auto"}}/>    
        <Heading size="xl" textAlign="center" marginTop="60px">
            <Text marginBottom="20px">Discover the perfect pieces to make </Text>
            <Text marginBottom="20px">your special day unforgettable.</Text>
        </Heading>   
      </Flex>  
    

      {/* What We Offer Section */}
      <Flex
        direction="column"  
      >
        <Heading size="xl" textAlign="center" marginTop="60px">
            <Text marginBottom="20px">What We Offer</Text>
        </Heading>   
        <Flex
          direction="row"
          align="center"
          justify="center"
          minH="40vh"
          gap="100px"
        >
          {/* Whiskey Barrel Tables */}
          <Card width="300px" height="300" padding={"20px"}>
              <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
              <Heading size="md" textAlign="center">Whiskey Barrel Tables</Heading>
              
              <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                  <Link to="/whiskey-barrel-tables">
                      <Button size="md" marginTop="auto">Details</Button>
                  </Link>
              </Flex>
          </Card>

          {/* Benches */}
          <Card width="300px" height="300" padding={"20px"}>
              <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
              <Heading size="md" textAlign="center">Benches</Heading>
              
              <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                  <Link to="/benches">
                      <Button size="md" marginTop="auto">Details</Button>
                  </Link>
              </Flex>
          </Card>
          
          {/* Arches */}
          <Card width="300px" height="300" padding={"20px"}>
              <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
              <Heading size="md" textAlign="center">Arches</Heading>
              
              <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                  <Link to="/arches">
                      <Button size="md" marginTop="auto">Details</Button>
                  </Link>
              </Flex>
          </Card>
        </Flex>
        
        <Flex marginLeft="auto" marginRight="auto">
          <Link to="/what-we-offer">
            <Button width="200px" height="40px" marginLeft="auto" marginRight="auto" marginTop="20px">And lots more!</Button>
          </Link>
        </Flex>
        
      </Flex>
  
      {/* Availability Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="40vh"
      >
        <Heading size="xl" marginBottom="50px">
            <Text>Availability</Text>
        </Heading>
        
        <Text fontSize="20px">
          For availability and any other inquires, please contact us via Facebook messenger
        </Text>

        <Link to="https://www.facebook.com/LymanRentals">
          <Button marginTop="40px">Click to Open Facebook</Button>
        </Link>
      </Flex>
    </div>
  );
}

export default Home;