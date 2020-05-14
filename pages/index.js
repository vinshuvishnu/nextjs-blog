import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <p>I am having 2+ years of experience as a full stack developer. I am always ready to work on new technologies as I am so enthusiastic and passionate about my profession that's why I got opportunity to work on versatile projects and technologies like PHP, C# with .NET and Javascript( Reactjs, Nodejs, React Native, Angular).

        Brief description of my work history-
        ReactJs:
        I will always prefer ReactJs when its about frontend and great user experience. Using ReactJs I have created Dynamic websites, Chat application, Social media platform, CRM, Admin panel, ECommerce.
        React Server Side Rendering.
        I am using Redux and Context API for store management

        NodeJs:
        When its about fast, realistic and amazing user experience while chatting and doing realtime stuffs then Nodejs would be the best option for such applications.
        With Nodejs I have created chatting apps with socket.io, Static Websites with express and EJS template engine, Admin panels/User Panels, Rest APIs, Content Management Systems. Email client using IMAP.


        Database:
        Relational: Mysql, Postgres, MSSQL



        C#
        I have worked on three API projects with .NET framework.

        Deployment:
Traditional Deployment on Linux, CentOS, AWS EC2, Docker, Google Cloud ,Heroku, Azure and Digital Ocean </p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
             <Link href="/posts/[id]" as={`/posts/${id}`}>
               <a>
                 {title}
                 </a>
                 </Link>
              <br />
              <small className={utilStyles.lightText}>
             <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

