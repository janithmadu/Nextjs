import styles from './userdata.module.css'

const GetData = async  (userID)=>{

    const res  = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`,{cache:"no-store"})
    if(!res.ok){
        throw new Error("Someting went wron")
    }
    return res.json()
  }
  


const UserData = async ({userID}) => {
    const user = await GetData(userID)
    return <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
    </div>;
  };
  
  export default UserData;
  