import { useState } from "react";
// import "./App.css";

function ToDo(props) {
  const toDos = props.toDos;
  const setToDos = props.setToDos;
  const title = props.cardTitle;
  const body = props.cardBody;
  const id = props.id;
  const isDone = props.cardIsDone;

  return (
    <div className=" bg-red-400">
      <p>상태: {isDone === true ? "완료" : "진행중"}</p>
      <p>{title}</p>
      <p>{body}</p>
      <button
        onClick={() => {
          setToDos(
            toDos.map((toDo) => {
              if (toDo.id === id) {
                toDo.isDone = !toDo.isDone;
                return toDo;
              }
              return toDo;
            })
          );
        }}
      >
        완료
      </button>
      <button
        onClick={() => {
          setToDos(() => {
            return toDos.filter((toDo) => {
              if (toDo.id === id) {
                return false;
              }
              return true;
            });
          });
        }}
      >
        삭제
      </button>
    </div>
  );
}

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [toDos, setToDos] = useState([]);
  console.log(toDos);

  return (
    <>
      <form>
        <input
          onChange={(event) => {
            const text = event.target.value;
            setTitle(text);
          }}
          type="text"
          placeholder="제목"
        />
        <input
          onChange={(event) => {
            const text = event.target.value;
            setBody(text);
          }}
          type="text"
          placeholder="내용"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            const newToDo = {
              cardTitle: title,
              cardBody: body,
              isDone: false,
              id: new Date().getTime(),
            };
            setToDos(() => {
              return [newToDo, ...toDos];
            });
          }}
        >
          추가
        </button>
      </form>

      <h2 className="text-4xl">진행중</h2>
      <div className="flex">
        {toDos
          .filter((toDo) => {
            if (toDo.isDone === false) {
              return true;
            }
            return false;
          })
          .map((toDo) => {
            const title = toDo.cardTitle;
            const body = toDo.cardBody;
            const isDone = toDo.isDone;
            const id = toDo.id;
            return (
              <ToDo
                toDos={toDos}
                setToDos={setToDos}
                cardTitle={title}
                cardBody={body}
                cardIsDone={isDone}
                id={id}
              />
            );
          })}
      </div>
      <h2 className="text-4xl">완료</h2>
      <div className="flex">
        {toDos
          .filter((toDo) => {
            if (toDo.isDone === true) {
              return true;
            }
            return false;
          })
          .map((toDo) => {
            const title = toDo.cardTitle;
            const body = toDo.cardBody;
            const isDone = toDo.isDone;
            const id = toDo.id;
            return (
              <ToDo
                toDos={toDos}
                setToDos={setToDos}
                cardTitle={title}
                cardBody={body}
                cardIsDone={isDone}
                id={id}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
