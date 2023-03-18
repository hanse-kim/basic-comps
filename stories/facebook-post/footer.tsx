import { Box, HStack, Text, VStack } from 'src';
import { FackbookPostAvatar } from './_common/avatar';
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

      <Box padding={[8, 16]}>
        <HStack spacing={6} alignItems="flex-start">
          <Box paddingTop={2}>
            <FackbookPostAvatar size={32} />
          </Box>
          <VStack flexGrow={1}>
            <Box
              as="form"
              flexGrow={1}
              padding={[8, 12]}
              borderRadius="full"
              backgroundColor="#f0f2f5"
            >
              <Text fontColor="#65676b" fontSize={15} lineHeight={1.34}>
                답변을 입력하세요...
              </Text>
            </Box>
            <Text fontColor="#050505" fontSize={12}>
              글을 게시하려면 Enter 키를 누르세요.
            </Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};
