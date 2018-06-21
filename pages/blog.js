import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns/';
import client from '../client';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

const Blog = ({ posts = [] }) => (
  <Layout title="Blog | Charisol Technologies">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <div id="panel" data-slideout-ignore>
      <section className="pricing">
        <Navbar />
        <div className="content">
          <div className="row">
            <div className="pricing-text-wrapper">
              <div className="text-content">
                <span className="heading-wrapper">
                  <h1 className="heading no-reveal">
                    The Charisol Blog
                    </h1>
                </span>
                <span className="sub-text-wrapper">
                  <p className="sub-text no-reveal bl-subhead">
                    We publish on topics such as software development, digital publishing and content strategy.
				  </p>
                </span>

                <div >
                  <ul>

                    {
                      posts.map(({ _id, title = '', name = 'No name', publishedAt = '', categories = [], mainImage = {}, body = [], authorImage = {}, slug = '', _updatedAt = '' }) =>
                        slug && <li key={_id} className="card-list">
                          <div className="image">
                            <img

                              style={{ width: "140%" }}
                              srcSet={`
            ${urlFor(mainImage).width(320)} 320w,
            ${urlFor(mainImage).width(480)} 480w,
            ${urlFor(mainImage).width(800)} 800w
          `}
                              sizes={`
            (max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px
          `}
                              src={urlFor(mainImage)}
                            />
                          </div>
                          <p className="cat">
                            <i className="fa fa-tag"></i>
                            <em> {categories}</em>
                          </p>
                          <p className="date">
                            {format(publishedAt, 'MMMM DD, YYYY')}
                          </p>

                          <Link prefetch href={{pathname: '/post', query: {slug: slug}}}>
                            <a>
                              <h1>{title}</h1>
                            </a>
                          </Link>
                          <div className="overf">
                            <BlockContent
                              blocks={body[1]}
                              imageOptions={{ w: 900, h: 600, fit: 'min' }}
                              projectId={client.clientConfig.projectId}
                              dataset={client.clientConfig.dataset}
                            /></div>
                          <footer>
                            <div className="author">
                              <img src={urlFor(authorImage).width(40).url()} />
                            </div>
                            <p className="name">
                              By
					<em> {name}</em>
                            </p>
                          </footer>
                        </li>
                      )
                    }
                  </ul>
                </div>

              </div></div>
          </div>
        </div>
      </section>
    </div>


    <style jsx>{`
      .bl-subhead { 
		font-weight:300px;
		font-size:22px;
		color: #6b6c7a;
	  }
	  .card-list { 
        list-style-type:none;
		width:37%;
		height:550px;
    overflow: hidden;
    position: relative;
    float: left;
	margin-left:20px;
	margin-top:20px;
    padding: 40px;
    border-radius: 2px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.04);
    box-shadow: 0 2px 2px 0 rgba(10, 16, 34, 0.1);
    -moz-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    background-color: #f9f9f9;
    background-position: 0px -20px;
	cursor:pointer;
	
      }	  
	  .card-list:hover{
		  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3D(0, -20px, 0);
    -moz-transform: translate3D(0, -20px, 0);
    -ms-transform: translate3D(0, -20px, 0);
    transform: translate3D(0, -20px, 0);
	background-image: url(https://prismic-io.s3.amazonaws.com/guidline-prismic%2F7d5f222c-242b-40e0-bc2e-b19c89f18b42_bg-head-blogpost-writing.svg);
    
	  }
	  .card-list h1{
		  margin-top: 1.5rem;
    font-size: 22px;
    line-height: 33px;
    color: #434456;
    font-weight: 500;
	  }
	  .card-list a{
		  text-decoration:none;
	  }
	  .card-list p {
		  font-size: 12px;
    color: #6b6c7a;
	  }
	  .card-list p em{
		  font-weight: 600;
		  font-size:12px;
		  color: #434456;
		  font-style:normal;
	  }
	  .card-list ul{
		  list-style-type:none;
	  }
	  
	  .card-list .date{
		  font-size: 12px;
    line-height: 12px;
    margin: 5px 0 0;
    color: #6b6c7a;
    text-transform: capitalize;
	  }
	  .card-list .text{
		  font-size: 15px;
		  display:block;
		  font-weight: 400;
    line-height: 27px;
    margin-bottom: 12.8px;
    color: #434456;
	text-rendering: optimizeLegibility;
	  }
	  .card-list .author{
		  float: left;
    height:40px;
    border-radius: 50%;
    background-color: white;
    margin-bottom: 12px;
    overflow: hidden;
	  }
	  .card-list i{
		  color: #B721FF;
	  }
	  .card-list .cat{
		  margin-bottom: 1px;
		  padding-top:20px;
	  }
	  .card-list .cat em{
		  margin-left: 3px;
	  }
	  .card-list .name{
		  padding-top: 10px;
		  margin-left: 50px;
	  }
	  .card-list h1:hover{
		  color:#B721FF;
	  }
	  .image img{
		  width: 10px;
		  height:200px;
		  object-fit:cover;
		  margin-left:-40px;
		  margin-top:-40px;
	  }
	  .overf{
		  max-height:120px;
		  overflow:hidden;
		  text-overflow: ellipsis;
		  text-align:justify;
		  content:"";
    position:relative;
	  }
	  .overf:after{
		  content:'';
    width:100%;
    height:100%;    
    position:absolute;
    left:0;
    top:0;
    background:linear-gradient(transparent 50px, #f9f9f9);
	  }
	  footer{	 
    position: absolute;
    top: 530px;
    left: 0;
    width: 100%;
    height: 200px;
    background: transparent;
	  }
    `}</style>
  </Layout>
)

Blog.getInitialProps = async () => {
  return {
    posts: await client.fetch(`*[_type == "post"][0..1000] | order(publishedAt desc){
      _id,
      title,
	  "name": author->name,
	  "categories": categories[]->title,
	  "authorImage": author->image,
	  mainImage,
	  publishedAt,
	  body,
      "slug": slug.current,
      _updatedAt
    }`)
  }

}

export default Blog