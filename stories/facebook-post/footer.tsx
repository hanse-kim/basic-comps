import { Box, HStack, Text, VStack } from 'src';

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
              <Box size={18} color="#65676b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
                </svg>
              </Box>
              <Text fontColor="#65676b" fontSize={15} fontWeight="semibold">
                Like
              </Text>
            </HStack>
          </Box>
          <Box height={40} flexGrow={1} padding={[6, 2]}>
            <HStack spacing={8} height="100%" justifyContent="center">
              <Box size={18} color="#65676b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              </Box>
              <Text fontColor="#65676b" fontSize={15} fontWeight="semibold">
                Comment
              </Text>
            </HStack>
          </Box>
          <Box height={40} flexGrow={1} padding={[6, 2]}>
            <HStack spacing={8} height="100%" justifyContent="center">
              <Box size={18} color="#65676b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </Box>
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
