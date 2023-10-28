import React, { useState } from "react"
function TodoList() {

  const [todolist, setTodolist] = useState([]);

  const [todo, setTodo] = useState("");

  console.log(todolist);

  const [editTodo, setEditTodo] = useState({ id: null, text: "" });


  const handldelete = (id) => {
    // setTodolist(todolist.filter((obj) => obj.id !== id));
    const updateTodoList =todolist.filter((obj)=>obj.id !==id)
    setTodolist(updateTodoList)
  }


  const handleupload = () =>{
    if(todo.length>0){
      setTodolist([...todolist,{ id: Date.now(),text:todo}])
    }
    else{
      alert("please Enter the list")
    }
  }

  // editing 
  const handleEdit =(id,text)=>{
    setEditTodo({id,text})
  }
// editing and updating
  const handleupdate =()=>{
      const updateTodo =todolist.map((obj)=>
      obj.id === editTodo.id?
      {
        id:editTodo.id, text:editTodo.text
      }:obj
      );
      setTodolist(updateTodo);
      setEditTodo({id:null ,text:""})
  }


  return (
    <>
      <div className=" h-screen bg-gradient-to-r to-orange-300 from-cyan-700 flex justify-center items-center flex-col ">
        <div className="border border-slate-50 bg-slate-300 rounded-ss-2xl rounded-ee-2xl ">
          <h1 className="font-serif text-7xl  ">TODO LIST</h1>
        </div>

        <div className=" rounded-full w-2/3 h-20 mt-10 flex justify-center items-center bg-white ">
            <input 
              className=" h-10 ms-8 font-bold w-full outline-none text-3xl"
              type="text"
              onChange={(e) => setTodo(e.target.value)}
            />
            <i 
             onClick={()=>handleupload ()}
              class="fa-solid fa-plus fa-flip-horizontal me-6 font-semibold text-3xl " 
            ></i>
          
        </div>
        
          {
          todolist.length > 0 ? (
            <div className="w-2/3 mt-4">
              <div className="   ms-10 me-10 mb-2 mt-5 flex justify-between items-center ">
                <h1 className="text-5xl border rounded-lg bg-white">Task:</h1>
                <button onClick={()=>setTodolist([])}><i style={{color:'darkred'}} class="fa-solid fa-trash fa-sm text-4xl"></i></button>
              </div>
 
              {
              todolist.map((item )=> (
                  <div  className="h-20 px-3 rounded-full py-3 bg-cyan-100 flex justify-between border  items-center">
                    <div>
                      {/* text is tow part one is if caes value is mach  and other case is not mach the item.text is dispaly*/}
                        <h3  className="text-3xl ">
                          {
                          editTodo.id === item.id?(
                            <input type="text" className="text-red-600 outline-none underline  bg-cyan-100 " onChange={(e)=>setEditTodo({id:item.id, text:e.target.value})} 
                            value={editTodo.text}/>
                          ):
                          (
                            <span>{item.text}</span>
                          )
                        }</h3>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        {/* button create  those are the tow button one handleupadte and handleEdit and last one is handledelete*/}
                        {
                          editTodo.id=== item.id?(
                            <button onClick={handleupdate} className=" text-3xl me-4">Save</button>
                          ):(
                            <button onClick={()=>handleEdit(item.id, item.text)}  className=" text-3xl me-4">EDIT</button>
                          )
                        }                     
                        <button onClick={()=>handldelete(item.id)}><i style={{color:'red'}} class="fa-solid fa-trash fa-sm text-2xl"></i></button>
                      </div>
                    </div>

                  </div>
              ))}
            </div>
          ) : (
            <div className="h-16 w-1/3 mt-5 flex justify-center items-center text-center border rounded-lg ">
              <h2 className="text-red-600  text-4xl">No tasks added yet.</h2>
            </div>
          )}
      </div>
    </>
  );
}

export default TodoList;
