const loadAllPost = async (categorys) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      categorys ? `?category=${categorys}` : " "
    }`
  );
  const data = await res.json();
  displayAllPost(data.posts)
//   console.log(data.posts);
};

const displayAllPost = (posts)=>{
    const postContainer = document.getElementById('post-container');
    posts.forEach((post)=>{
        // console.log(post);
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
            <img class="w-[50px]"
              src="${post.image}"
              alt="Movie" />
          </figure>
          <div class="card-body">
            <p> ${post.category}</p>
            <p> ${post.author.name}</p>

            <p> ${post.title}</p>
            <p> ${post.isActive}</p>
            <p> ${post.description}</p>
            <p>viewCount: ${post.view_count}</p>
            <p>Posted Time: ${post.posted_time}</p>
            <p>CommentCount: ${post.comment_count}</p>

            <button class="btn" onclick="markAsReas('${post.description}','${post.view_count}')" >COUNT</butto>
            
          </div>
        </div>
        `

        postContainer.appendChild(div);
    })
}


const markAsReas=(description,viewCount)=>{
    const markAsReadContainer = document.getElementById('markAsReadContainer');
    const div = document.createElement('div');

    div.innerHTML=`
        <div>
         <p>${description}</p>
         <p>${viewCount}</p>
        </div>
    `

    markAsReadContainer.appendChild(div)
    handleCount();
}


const handleCount =()=>{
    const count = document.getElementById('count').innerText;
    const convertCount = parseInt(count);
    const sum = convertCount +1;
    document.getElementById('count').innerText = sum;
} 


const handleSearchData = () => {
  const inputValue = document.getElementById("searchPosts").value;
//   console.log(inputValue);

  loadAllPost(inputValue);
};

loadAllPost();

















// {id: 101, category: 'Comedy', image: 'https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg', isActive: true, title: '10 Kids Unaware of Their Costume', …}
// author
// : 
// {name: 'John Doe'}
// category
// : 
// "Comedy"
// comment_count
// : 
// 560
// description
// : 
// "It is one thing to subject yourself to a costume mishap"
// id
// : 
// 101
// image
// : 
// "https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg"
// isActive
// : 
// true
// posted_time
// : 
// 5
// title
// : 
// "10 Kids Unaware of Their Costume"
// view_count
// : 
// 1568
// [[Prototype]]
// : 
// Object