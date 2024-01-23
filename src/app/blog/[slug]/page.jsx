import Image from "next/image";
import styles from "./singlePost.module.css";
import PostImage from "../../../../public/postimage.jpg";
import UserData from "@/components/userdata/userdata";
import { Suspense } from "react";
const GetData = async  (slug)=>{

  const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{cache:"no-store"})
  if(!res.ok){
      throw new Error("Someting went wron")
  }
  return res.json()
}

const SingalePagePose = async ({params}) => {

 


  const {slug} = params
  const post = await GetData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={PostImage} fill className={styles.img} />
      </div>
      <div className={styles.textContiner}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image src={PostImage}   width={50} height={50} className={styles.Userimg} />
          <Suspense fallback={<div> Loading...... </div>}>

          <UserData userID={post.id}/>
          </Suspense>

          <div className={styles.detailsTex}>
            <span className={styles.detailsTitle}>Publish</span>
            <span className={styles.detailsValue}>01.01.2024</span>
          </div>

         
        </div>
        <div className={styles.content}>
           {post.body}
          </div>
      </div>
    </div>
  );
};

export default SingalePagePose;
