import React, { Fragment } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { format } from 'date-fns'
import client from '../client'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

const CommaJoiner = ({ list = [], conjuction = 'and', separator = ',' }) => <Fragment>{list.map((item, index) => <span key={item}>{item}{
  (list.length === 1) ? '.' :
  (index + 2 === list.length) ? ` ${conjuction} ` :
  (index + 1 === list.length) ? '.' : `${separator} `
  }
  </span>)
}</Fragment>

const BlogPost = ({ title = 'No title', name = 'No name', publishedAt='', categories = [], authorImage = {}, body = [], _updatedAt = '' }) => (
  <Layout  title="Blog | Charisol Technologies"> 
   <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
	  <div id="panel"  data-slideout-ignore>
		  <section className="pricing">
		  <Navbar />
			<div className="content">
			  <div className="row">
				<div className="pricing-text-wrapper">
				  <div className="text-content">
  
  <div>
  <div><img src={urlFor(authorImage).width(50).url()} /></div>
  <h1>{title}</h1>
  <i className="fa fa-pencil"></i> Written by <span>{name}</span> in <span>{categories.length &&  <CommaJoiner list={categories} />}</span> on {format(publishedAt, 'MMMM DD, YYYY')}
  <div className="resp"><BlockContent
    blocks={body}
    imageOptions={{w: 700, h: 435, fit: 'max'}}
    projectId={client.clientConfig.projectId}
    dataset={client.clientConfig.dataset}
  /></div>
  <i className="fa fa-arrow-left"></i><Link href="/blog"><a>Back to Blog</a></Link>
  </div>


</div></div>
				</div>
          </div>
      </section>
    </div>
	
	<style jsx>{`
	.text-content{
		  text-align:center;
	  }
      .text-content span{
		  font-weight: 600;
		  color: #B721FF;
		  font-style:normal;
	  }
	  .text-content img{
    display: block;
    margin-left: auto;
    margin-right: auto;
	max-width: 100%;
    height: auto;
	  }
	  .text-content i{
    color:#1EAEDB;
	  }
	  .resp{
	max-width: 740px;
    height: auto;
	text-align:justify;
	margin-left:auto;
	margin-right:auto;
    `}</style>
	
	
</Layout>
)

BlogPost.getInitialProps = async ({ query: { slug } }) => {
  return await client.fetch(`*[slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
	  publishedAt,
      body,
      _updatedAt
    }`, { slug })
}

export default BlogPost