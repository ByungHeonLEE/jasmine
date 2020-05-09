import React, { useState } from "react";
interface TodoFormProps {
  //add 를 해야 형성하잖아 그걸 받아오기 위해 상위 프롭
  addTodo: (content: string) => void;
}
function TodoForm({ addTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState<string>("");
  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    addTodo(inputText);
  };
  console.log(inputText);
  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-form-input"
        placeholder="할일을 입력"
        value={inputText}
        onChange={handelInput}
      />
      <button className="todo-form-btn" onClick={handleSubmit}>
        확인
      </button>
    </div>
  );
}

export default TodoForm;
