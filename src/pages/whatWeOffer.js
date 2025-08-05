import { Heading, Text, Flex, Image, Button, Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Offer() {

  return (
    <div>
      <Flex
        direction="column"
        align="center"
        justify="center"
      >
        <Heading size="xl" textAlign="center" marginTop="80px" marginBottom="80px">
            What We Offer
        </Heading>

        {/* Row 1 */}
         <Flex
          direction="row"
          align="center"
          justify="center"
          gap="100px"
          marginBottom="100px"
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


        {/* Row 2 */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          //minH="40vh"
          gap="100px"
          marginBottom="100px"
        >
            {/* Whiskey Barrel Bar */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Whiskey Barrel Bar</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/whiskey-barrel-bar">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>

            {/* Chest Coffee Table */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Chest Coffee Table</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/chest-coffee-table">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>

            {/* Desert Ladder */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Desert Ladder</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/desert-ladder">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>


        {/* Row 3 */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          //minH="40vh"
          gap="100px"
          marginBottom="100px"
        >
            {/* Memory Ladder */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Memory Ladder</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/memory-ladder">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>
            
            {/* Order Of Events */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Order Of Events</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/order-of-events">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>

            {/* Candle Lanterns */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Candle Lanterns</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/candle-lanterns">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>


        {/* Row 4 */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          //minH="40vh"
          gap="100px"
          marginBottom="100px"
        >
            {/* Decorations */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Decorations</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/decorations">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>

            {/* Edison Lights */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Edison Lights</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/edison-lights">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>

            {/* Photo Backdrop */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Photo Backdrop</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/photo-backdrop">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>


        {/* Row 5 */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          //minH="40vh"
          gap="100px"
          marginBottom="100px"
        >
            {/* Water Jugs */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Water Jugs</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/water-jugs">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>

            {/* Stock Tanks */}
            <Card width="300px" height="300" padding={"20px"}>
                <Image border="2px solid green" width={200} height={200} marginLeft={"auto"} marginRight={"auto"} marginBottom={"10px"}/>
                <Heading size="md" textAlign="center">Stock Tanks</Heading>
                
                <Flex marginLeft="auto" marginRight="auto" marginTop="20px">
                    <Link to="/stock-tanks">
                        <Button size="md" marginTop="auto">Details</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>
      </Flex>

    </div>
  );
}

export default Offer;