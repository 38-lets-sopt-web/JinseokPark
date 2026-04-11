const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");

let todos = JSON.parse(localStorage.getItem("myTodos")) || [];

const render = () => {
  todoList.innerHTML = todos.map((todo) => `<li>${todo}</li>`).join("");
};

addBtn.addEventListener("click", () => {
  const value = todoInput.value.trim();

  if (value) {
    // todos에 추가, 로컬 스토리지에도 추가
    todos.push(value);
    localStorage.setItem("myTodos", JSON.stringify(todos));

    // 화면에 그리기
    render();

    // 인풋 비우기
    todoInput.value = "";
  }
});

// 화면 새로고침 시 화면에 그리는 용도
render();
