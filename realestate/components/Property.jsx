import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import {FaBed, Fabath} from 'react-icons/fa';
import { BsGridFill} from 'react-icons/bs';
import { GoVerified} from 'react-icons/go';
import millify from "millify";

const Property = ({coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}) =>(
    <Link href={'/property/${externalID}'} passHref>
        {title}
    </Link>
);
 export default Property;