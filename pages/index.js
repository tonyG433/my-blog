import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>About me</h2>
           <p>Hello, I'm Tony. I am a Bulgarian student that recently took up coding. I make discord bots using <a href="https://discord.js.org/">discord.js</a> and javascript/typescript, and in most of my free time I moderate different communities on discord. Drop me a follow on <a href="https://github.com/tonyG433">GitHub</a> and on <a href='https://twitter.com/I_am_tonyg'>Twitter</a>, to contact me you can send me a friend reqest on discord, my name on there is tonyG#0001</p>
        <h2>Why this blog?</h2>
            <p>I was messing around with <a href='https://nextjs.org/'>Next.js</a> and I saw a simple step-by-step <a href='https://nextjs.org/learn'>blog tutorial</a> so i decided to give it a go. Here you will find all sorts of things that were written by me. Some articles may be bad, some may be good but you guys decide. My goal is to upload a new article at least once every week, not promissing, more like an upload goal. Anyway, you can read my articles down below, thanks!</p>
      </section>
    </Layout>
  )
}
