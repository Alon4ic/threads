/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: ["mongoose"],
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['utfs.io', 'example.com', 'another-domain.com'],

		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.clerk.com",
			},
			{
				protocol: "https",
				hostname: "images.clerk.dev",
			},
			{
				protocol: "https",
				hostname: "uploadthing.com",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: 'https',
				hostname: 'assets.example.com',
				port: '',
				pathname: '/account123/**',
			},
			
			
		],
	},
};

module.exports = nextConfig;

// module.exports = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'assets.example.com',
// 				port: '',
// 				pathname: '/account123/**',
// 			},
// 		],
// 	},
// }
