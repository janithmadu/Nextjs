import styles from './blog.module.css'
import PostCard from '@/components/postcard/postCard';
const BlogPage = () => {
    return <div className={styles.container}>
        <div className={styles.CardWrapper}>
        <PostCard/>
        </div>
        <div className={styles.CardWrapper}>
        <PostCard/>
        </div>
        <div className={styles.CardWrapper}>
        <PostCard/>
        </div>
        <div className={styles.CardWrapper}>
        <PostCard/>
        </div>
        
        
    </div>;
  };
  
  export default BlogPage;
  