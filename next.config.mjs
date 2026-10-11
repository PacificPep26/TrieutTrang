// Separate output dirs so running `next build` doesn't wipe a running `next dev` server's files
export default {
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next-dev',
};
