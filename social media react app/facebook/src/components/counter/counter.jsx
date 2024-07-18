import React , {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
 export default function Counter(){
    const [count , setCount] = useState(0);
    const state = useState('nofel');
    console.log(state)
    const handleIncrement=()=>{
        setCount( count + 1)
    }
    const handleDecrement=()=>{
        
        if (count==0){
        setCount(count)
        }else{
            setCount( count - 1)
        }
    }
    
    return(
    <>
     <div className="d-flex justify-content-center align-items-center "  style={{'height':'200px' , 'font-size':'40px'}}>
     
     
     {count}
     </div>

     <div className="d-flex justify-content-center align-items-center">
     <button className='btn btn-success me-3' onClick={handleIncrement}> Increment </button>
     <button className='btn btn-danger me-3'  onClick={handleDecrement}>  Decrement </button>
     </div>

    </>

    )
 }
