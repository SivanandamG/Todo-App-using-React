import { useEffect,useState } from "react";
import {v4 as uuid} from "uuid"
export default function Todos(){

     const [query,setQuery] = useState("");
     const [todos,setTodos] = useState([]);
     const [page,setPage] = useState(1);
     const [loading,setloading] = useState(false);
     useEffect(()=>{
          getData();
     },[page]);

     const getData = ()=>{
          setloading(true);
           setTimeout(
               fetch(`http://localhost:3001/posts?_page=${page}&_limit=2`)
               .then(res=>res.json())
               .then((res)=>{console.log(res);setTodos(res)}).finally(()=>{setloading(false);})
           , 30000); 
     }

     const add = (query)=>{

          const payload = {
               Title:query,
               id:uuid(),
               status:false,
          }

           fetch("http://localhost:3001/posts",
          {
               method:"POST",
               body:JSON.stringify(payload),
               headers:{
                    "content-type":"application/json"
               },
          });getData();

     }

     return (
          <div id="cont">
               <h1 id="title" className="title">Todo...</h1>
               <input placeholder="Add Task..." className="inputTitle" value ={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" />
          <button className="addBtn" onClick={()=>{add(query)}}>Add</button>
          
          <div className="container">{
               todos.map((a)=>{
                    return loading?(<div key={a.id} className="loader"></div>):(
                         <div key={a.id} >
                              <h1 className="Title">Title:{a.Title}</h1>
                         </div>
                    )
               })
          }
          </div>
          <button disabled={page===1} className="prev" onClick={()=>{setPage(page-1)}}>Prev</button>
          <button   className="Next" onClick={()=>{setPage(page+1)}}>Next</button>
          
          </div>
     );
}