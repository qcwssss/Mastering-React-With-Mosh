import React from "react";
import ReactDOM from "react-dom";
import { Teacher } from "./teacher";

const element = <h1>Hello World</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById('root'));
console.log("hello you");


const teacher = new Teacher('Mosh', 'Bachelor');
teacher.teach();
console.log(teacher);
