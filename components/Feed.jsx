"use client"
import {useState,useEffect} from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data,handleTagClick})=>{
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post)=>(
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}/>
        ))
      }
      
    </div>
  )
}
const Feed = () => {
  const [searchText,setSearchText]=useState("");
  const [posts,setPosts]=useState([]);
  const [allPosts,setAllPosts]=useState([]);
  const handleSearchChange=(e)=>{
    const value = typeof e === 'string' ? e : e.target.value;
    setSearchText(value);

    setTimeout(()=>{
      const searchResult=allPosts.filter((post)=>
        post.prompt.toLowerCase().includes(value.toLowerCase()) ||
        post.tag.toLowerCase().includes(value.toLowerCase()) ||
        post.creator.username.toLowerCase().includes(value.toLowerCase())
      );
      setPosts(searchResult);
    },500);
  }
  useEffect(()=>{ 
    const fetchPosts=async()=>{
      const response=await fetch("/api/prompt")
      const data=await response.json();
      setPosts(data);
      setAllPosts(data);
    }
    fetchPosts();
  },[])
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder="Search for a tag or a username..." value={searchText}  onChange={handleSearchChange} required className="search_input peer" />
      </form>
      <PromptCardList data={posts} handleTagClick={handleSearchChange}/>
    </section>
  )
}

export default Feed
