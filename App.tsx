import * as React from 'react';
import './style.css';
const inital_list = [
  { id: 1, name: 'vishal', age: 25 },
  { id: 2, name: 'singh', age: 215 },
  { id: 3, name: 'paltu', age: 21 },
  { id: 4, name: 'himansu', age: 121 },
];
export default function App() {
  const [list, setList] = React.useState(inital_list);
  let [nameref, ageref, idref] = [
    React.useRef(),
    React.useRef(),
    React.createRef(),
  ];

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Editor
        setList={setList}
        nameref={nameref}
        ageref={ageref}
        idref={idref}
      />
      <hr />
      {
        <table>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
            <td>edit</td>
            <td>delete</td>
          </tr>
          {list.map((e, i) => (
            <tr key={e.name}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>
                <button
                  onClick={() => {
                    idref.current = e.id;
                    nameref.current.value = e.name;
                    ageref.current.value = e.age;
                  }}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setList(list.filter((f) => f != e));
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      }
    </div>
  );
}

function Editor({ setList, nameref, ageref, idref }) {
  return (
    <div>
      name:
      <input type="text" ref={nameref} />
      age:
      <input type="text" ref={ageref} />
      <button
        onClick={() => {
          setList((list) => {
            if (idref != undefined) {
              list.some((item) => {
                if (item.id == idref.current) {
                  item.name = nameref.current.value;
                  item.age = ageref.current.value;
                  return true;
                }
              });
              idref.current = undefined;
              nameref.current.value = '';
              ageref.current.value = '';
              return [...list];
            } else
              return [
                ...list,
                {
                  id: list.at(-1).id + 1,
                  name: nameref.current.value,
                  age: ageref.current.value,
                },
              ];
          });
        }}
      >
        submit
      </button>
    </div>
  );
}
