import { Box } from '../../src';
import { FacebookPostContent } from './content';
import { FacebookPostFooter } from './footer';
import { FacebookPostHeader } from './header';

export type FacebookPostProps = {
  userName: string;
  profileImageUrl: string;
  createdAt: Date;
  contentHtml: string;
};

export const FacebookPost = ({
  userName,
  profileImageUrl,
  createdAt,
  contentHtml,
}: FacebookPostProps) => {
  return (
    <Box
      width="100%"
      maxWidth={680}
      backgroundColor="#ffffff"
      borderRadius={8}
      boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
    >
      <FacebookPostHeader
        userName={userName}
        profileImageUrl={profileImageUrl}
        createdAt={createdAt}
      />
      <FacebookPostContent contentHtml={contentHtml} />
      <FacebookPostFooter />
    </Box>
  );
};
