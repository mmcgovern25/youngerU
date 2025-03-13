import Link from "next/link";
import { PostCard, Categories, PostWidget } from './articlecomponents/';
import '../articles/articlestyles/globals.scss';
import { getPosts } from "@/services";

export default async function Articles() {
    const posts = await getPosts(); // Fetch posts directly in the component

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <PostCard post={post.node} key={post.node.title} /> // Accessing post.node
                        ))
                    ) : (
                        <p>No posts available.</p> // Handle case when there are no posts
                    )}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
}