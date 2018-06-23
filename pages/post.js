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

const serializers = {
  types: {
    image: ({ node: { asset } }) => (
      <picture>
        <img
          style={{ width: "100%",margin:"0 auto 20px" }}
          srcSet={`
            ${urlFor(asset).width(320)} 320w,
            ${urlFor(asset).width(480)} 480w,
            ${urlFor(asset).width(800)} 800w
          `}
          sizes={`
            (max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px
          `}
          src={urlFor(asset)}
        />
      </picture>
    )
  }
};

const CommaJoiner = ({ list = [], conjuction = 'and', separator = ',' }) => <Fragment>{list.map((item, index) => <span key={item}>{item}{
  (list.length === 1) ? '.' :
  (index + 2 === list.length) ? ` ${conjuction} ` :
  (index + 1 === list.length) ? '.' : `${separator} `
  }
  </span>)
}</Fragment>

const BlogPost = ({ title = 'No title', name = 'No name', publishedAt='', categories = [], authorImage = {}, body = [], _updatedAt = '' }) => (
  <Layout  title={title}> 
   <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
	  <div id="panel"  data-slideout-ignore>
		  <section className="pricing">
		  <Navbar />
			<div className="content">
			  <div className="row">
				<div className="pricing-text-wrapper">
				  <div className="text-content">
  
  <div className="post-content">
  <div><img src={urlFor(authorImage).width(50).url()} /></div>
  <h1>{title}</h1>
  <i className="fa fa-pencil"></i> Written by <span>{name}</span> in <span>{categories.length &&  <CommaJoiner list={categories} />}</span> on {format(publishedAt, 'MMMM DD, YYYY')}
  <div className="resp"><BlockContent
    serializers={serializers}
    blocks={body}
    imageOptions={{w: 660, h: 435, fit: 'min'}}
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
	  .post-content img{
    display: block;
    margin-left: auto;
    margin-right: auto;
	max-width: 100%;
    height: auto;
	  }
	  .post-content i{
    color:#1EAEDB;
    }
	  .resp{
  max-width: 740px;
  width:100%;
    height: auto;
	display:block;
	text-align:justify;
	margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  font-size:15px;
        line-height:27px;
    }
	  
    `}</style>
	
	
</Layout>
)

BlogPost.getInitialProps = async (req) => {
  return await client.fetch(`*[slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
	  publishedAt,
      body,
      _updatedAt
    }`, {slug: req.query.slug})

    const promise1 = new client.fetch(function(resolve, reject) {
      throw 'Uh-oh!';
    });

    promise1.catch(function(error) {
      console.log(error);
    });
}

export default BlogPost