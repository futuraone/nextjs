type MainProps = {
	title?: string;
	children: React.ReactNode;
}

export default function Main({ title, children }: MainProps) {
	return (
		<div className="flex min-h-screen items-center justify-center font-sans bg-primary-100 dark:bg-primary-950">
			<main className="flex min-h-screen w-full max-w-7xl flex-col items-center sm:items-start">
				{title && <h1 className="text-2xl font-bold">{title}</h1>}
				{children}
			</main>
		</div>
	);
}