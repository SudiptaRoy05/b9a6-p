


const loadAllPost = async (categorys) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${categorys? `?category=${categorys}` : " "}`
  );

  const data = await res.json();
  console.log(data.posts);
};

const handleSearchData = () => {
    const inputValue = document.getElementById('inputField').value
    console.log(inputValue);


    loadAllPost(inputValue);
};

loadAllPost();
