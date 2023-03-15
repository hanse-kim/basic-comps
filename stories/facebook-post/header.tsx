import { Box, HStack, Text, VStack } from 'src';
import { FacebookPostProps } from '.';
import { FackbookPostAvatar } from './_common/avatar';
import { FacebookPostIcon } from './_common/icon';

type FacebookPostHeaderProps = Pick<
  FacebookPostProps,
  'userName' | 'profileImageUrl' | 'createdAt'
>;

export const FacebookPostHeader = ({
  userName,
  profileImageUrl,
  createdAt,
}: FacebookPostHeaderProps) => {
  return (
    <Box padding={[12, 16]}>
      <HStack spacing={8}>
        <FackbookPostAvatar
          profileImageUrl={profileImageUrl}
          userName={userName}
        />

        <VStack flexGrow={1}>
          <Text fontSize={15} fontWeight="semibold" fontColor="#050505">
            {userName}
          </Text>
          <HStack>
            <Text fontSize={13} fontColor="#65676b">
              {createdAt.toDateString()}
            </Text>
            <Text fontSize={13} fontColor="#65676b" whiteSpace="pre-wrap">
              {' · '}
            </Text>
            <FacebookPostIcon iconName="public" size={12} />
          </HStack>
        </VStack>

        <Box size={36} centering>
          <FacebookPostIcon iconName="more" size={20} />
        </Box>
      </HStack>
    </Box>
  );
};
