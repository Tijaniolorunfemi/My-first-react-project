
// import React, { useCallback, useEffect, useRef } from 'react'

// function Page({passSave}) {
//     const formInput = useRef(null);
//     const save = useCallback(() => {
//       console.log(formInput.current.value)
//     }, [formInput])

//     useEffect(()=>{
//       passSave(save)
//     }, [passSave, save])
// ref={formInput}

import React from 'react'

const Page = () => {
    
    return (
        <div>
            <div>
                <p>welcome </p>
                <p>welcome </p>
                <input type="text" />
            </div>
        </div>
    )
}

export default Page ;


// import React, {useRef} from "react";
// import PersonalInformation from "./PersonalInformation";
// import "./styles.css";

// export default function App() {
//   const saveRef = useRef(null)
//   return (
//     <div className="App">
//       <PersonalInformation passSave={(ref) => saveRef.current = ref}/>
//       <button onClick={() => saveRef.current()}> save </button>
//     </div>
//   );
// }

// //---------------------------------------------------------

// import React, { useCallback, useEffect, useRef } from "react";

// const PersonalInformation = ({passSave}) => {
//     const formInput = useRef(null);
//     const save = useCallback(() => {
//       console.log(formInput.current.value)
//     }, [formInput])

//     useEffect(()=>{
//       passSave(save)
//     }, [passSave, save])

//     return (
//       <input type="text" ref={formInput} />
//     )
// }

// export default PersonalInformation;
