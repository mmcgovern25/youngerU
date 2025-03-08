import Link from "next/link";
import { PostCard, Categories, PostWidget } from './articlecomponents/';

const posts = [
    { title: 'Plant-Based Nutrition', except: 'Learn plant-based nutrition'},
    { title: 'Mental health and nutrition', except: 'Mental health and plant-based nutrition'},
]

export default function Articles() {
    return (
    <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
                {posts.map((post, index) => (
                    <PostCard post={post} key={post.title} />
                ))}
            </div>
           

            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                    <PostWidget />
                    <Categories />
                </div>
            </div>
        </div>

        
        
    </div>
    )
}