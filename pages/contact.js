import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import stylesheet from '../styles/about.scss';

 const Contact = (props) => (
   <Layout  title="Contact Us | Charisol"> 
   <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
     <div id="panel" data-slideout-ignore>
       <section className="pricing">
         <Navbar />
         <div class="content">
           <div class="row">
             <div class="six columns">
               <img src={require('../assets/img/bg_contact.png')}  alt="Scaling software development teams." />
             </div>
             <div class="six columns">
               <div class="text-content">
                 <span class="heading-wrapper">
                   <h1 class="heading">
                     Get in Touch.
                  </h1>
                 </span>
                 <span class="sub-text-wrapper">
                   <p class="sub-text">
                     Let’s help you figure out your software engineering and design needs.
                     We are super excited to get to chat with you and eager to work with you to bring your next project to life. Drop us a line or two and we will get in touch with you.
                </p>
                 </span>
                 <div class="m-b-md">
                   <h6>Email: <a href="mailto:info@charisol.io?subject=From Charisol Website">info@charisol.io</a></h6>
                 </div>
                 <form id="start-form" action="mailer.php" method="POST">
                   <div class="row">
                     <div class="six columns">
                       <div class="div">
                         <label for="name">Name</label>
                         <input class="u-full-width" type="text" id="name" name="name" required />
                         <p class="light"><em>Tip: Could be your fullname or company name.</em></p>
                       </div>
                     </div>
                     <div class="six columns">
                       <div class="div">
                         <label for="email">Email</label>
                         <input class="u-full-width" type="email" id="email" name="email" required />
                         <p class="light"><em>Tip: Could be your personal email address or company email address.</em></p>
                       </div>
                     </div>
                   </div>
                   <div class="div">
                     <label for="project_description">Message</label>
                     <textarea class="u-full-width" id="message" rows="8" name="project_description" required></textarea>
                     <p class="light"><em>Tip: Could be a project brief, a partnership enquiry or asking about vacancies</em></p>
                   </div>
                   <button class="m-t-lg btn-curve-purple full" type="submit" value="Submit">Submit</button>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   </Layout> 
  )

  export default Contact