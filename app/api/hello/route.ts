import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export async function GET() {
//     const message = process.env["hello"] || 'Default message';
//     return NextResponse.json({ message });
// }

// pages/api/calculate.js
// pages/api/hello.ts
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const a = url.searchParams.get("a");
  const b = url.searchParams.get("b");
  const operation = url.searchParams.get("operation");

  let result;
  switch (operation) {
    case 'add':
      result = Number(a) + Number(b);
      break;
    case 'subtract':
      result = Number(a) - Number(b);
      break;
    case 'multiply':
      result = Number(a) * Number(b);
      break;
    case 'divide':
      result = b !== '0' ? Number(a) / Number(b) : 'Division by zero';
      break;
    default:
      result = 'Invalid operation';
  }
  
  return NextResponse.json({ result });
}
