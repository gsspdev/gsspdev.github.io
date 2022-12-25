import Head from 'next/head';
import Link from 'next/link';

export default function MusicPage() {
    return (
        <>
            <Head>
                <title>Music Page</title>
            </Head>
            <h1>Some of my original compositions</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
    }