import * as React from 'react';
import './style.css';

export default function App() {

  const [list,setList] = React.useState([{name:'vishal',age:25}]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1> 
      <Editor setList={setList}/>
      <hr/>
      {<table> 
        <tr>
          <td>name</td>
          <td>age</td>
        </tr>
        {
          list.map(e=>(
            <tr key={e.name}>
              <td>{e.name}</td>
              <td>{e.age}</td>
            </tr>
          ))
        }
      </table>}
    </div>
  );
}

function Editor({setList}){
  const [name,setName] = React.useState('');
  const [age,setAge] = React.useState('');
  return (
    <div>
      name:<input type='text' onChange={e=>setName(e.target.value)}/>
      age:<input type='text' onChange={e=>setAge(e.target.value)}/>
      <div>

      </div>
      <button onClick={()=>{
        setList(e=>[...e,{name:name,age:age}])
      }}>submit</button>
    </div>
  )

}
