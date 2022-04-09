import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react';

import {baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

export const Banner =({purpose, title1,title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
  <Image src={imageUrl} width={500} height={300} />
  <Box p="5">
    <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
    <Text fontSize="3x1" fontWeight="bold">{title1}<br/>{title2}</Text>
    <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
    <Button fontSize='xl' bg="blue.300" color="white">
        <Link href='#'>{buttonText}</Link>
      </Button>
  </Box>
  </Flex>
)
const Home = ({propertiesForSale, propertiesForRent}) => (
    <box>
      {/* <h1>Hello keith</h1> */}
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, Villas,Homes"
        desc2="and more"
        buttonText="Explore Renting"
        LinkName="/Search?purpose=for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />

      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <property property={property} key ={property.id}/>)}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title1="Find Buy & Own Yours"
        title2="Dream Home"
        desc1="Explore Apartments, Villas,Homes"
        desc2="and more"
        buttonText="Explore Buying"
        LinkName="/Search?purpose=for-sale"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      {propertiesForSale.map((property) => <property property={property} key ={property.id}/>)}
    </box>
);

export async function getstaticProps(){
  const propertyForSale = await fetchApi('${baseUrl}/properties/list?locationExternalIDs=50028purpose=for-sale&hitsPerPage=6');
  const propertyForRent = await fetchApi('${baseUrl}/properties/list?locationExternalIDs=50028purpose=for-rent&hitsPerPage=6');

  return{
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
