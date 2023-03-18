import { Box } from 'src';
import { Size } from 'src/core';
import { FacebookPostProps } from '..';
import { FacebookPostIcon } from './icon';

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
        <Box
          size="100%"
          centering
          backgroundColor="#caccd2"
          boxShadow="inset 0 1px 1px rgba(0, 0, 0, 0.1)"
          borderRadius="full"
        >
          <FacebookPostIcon iconName="avatar" color="#f9fafb" size="80%" />
        </Box>
      )}
    </Box>
  );
};
