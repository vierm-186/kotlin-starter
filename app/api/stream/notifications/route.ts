import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const send = () => {
        const data = JSON.stringify({ unread: Math.floor(Math.random() * 5) });
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
        setTimeout(send, 5000);
      };
      send();
    },
    cancel() {
      // cleanup if needed
    },
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
