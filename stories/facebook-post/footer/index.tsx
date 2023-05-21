import { Box, HStack, Text, VStack } from 'src';
import { FackbookPostAvatar } from '../_common/avatar';
import { FooterButton } from './footer-button';

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
          <FooterButton iconName="like" label="Like" />
          <FooterButton iconName="comment" label="Comment" />
          <FooterButton iconName="share" label="Share" />
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
                Add a comment...
              </Text>
            </Box>
            <Text fontColor="#050505" fontSize={12}>
              Press Enter to post a comment.
            </Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};
