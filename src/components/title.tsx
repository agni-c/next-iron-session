import Link from 'next/link';
import * as css from '@/styles/style';
import GitHubLogo from '@/components/GitHubLogo';

export function Title({
	category = 'App router',
	subtitle
}: {
	category?: string;
	subtitle: JSX.Element | string;
}) {
	return (
		<div>
			<h1>
				<div className='flex items-center gap-2'>
					<div className='text-2xl'>
						<span className='dark:inline hidden'>🌝</span>
						<span className='dark:hidden'>🛠</span>{' '}
						<Link className={css.link} href='/'>
							iron-session
						</Link>{' '}
						<span className='text-slate-700 dark:text-slate-300'>
							examples: {category}
						</span>
					</div>
					<span className='text-slate-300 text-xl dark:text-slate-700'>
						{' '}
						|{' '}
					</span>
					<div>
						<div className='flex items-center gap-2 text-md'>
							<GitHubLogo />{' '}
							<a
								href='https://github.com/vvo/iron-session'
								target='_blank'
								className='text-slate-700 dark:text-slate-300 underline hover:no-underline'>
								vvo/iron-session
							</a>
						</div>
					</div>
				</div>
			</h1>
			<h2 className='text-lg text-slate-500 dark:text-slate-400'>
				{subtitle}
			</h2>
		</div>
	);
}
