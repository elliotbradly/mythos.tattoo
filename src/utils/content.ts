import type { PaginateFunction } from 'astro';
import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { APP_BLOG } from 'astrowind:config';
import { cleanSlug, trimSlash, BLOG_BASE, POST_PERMALINK_PATTERN, CATEGORY_BASE, TAG_BASE } from './permalinks';

export const replaceHero = async () => {
  

  //place your test here

  `

  <img alt="Javascript Test" 
class="dark:bg-slate-700 bg-gray-400 mb-6 lg:max-w-[900px] max-w-full mx-auto sm:rounded-md" 
crossorigin="anonymous" 
decoding="async" height="506" loading="eager" 
referrerpolicy="no-referrer" 
sizes="(max-width: 900px) 400px, 900px" 
src="https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1651&amp;q=80" srcset="https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=400&amp;h=224&amp;q=80 400w, https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;h=506&amp;q=80 900w, https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1800&amp;h=1012&amp;q=80 1800w" 
style="object-fit:cover;object-position:center;max-width:900px;max-height:506px;aspect-ratio:1.7786561264822134;width:100%" width="900">
  
  
  `

};

