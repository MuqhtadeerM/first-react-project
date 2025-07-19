import style from "./css/userProfile.module.css";
function UserProfile() {
  return (
    <>
      
      <div className={style.card}>
        <div>
          <img
            className={style.img}
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740"
          />
        </div>
        <div className={style.textWaper}> 
          <h4>Muqhtadeer</h4>
        <p>software dev</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
