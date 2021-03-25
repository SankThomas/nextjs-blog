import React from "react"
import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Blog Post</title>
      </Head>

      <div>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  )
}

export default FirstPost
