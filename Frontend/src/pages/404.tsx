import Error from 'next/error';

export default function Error404(): JSX.Element {
	return <Error statusCode={404} title="Page not found"></Error>;
}
