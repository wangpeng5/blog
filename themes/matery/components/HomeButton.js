
export default function GoHomeButton() {

  return (
    <div className={'justify-center items-center text-center' } onClick={() => window.location.href="/"}>
      <i id="goHomeButton" className="fa-solid fa-house fas transform hover:scale-105 duration-200
                 text-white bg-indigo-700  w-10 h-10  py-2.5 rounded-full dark:bg-black cursor-pointer" />
    </div>
  )
}
