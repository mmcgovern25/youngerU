"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '@/services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3'>
              {category.name}
            </span>
          </Link>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  )
}

export default Categories
