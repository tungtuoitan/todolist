import EditInput from "./editInput";
import FirstInput from "./firstInput";




export default function InputPart (){
    return(
        <div className={`overflow-hidden h-c30 mt-4 mb-8  shrink-0`}>
        <FirstInput /> 
        <EditInput /> 
      </div>
    )
}