import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>GSSP</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi I am a creative workign out of Chicago, IL. I hope that you enjoy viewing my website and works.]</p>
      </section>

      
    </Layout>

    
  );
}