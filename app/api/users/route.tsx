import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import schema from './schema';

export async function GET(request: NextRequest) {
	const users = await prisma.user.findMany();
	console.log(users);
	return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	// Basic Validation
	const validation = schema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}
	return NextResponse.json(body, { status: 201 });
}
