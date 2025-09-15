import PostCard from "@/components/PostCard";

const mockPosts = [
  {
    id: 1,
    directive: "Directive 1",
    images: [
      "https://picsum.photos/seed/1/500/500",
      "https://picsum.photos/seed/2/500/500",
      "https://picsum.photos/seed/3/500/500",
    ],
  },
  {
    id: 2,
    directive: "Directive 2",
    images: [
      "https://picsum.photos/seed/4/500/500",
    ],
  },
  {
    id: 3,
    directive: "Directive 3",
    images: [
      "https://picsum.photos/seed/5/500/500",
      "https://picsum.photos/seed/6/500/500",
    ],
  },
    {
    id: 4,
    directive: "Directive 4",
    images: [
      "https://picsum.photos/seed/7/500/500",
      "https://picsum.photos/seed/8/500/500",
      "https://picsum.photos/seed/9/500/500",
    ],
  },
];

const PostsPage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;