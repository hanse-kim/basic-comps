import { Box, TextGroup } from 'src';
import { FacebookPostProps } from '.';

type FacebookPostContentProps = Pick<FacebookPostProps, 'contentHtml'>;

export const FacebookPostContent = ({
  contentHtml,
}: FacebookPostContentProps) => {
  return (
    <Box padding={[4, 16, 16]}>
      <TextGroup
        fontSize={15}
        fontColor="#050505"
        whiteSpace="pre-wrap"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </Box>
  );
};
