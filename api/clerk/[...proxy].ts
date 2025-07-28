// api/clerk/[...proxy].ts
import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const target = 'https://frontend-api.clerk.services';

const proxy = createProxyMiddleware({
  target,
  changeOrigin: true,
  pathRewrite: (path, req) => path.replace(/^\/api\/clerk/, ''),
  logLevel: 'warn',
});

export default function handler(req: any, res: any) {
  return proxy(req, res, () => {});
}
