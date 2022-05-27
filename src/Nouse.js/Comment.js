// {/* className="d-inline" */}
//       {/* {item?.map((review, index) => {
//     return (
//         <div key={index}>
//           <Card >
//             <Card.Body>
//               <div>
//                 <div >
//                   <div>
//                     <Image
//                       src={review.imageUrl}
//                       alt="ClientProfile"
//                       className="img-fluid"
//                     />
//                   </div>
//                   <div >
//                     <h5>{review.owner}</h5>
                    
//                   </div>
//                 </div>
                
//               </div>
            
//             </Card.Body>
//           </Card>
//         </div>
//        )})} */}
//main app .js
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './Component/About';
// import Home from './Component/Home';
// import { useState } from 'react';
// import {Users} from "./Component/Users"
// import{ Data }from "./Component/data"
// //import Profile from './Component/Profile';
// import Cardshow from './Component/Card';

// function App() {
//   const [state,setstate]=useState("")
//   const search=(data)=>{
//     return data.filter((item)=>
//       item.title.toLowerCase().includes(state)|| 
//       item.body.toLowerCase().includes(state)
//     )
//   }
//   return (
//     <div className="App">
//       {/* <input type="text" className='search' placeholder='Search' onChange={(e)=>setstate(e.target.value)} />
//       <Home data={search(Users)}/> */}
//       {/* <Profile/> */}
//       <About/>
//        <Cardshow item={Data}/>  
//     </div>
//   );
// }

// export default App;