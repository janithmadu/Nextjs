import styles from './blog.module.css'
import PostCard from '@/components/postcard/postCard';

const GetData = async  ()=>{

    const res  = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"})
    if(!res.ok){
        throw new Error("Someting went wron")
    }
    return res.json()
}

const BlogPage = async () => {
    const posts = await GetData()
    return <div className={styles.container}>
         
       {posts.map((post) => (
         <div className={styles.CardWrapper} key={post.id}>
             <PostCard post={post}/>
         </div>
       )) 
       } 
       
        
        
    </div>;
  };
  
  export default BlogPage;
  