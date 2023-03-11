import { Box } from 'src';
import { FacebookPostProps } from '.';

type FacebookPostHeaderProps = Pick<
  FacebookPostProps,
  'userName' | 'profileImageUrl' | 'createdAt'
>;

export const FacebookPostHeader = ({
  userName,
  createdAt,
}: FacebookPostHeaderProps) => {
  return null;
};
