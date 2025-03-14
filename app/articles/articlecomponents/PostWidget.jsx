"use client";

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(category, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  })
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.length > 0 ? (
        relatedPosts.map((post) => (
          <div key={post.slug} className="flex items-center w-full mb-4">
            <div className='w-16 flex-none'>
              <Image 
                alt={post.title}
                height={60}
                width={60}
                className='align-middle rounded-full'
                src={post.featuredImage.url}
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 text-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} className='text-md'>
                {post.title}
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No related posts available.</p>
      )}
    </div>
  )
}

export default PostWidget
