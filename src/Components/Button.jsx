
const Button = ({text , varient , handleclick}) => {
  return (
    <button onClick={handleclick} className={`${varient == "primary" ? "bg-black text-white" :
      "border border-black text-black"
    } px-4 py-3 font-medium text-sm rounded-full `} >
      {text}
    </button>
  )
}

export default Button