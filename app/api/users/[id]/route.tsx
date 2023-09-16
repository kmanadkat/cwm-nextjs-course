import { NextRequest, NextResponse } from 'next/server';

export function GET(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	if (params.id > 10) {
		return NextResponse.json({ error: 'User not found' }, { status: 404 });
	}

	return NextResponse.json({ id: 1, name: 'Krupesh' });
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	const body = await request.json();
	// Basic Validation
	if (!body.name) {
		return NextResponse.json({ error: 'name is required' }, { status: 400 });
	}
	// Simulate Users Data
	if (params.id > 10) {
		return NextResponse.json({ error: 'user not found' }, { status: 404 });
	}

	return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: number } }
) {
	// Example Basic Validation
	if (params.id > 10) {
		return NextResponse.json({ error: 'user not found' }, { status: 404 });
	}
	return NextResponse.json({ success: true, id: params.id });
}
