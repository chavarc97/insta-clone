import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react"
import SugestedHeader from "./SugestedHeader"
import SugestedUser from "./SugestedUser"


const SugestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SugestedHeader/>
        <Flex alignItems={'center'} justifyContent={'space-between'} width={'full'}>
            <Text fontSize={12} fontWeight={'bold'} color={'grey.500'}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={'bold'} _hover={{color: 'grey.400'}} cursor={'pointer'}>See All</Text>
        </Flex>
        <SugestedUser name='Isak Piotr' followers={'1230'} avatar={'https://bit.ly/dan-abramov'}/>
        <SugestedUser name='Christian Nwamba' followers={759} avatar='https://bit.ly/code-beast'/>
        <SugestedUser name='Ryan Florence	' followers={567} avatar='https://bit.ly/ryan-florence'/>
        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
            © 2024 Built By {' '}
            <Link href="https://github.com/chavarc97" target="_blank" color={'blue.500'} fontSize={14}>
            Chavarc97
            </Link>
        </Box>
    </VStack>
  )
}
export default SugestedUsers    