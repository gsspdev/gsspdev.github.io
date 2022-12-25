import Head from 'next/head';
import Link from 'next/link';

export default function FilmPage() {
    return (
        <>
            <Head>
                <title>Film Page</title>
            </Head>
            <h1>Portfolio of my film work</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
    }