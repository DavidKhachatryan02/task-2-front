import loginPageImg from "../../../../assets/LoginPageImg.png"

const LeftSplit = () => {
  return (
    <div className="bg-neutral-100 flex flex-col justify-center items-center "  >
        <p className="w-96 text-center text-sky-900 text-4xl font-black uppercase">Playground</p>
        <img className="object-scale-down w-96 h-96" src={loginPageImg} alt="LoginImg" />
    </div>
  )
}

export default LeftSplit