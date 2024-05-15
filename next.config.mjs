const nextConfig = {
  reactStrictMode: true,
  images: {
    // 1
    // domains: ["images.pexels.com"],

    // 2
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.pexels.com',
    //     port: '',
    //   }
    // ],


    // 3
    loader: 'custom',
    loaderFile: './image/loader.js',

    // 4
    // deviceSizes: [384, 640, 1200],
    // imageSizes: [800, 1400, 1600],

    minimumCacheTTL: 10,

  }

};

export default nextConfig;
