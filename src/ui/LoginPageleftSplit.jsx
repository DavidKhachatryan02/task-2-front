import LoginPageImg from "~/assets/LoginPageImg.png";

const styles = {
  container: "bg-neutral-100 flex flex-col justify-center items-center",
  title: "text-center text-sky-900 text-2xl md:text-4xl font-black uppercase",
  img: "object-scale-down w-full ",
};

const LeftSplit = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>PLAYGROUND</p>
      <img className={styles.img} src={LoginPageImg} loading="lazy" alt="LoginImg" />
    </div>
  );
};

export default LeftSplit;
