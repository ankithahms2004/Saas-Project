// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains:['cdn-icons-png.flaticon.com']
//     }
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn-icons-png.flaticon.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  