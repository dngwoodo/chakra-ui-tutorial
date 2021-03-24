import { Box, Flex, Img, Link, Stack } from "@chakra-ui/react";

const Index = () => {
  const list = [
    {
      name: "Camila West",
      position: "Co-Founder / CEO",
      url:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      introduction:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "Mark Linhsorg",
      position: "Co-Founder / CTO",
      url:
        "https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      introduction:
        "Habitant morbi tristique senectus et netus et malesuada fames. Vestibulum morbi",
    },
    {
      name: "Kim Yung",
      position: "Marketing Manager",
      url:
        "https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      introduction:
        "Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.",
    },
    {
      name: "Morgan Adebayo",
      position: "Manager, Business Relations",
      url:
        "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      introduction:
        "Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna porttitor.",
    },
    {
      name: "Bimbo Akintola",
      position: "Chief Operating Officer",
      url:
        "https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      introduction:
        "Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas purus.",
    },
    {
      name: "Yasmine Jones",
      position: "Head of Human Resources",
      url:
        "https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      introduction:
        "Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.",
    },
  ];
  return (
    <Box maxW="80em" mx="auto" textAlign="center" py={[12, 20]} px={[6, 8]}>
      <Box
        as="h2"
        fontSize={["48", "60"]}
        fontWeight="extrabold"
        mb="5"
        lineHeight="1"
        letterSpacing="tight"
      >
        About the team
      </Box>
      <Box as="p" maxW="672" mx="auto" fontSize="20" mb="20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </Box>
      <Box
        d="flex"
        justifyContent={["center", "space-between"]}
        flexWrap="wrap"
        mb="-64px"
      >
        {list.map((item) => (
          <Flex
            mb="64px"
            key={item.name}
            direction="column"
            alignItems="center"
            w={{ sm: "48.2%", lg: "31.7%" }}
          >
            <Img
              src={item.url}
              alt={item.name}
              w="40"
              h="40"
              rounded="full"
              objectFit="cover"
              mb="4"
            />
            <Box mb="2">
              <Box fontSize="lg" fontWeight="bold" as="p">
                {item.name}
              </Box>
              <Box as="p" color="gray.500" fontWeight="semibold">
                {item.position}
              </Box>
            </Box>
            <Box mb="5" maxW={["unset", "20rem"]} color="gray.600">
              {item.introduction}
            </Box>
            <Flex>
              <Link color="blue.600">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </Link>
              <Link ml="3" color="blue.600">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </Link>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
