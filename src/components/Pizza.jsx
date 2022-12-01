import { Options } from "./Options"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
export const Pizza=()=>{
    return(
    <div className="flex flex-row w-full  justify-center  items-start p-16">
  <div className="rounded-lg flow-root shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
        

      </p>
      <div className="pl-52">
<Options/>
<br />
<Options/>

      </div>
 <button className="bg-orange-300 hover:bg-transparent text-white-300 hover:text-orange-600 rounded shadow hover:shadow-lg py-2 px-4 border border-orange-300 hover:border-transparent">
					<FontAwesomeIcon icon={faCartPlus} /></button>
     
    </div>
  </div>
</div>
    )
}