import React, { Fragment } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { format } from 'date-fns'
import client from '../client'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import ReactDisqusComments from 'react-disqus-comments';

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


const BlogPost = ({title = 'No title', name = 'No name', publishedAt='', otherPosts=[],categories = [], mainImage = {},authorImage = {}, body = [], slug = '', _updatedAt = '' }) => (
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
  <div className="post-content-img"><img src={urlFor(authorImage).width(50).url()} /></div>
  <h1>{title}</h1>
  <i className="fa fa-pencil"></i> Written by <span>{name}</span> in <span>{categories.length &&  <CommaJoiner list={categories} />}</span> Updated on {format(_updatedAt, 'MMMM DD, YYYY')}
  <div className="resp"><BlockContent
    serializers={serializers}
    blocks={body}
    imageOptions={{w: 660, h: 435, fit: 'min'}}
    projectId={client.clientConfig.projectId}
    dataset={client.clientConfig.dataset}
  /></div>
  {/*<i className="fa fa-arrow-left"></i><Link href="/blog"><a>Back to Blog</a></Link>*/}
  <hr></hr>
  
  <div className="margin">
  <div className="morepost">More from Charisol</div>
  <div>
<ul>
    { 
      otherPosts.map(post => 
        <li key={post._id} className="blog-list">
          <a href={`/post/${post.slug}`}>

          <div className="image">
                            <img

                              style={{ width: "140%"}}
                              srcSet={`
            ${urlFor(post.mainImage).width(320)} 320w,
            ${urlFor(post.mainImage).width(480)} 480w,
            ${urlFor(post.mainImage).width(800)} 800w
          `}
                              sizes={`
            (max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px
          `}
                              src={urlFor(post.mainImage)}
                            />
                          </div>  
                          <p className="cat">
                            <i className="fa fa-pencil"></i>
                            <em> {post.categories}</em>
                          </p>
                          <p className="date">
                            {format(post.publishedAt, 'MMMM DD, YYYY')}
                          </p>
          <h1>{post.title}</h1>

          <footer>
                            <div className="author">
                              <img src={urlFor(post.authorImage).width(40).url()} />
                            </div>
                            <p className="name">
                              By
					<em> {post.name}</em>
                            </p>
                          </footer>
          </a>
         
        </li>
      ) 
    }
</ul>
</div>
</div>

  <div className="disqus">
  <ReactDisqusComments 
        shortname="charisol"
        identifier={slug}
        title={title}
        url={`http://www.charisol.io/post/${slug}`}
        category_id=""
        onNewComment={this.handleNewComment}/>

  </div>
  </div>

</div></div>
				</div>
          </div>
      </section>
    </div>
	
	<style jsx>{`
	.post-content{
		  text-align:center;
    }
	  
      .text-content span{
		  font-weight: 600;
		  color: #B721FF;
		  font-style:normal;
	  }
	  .post-content-img{
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
    .morepost{
      font-size:24px;
      font-weight:500;
      margin-left:20px;
      margin-top:50px;
      margin-bottom:-20px;
      color:#B721FF;
    }
    .margin{
      margin-left:-100px;
      margin-right:-100px;
      text-align:left;
    }
    .blog-list { 
      list-style-type:none;
  width:310px;
  height:300px;
  overflow: hidden;
  position: relative;
  float: left;
margin-left:20px;
margin-top:20px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 2px 0 rgba(10, 16, 34, 0.1);
  -moz-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  background-color: #f9f9f9;
  background-position: 0px -20px;
cursor:pointer;

    }	  
  .blog-list:hover{
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3D(0, -20px, 0);
  -moz-transform: translate3D(0, -20px, 0);
  -ms-transform: translate3D(0, -20px, 0);
  transform: translate3D(0, -20px, 0);
background-image: url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);
  
  }
  .blog-list h1{
    margin-top: 1.5rem;
  font-size: 19px;
  line-height: 24px;
  color: #434456;
  font-weight: 500;
  }
  .blog-list a{
    text-decoration:none;
  }
  .blog-list p {
    font-size: 12px;
  color: #6b6c7a;
  }
  .blog-list p em{
    font-weight: 600;
    font-size:12px;
    color: #434456;
    font-style:normal;
  }
  .blog-list ul{
    list-style-type:none;
  }
  
  .blog-list .date{
    font-size: 12px;
  line-height: 12px;
  margin: 5px 0 0;
  color: #6b6c7a;
  text-transform: capitalize;
  }
  .blog-list .text{
    font-size: 15px;
    display:block;
    font-weight: 400;
  line-height: 27px;
  margin-bottom: 12.8px;
  color: #434456;
text-rendering: optimizeLegibility;
  }
  .blog-list .author{
    float: left;
  height:40px;
  border-radius: 50%;
  background-color: white;
  margin-bottom: 12px;
  overflow: hidden;
  }
  .blog-list i{
    color: #fff;
    font-size:8px;
    display: inline-block;
border-radius: 50px;
background-color:#B721FF;
padding: 0.5em 0.6em;
  }
  .blog-list .cat{
    margin-bottom: 1px;
    padding-top:20px;
  }
  .blog-list .cat em{
    margin-left: 3px;
  }
  .blog-list .name{
    padding-top: 10px;
    margin-left: 50px;
  }
  .blog-list h1:hover{
    color:#B721FF;
  }
  .image img{
    width: 10px;
    height:140px;
    object-fit:cover;
    margin-left:-40px;
    margin-top:-40px;
  }
  
  footer{	 
  position: absolute;
  top: 240px;
  left: -38px;
  width: 100%;
  height: 200px;
  background: transparent;
  }
  .disqus{
    margin-top:450px;
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
      _updatedAt,
      "slug": slug.current,
      "otherPosts": *[_type == "post"][0..2] | order(publishedAt desc){
        title,
       "name": author->name,
       "categories": categories[]->title,
       "authorImage": author->image,
       mainImage,
       publishedAt,
       "slug": slug.current,
       body,
       _updatedAt,}
    }`, {slug: req.query.slug})
    
}


export default BlogPost