import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          GS<a href="https://twitter.com/GSSPmusic">SP</a>
        </h1>

        <h1 className={styles.card}>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>

        <div className={styles.grid}>

          {/* <div className={styles.card}>
            <h3 className={styles.title}><Link href="/CODE/code-page">CODE</Link></h3>
            <p>View examples of code projects that I have worked on</p>
          </div> */}

          <div className={styles.card}>
            <h3 className={styles.title}><a href="https://www.github.com/gsspdev/">link text</a></h3>
            <p>View examples of code projects that I have worked on</p>
          </div

          <div className={styles.card}>
            <h3 className={styles.title}><Link href="/FILM/film-page">FILM</Link></h3>
            <p>Movies and shows I have worked on</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}><Link href="/DESIGN/design-page">DESIGN</Link></h3>
            <p>Projects I've worked on as a designer</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}><Link href="/MUSIC/music-page">MUSIC</Link></h3>
            <p>Examples of my musical works</p>
          </div>
          
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}