const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        '127.0.0.1:3001',
        '127.0.0.1:3000'
      ]
    }
  }
}
export default nextConfig
