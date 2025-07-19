function UserProfile(props) {
   const user = useContext(UserContext);
   console.log("UserProfile props:", props);

   return (
     <div>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 }

 export default UserProfile;