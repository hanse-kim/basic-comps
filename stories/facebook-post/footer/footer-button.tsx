import { Box, HStack, Text } from 'src';
import { FacebookPostIcon, IconName } from '../_common/icon';

type FooterButtonProps = { label: string; iconName: IconName };

export const FooterButton = ({ label }: FooterButtonProps) => {
  return (
    <Box
      height={40}
      flexGrow={1}
      margin={[4, 6]}
      padding={[6, 2]}
      borderRadius={4}
      cursor="pointer"
      _hover={{
        backgroundColor: '#f2f3f5',
      }}
    >
      <HStack spacing={8} height="100%" justifyContent="center">
        <FacebookPostIcon iconName="comment" />
        <Text fontColor="#65676b" fontSize={15} fontWeight="semibold">
          {label}
        </Text>
      </HStack>
    </Box>
  );
};
