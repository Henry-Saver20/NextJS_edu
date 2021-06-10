import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
export default function first()
{
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <div class="container">
                <h1>First Blog Post</h1>
                <h3>May 31, 2021</h3>
                <p>This is a test for a blog application. Here is where some interesting writing would go!</p>

                <h2><a href='../react'>Return to main</a></h2>
            </div>
        </Layout>
    );
}