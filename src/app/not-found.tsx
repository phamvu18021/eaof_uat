import { Loading } from "@/components/Loading";
import { Breadcrumbs } from "@/components/Breadcrumb";
import nextDynamic from "next/dynamic";
import NextLink from "next/link";
import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";

const ListPosts = nextDynamic(
  () => import("@/components/ListPosts").then((mod) => mod.ListPosts),
  { loading: () => <Loading /> }
);

const InputSearch = nextDynamic(
  () => import("@/features/search/InputSearch").then((mod) => mod.InputSearch),
  { loading: () => <Loading /> }
);

export default function NotFound() {
  return (
    <Box pb="40px">
      <Breadcrumbs title="Trang không tồn tại" image="/anhvienchuan.jpg" />
      <Container py="70px" maxW="7xl">
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ lg: "10", base: "0" }}
        >
          <GridItem colSpan={2} mb="30px">
            <InputSearch type="popover" />
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ lg: "10", base: "0" }}
        >
          <GridItem colSpan={2}>
            <Box mt={4} textAlign="center">
              <Text mb={2}>Truy cập để đọc các bài viết khác:</Text>
              <NextLink href="/tin-tuc" passHref>
                <Button colorScheme="blue" size="lg">
                  Xem tin tức
                </Button>
              </NextLink>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <ListPosts
              idNew="323"
              title="Tin tức nổi bật"
              idNotifi="1"
              isShort={true}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
