import LoginPageImg from "../assets/LoginPageImg.png";

const styles = {
  container: "bg-neutral-100 flex flex-col justify-center items-center",
  title: "text-center text-sky-900 text-2xl md:text-4xl font-black uppercase",
  img: "object-scale-down w-full md:w-96 md:h-96",
};

const LeftSplit = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>PLAYGROUND</p>
      <img className={styles.img} src={LoginPageImg} alt="LoginImg" />
    </div>
  );
};

export default LeftSplit;
