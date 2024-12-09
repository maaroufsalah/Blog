import PostListItem from "./PostListItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async () => {
  // const fetchPosts = async (pageParam, searchParams) => {
  // const searchParamsObj = Object.fromEntries([...searchParams]);

  // console.log(searchParamsObj);

  // const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
  //   params: { page: pageParam, limit: 10, ...searchParamsObj },
  // });

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

// const PostList = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteQuery({
//     queryKey: ["posts", searchParams.toString()],
//     queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, pages) =>
//       lastPage.hasMore ? pages.length + 1 : undefined,
//   });

  // if (status === "loading") return "Loading...";
const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  
  console.log(data);

  // if (status === "error") return "Something went wrong!";
  // if (error) return "Something went wrong!";

  // const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    // <InfiniteScroll
    //   dataLength={allPosts.length}
    //   next={fetchNextPage}
    //   hasMore={!!hasNextPage}
    //   loader={<h4>Loading more posts...</h4>}
    //   endMessage={
    //     <p>
    //       <b>All posts loaded!</b>
    //     </p>
    //   }
    // >
    //   {allPosts.map((post) => (
    //     <PostListItem key={post._id} post={post} />
    //   ))}
    // </InfiniteScroll>
    <div className="flex flex-col gap-12 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
