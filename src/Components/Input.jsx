

const Input = ({label , placeholder , varient , handleChange}) => {
  return (
    <>
        <input
         onChange={handleChange}
          type="text"
          placeholder={placeholder} 
          className={`w-72 rounded-md border border-gray-300 px-4 py-2 ${ varient =="primary" ? "bg-black text-white"  : "bg-red-600 text-white"}  placeholder:text-gray-500 outline-none`}
        />
        
    </>
  )
}

export default Input

