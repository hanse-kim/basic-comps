import { Box, HStack, Text, VStack } from 'src';
import { FacebookPostIcon } from './_common/icon';

type FacebookPostFooterProps = {};

export const FacebookPostFooter = ({}: FacebookPostFooterProps) => {
  return (
    <VStack>
      <Box
        marginX={12}
        borderTop={[1, 'solid', '#ced0d4']}
        borderBottom={[1, 'solid', '#ced0d4']}
      >
        <HStack>
          <Box height={40} flexGrow={1} padding={[6, 2]}>
            <HStack spacing={8} height="100%" justifyContent="center">
              <FacebookPostIcon iconName="like" />
              <Text fontColor="#65676b" fontSize={15} fontWeight="semibold">
                Like
              </Text>
            </HStack>
          </Box>
          <Box height={40} flexGrow={1} padding={[6, 2]}>
            <HStack spacing={8} height="100%" justifyContent="center">
              <FacebookPostIcon iconName="comment" />
              <Text fontColor="#65676b" fontSize={15} fontWeight="semibold">
                Comment
              </Text>
            </HStack>
          </Box>
          <Box height={40} flexGrow={1} padding={[6, 2]}>
            <HStack spacing={8} height="100%" justifyContent="center">
              <FacebookPostIcon iconName="share" />
              <Text fontColor="#65676b" fontSize={15} fontWeight="semibold">
                Share
              </Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Box padding={[8, 16]}></Box>
    </VStack>
  );
};
