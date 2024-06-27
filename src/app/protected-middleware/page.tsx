import { Title } from '@/components/title';
import * as css from '@/styles/style';

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { SessionData, sessionOptions } from '@/lib/session';
import Link from 'next/link';

// Broken: None of these parameters is working, thus we have caching issues
// TODO fix this
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getSession() {
	const session = await getIronSession<SessionData>(
		cookies(),
		sessionOptions
	);
	return session;
}

export default function ProtectedServer() {
	return (
		<main className='space-y-5 p-10'>
			<Title subtitle='Protected page' />
			<Content />
			<p>
				<Link href='/' className={css.link}>
					← Back
				</Link>
			</p>
		</main>
	);
}

async function Content() {
	const session = await getSession();

	return (
		<div className='space-y-2 max-w-xl'>
			<p>
				Hello <strong>{session.username}!</strong>
			</p>
			<p>
				This page is protected and can only be accessed if you are
				logged in. Otherwise you will be redirected to the login page.
			</p>
			<p>The check is done via a middleware.</p>
		</div>
	);
}
