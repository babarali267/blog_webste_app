
const toggle_btn = document.querySelector('#nav_toggle')
const nav= document.querySelector('#nav')

toggle_btn.addEventListener('click',()=>{
     nav.classList.toggle('active')
})

// 

const Data = [
      {
          id:1,
           post_pic : "assets/images/blog/post.png",
           title: "The Impact of Technology on the Workplace: How Technology is Changing",
           badge: "Technology",
           author_pic :"assets/images/person.png",
           author:"Elizabeth",
           date:"August 20,2022"
      },
      {
          id:2,
           post_pic : "assets/images/blog/post.png",
           title: "The Impact of Technology on the Workplace: How Technology is Changing",
           badge: "Technology",
           author:"Elizabeth",
           author_pic :"assets/images/person.png",
           date:"August 20,2022"
      },
      {
          id:2,
           post_pic : "assets/images/blog/post.png",
           title: "The Impact of Technology on the Workplace: How Technology is Changing",
           badge: "Technology",
           author:"Elizabeth",
           author_pic :"assets/images/person.png",
           date:"August 20,2022"
      },
      {
          id:2,
           post_pic : "assets/images/blog/post.png",
           title: "The Impact of Technology on the Workplace: How Technology is Changing",
           badge: "Technology",
           author:"Elizabeth",
           author_pic :"assets/images/person.png",
           date:"August 20,2022"
      },
      {
          id:2,
           post_pic : "assets/images/blog/post.png",
           title: "The Impact of Technology on the Workplace: How Technology is Changing",
           badge: "Technology",
           author:"Elizabeth",
           author_pic :"assets/images/person.png",
           date:"August 20,2022"
      }
      ,
      {
          id:2,
           post_pic : "assets/images/blog/post.png",
           title: "The Impact of Technology on the Workplace: How Technology is Changing",
           badge: "Technology",
           author:"Elizabeth",
           author_pic :"assets/images/person.png",
           date:"August 20,2022"
      }
     

]



const blog = document.querySelector('.my_posts');

const  DisplayData = Data.map((item)=>{
      return `
         <div class="post">
          <div class="post_img">
            <img src="${item.post_pic}"  alt=""/>
          </div>
           <div class="post_badge">
              <span> ${item.badge}</span>
           </div>
            <h3>${item.title}</h3>
            <div class="post_author">
                 <span class="auth_pic">
                 <img src="${item.author_pic}"  alt=""/> </span>
                 <span class="auth_name">  ${item.author}  </span>
                 <span class="date">  ${item.date}  </span>
               
            </div>
         </div>
      
      
      `
})

const blogHtml = DisplayData.join('');

blog.innerHTML = blogHtml
