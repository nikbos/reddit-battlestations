import { Flex, Image } from "@chakra-ui/react";
import React from 'react';
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";
// import Directory from "./Directory";

const Navbar:React.FC = () => {
    
    return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
        // onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
        <Image src="/images/redditFace.svg" height="30px"></Image>
        <Image src="/images/redditText.svg" height="46px" display={{ base: "none", md: "unset"}}></Image>
      </Flex>
    <SearchInput />
    <RightContent />
    </Flex>
        )
}
export default Navbar;