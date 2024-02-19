import { FC } from "react"

const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-#00616c px-5 sm:px-28px font-sans py-cpadding sm:py-13px rounded-full text-buttons sm:text-xl text-white font-medium hover:bg-black duration-2000 shadow-lg">{text}</button>
  )
}
export default Button