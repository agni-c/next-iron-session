import Link from 'next/link';
import * as css from '@/styles/style';

import { Metadata } from 'next';
import { Form } from '@/components/form';
import { Title } from '@/components/title';
import { GetTheCode } from '@/components/get-the-code';

export const metadata: Metadata = {
	title:
		'🛠 iron-session examples: Client components, route handlers and SWR'
};

export default function AppRouterSWR() {
	return (
		<main className='space-y-5 p-10'>
			<Title
				subtitle={
					<>
						+ client components, route handlers, and{' '}
						<a
							className={css.link}
							href='https://swr.vercel.app'
							target='_blank'>
							SWR
						</a>
					</>
				}
			/>

			<p className='max-w-xl italic'>
				<u>How to test</u>: Login and refresh the page to see
				iron-session in action. Bonus: open multiple tabs to see the
				state being reflected by SWR automatically.
			</p>

			<div className='gap-4 border-slate-500 grid grid-cols-1 p-10 border rounded-md max-w-xl'>
				<Form />
				<div className='space-y-2'>
					<hr />
					<p>
						The following pages are protected and will redirect back
						here if you&apos;re not logged in:
					</p>
					{/* convert the following paragraphs into a ul li */}
					<ul className='list-disc list-inside'>
						<li>
							<Link href='/protected-client' className={css.link}>
								Protected page via client component →
							</Link>
						</li>
						<li>
							<Link
								href='/protected-server'
								className={css.link}
								// required to avoid caching issues when navigating between tabs/windows
								prefetch={false}>
								Protected page via server component →
							</Link>{' '}
						</li>
						<li>
							<Link href='/protected-middleware' className={css.link}>
								Protected page via middleware →
							</Link>{' '}
						</li>
					</ul>
				</div>
			</div>

			<GetTheCode path='app/' />
			<HowItWorks />

			<p>
				<Link href='/' className={css.link}>
					← All examples
				</Link>
			</p>
		</main>
	);
}

function HowItWorks() {
	return (
		<details className='space-y-4 max-w-2xl'>
			<summary className='cursor-pointer'>How it works</summary>

			<ol className='list-decimal list-inside'>
				<li>
					During login, the form is submitted with SWR&apos;s{' '}
					<a
						href='https://swr.vercel.app/docs/mutation#useswrmutation'
						className={css.link}>
						useSWRMutation
					</a>
					. This makes a POST /session request using fetch.
				</li>
				<li>
					{' '}
					During logout, the form is submitted with SWR&apos;s{' '}
					<a
						href='https://swr.vercel.app/docs/mutation#useswrmutation'
						className={css.link}>
						useSWRMutation
					</a>
					. This makes a DELETE /session request using fetch.
				</li>
				<li>
					In all other places, the content of the session is
					optimistally rendered using the most recent value, and never
					gets outdated. This is automatically handled by SWR using
					mutations and revalidation.
				</li>
			</ol>
		</details>
	);
}
