import logo from "./logo.svg";
import "./App.css";

function deleteElement(e) {
    console.log(1);
}

function addItemToList(e) {
    const item = document.querySelector(".search-box");
    if (item.value !== "") {
        let newPara = document.createElement("p");
        newPara.textContent = item.value;
        let newItem = document.createElement("li");
        newItem.classList.add("item");
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "X";
        deleteBtn.setAttribute("onClick", deleteElement);
        newItem.appendChild(newPara);
        newItem.appendChild(deleteBtn);
        document.querySelector(".item-list").appendChild(newItem);
        item.value = "";
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="react-logo" />
                <h3>Todo App</h3>
                <img src={logo} className="App-logo" alt="react-logo" />
            </header>
            <div className="search">
                <input className="search-box" />
                <button className="search-btn" onClick={addItemToList}>
                    ADD
                </button>
            </div>
            <div>
                <ul className="item-list"></ul>
            </div>
        </div>
    );
}

export default App;
