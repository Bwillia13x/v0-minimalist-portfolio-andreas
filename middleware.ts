import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Serve a lightweight SVG as favicon to avoid 404s without shipping a binary
  if (request.nextUrl.pathname === '/favicon.ico') {
    const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#6F69F6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="#fff" font-family="Arial, Helvetica, sans-serif">P</text></svg>`
    return new NextResponse(svg, {
      status: 200,
      headers: {
        'content-type': 'image/svg+xml',
        'cache-control': 'public, max-age=86400',
      },
    })
  }

  const url = request.nextUrl
  url.pathname = '/solutions'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/demo/:path*', '/pricing/:path*', '/security/:path*', '/contact/:path*'],
}


