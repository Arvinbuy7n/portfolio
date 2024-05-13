import { siteConfig } from '@/config/site-config';
import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex max-md:flex-col items-center space-x-6">
      <div className="flex justify-between select-none max-md:size-[80px]">
        <img alt="avatar" src="profile.jpeg" sizes="full" className="object-cover rounded-full w-60" loading="eager" />
      </div>
      <div>
        <div className=" text-slate-900  dark:text-slate-100">
          <div className="text-xl  min-md:text-lg font-semibold text-primary select-none text-center">{siteConfig.title}</div>
          <h1 className="text-4xl min-md:text-2xl font-bold my-2  select-none text-center">{siteConfig.creator}</h1>
        </div>
        <p className="text-2xl min-md:text-xl font-light text-slate-900 dark:text-slate-100 select-none">{siteConfig.bio}</p>
      </div>
    </div>
  );
};

export default AboutMe;
