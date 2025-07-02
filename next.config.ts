import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
 images:{
  remotePatterns:[
    {
      hostname:'www.google.com',
      protocol:"https",
      port:""
    },{
      hostname:"lh3.googleusercontent.com",
      protocol:"https",
      port:""
    }
    ,{
      hostname:"images.pexels.com",
      protocol:"https",
      port:""
    }
  ]
 }
};

export default nextConfig;
