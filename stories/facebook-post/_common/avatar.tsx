import { Box } from 'src';
import { Size } from 'src/core';
import { FacebookPostProps } from '..';

type FackbookPostAvatarProps = Partial<
  Pick<FacebookPostProps, 'profileImageUrl' | 'userName'>
> & {
  size?: Size;
};

export const FackbookPostAvatar = ({
  profileImageUrl,
  userName,
  size = 40,
}: FackbookPostAvatarProps) => {
  return (
    <Box
      size={size}
      borderRadius="full"
      outline={[1, 'solid', 'rgba(0, 0, 0, 0.1)']}
      overflow="hidden"
    >
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt={userName ? `${userName}-profile` : 'profile'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};
