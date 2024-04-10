import type { NextRequest } from 'next/server';

import { api } from '@/utils/api/instance';

async function proxy(req: NextRequest, ctx: { params: { proxy: string[] } }) {
  let url = `${ctx.params.proxy.join('/')}`;
  const search = req.nextUrl.searchParams.toString();
  if (search) {
    url += `?${search}`;
  }

  try {
    const res = await api.call({
      url,
      method: req.method,
      headers: Object.fromEntries(req.headers),
      ...(req.body && { body: JSON.stringify(await req.json()) })
    });
    return Response.json(res);
  } catch (error) {
    const responseError = error as ResponseError;
    return Response.json(
      { message: responseError.message, status: responseError.response.status },
      {
        status: responseError.response.status
      }
    );
  }
}

export { proxy as DELETE, proxy as GET, proxy as POST, proxy as PUT };
