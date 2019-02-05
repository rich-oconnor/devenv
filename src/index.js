/* eslint-disable no-console */
import {
    getUsers,
    deleteUser
} from "./api/userApi";

//import * as fun from "./func";
import {Drone} from "./HtmlHelper";

let drone = new Drone({id: 1,rego: "DR001", numPropellors:4});

console.log(drone);
/*
console.log(fun.add(1,3));
console.log(fun.sub(1,3));
console.log(fun.mult(2,3));
console.log(fun.identityf(23)());
console.log(fun.addf(3)(4));
console.log(fun.liftf(fun.add)(2)(6));
console.log(fun.curry(fun.mult,5)(6));
console.log(fun.inc(6));
console.log(fun.inc2(6));
console.log(fun.inc3(6));
var doubl = fun.twice(fun.add);
console.log(doubl(11));
var square = fun.twice(fun.mult);
console.log(square(11));

var bus = fun.reverse(fun.sub);
console.log(bus(3,2));

var cu = fun.composeu(doubl,square);
console.log(cu(5));

var cb = fun.composeb(fun.add,fun.mult);
console.log(cb(2,3,7));

var l1 = fun.limit(fun.add,3);
console.log(l1(3,7));
console.log(l1(3,7));
console.log(l1(3,7));
console.log(l1(3,7));

var index = fun.from(0);
console.log(index());
console.log(index());
console.log(index());

var to = fun.to(fun.from(1),3);
console.log(to());
console.log(to());
console.log(to());

var ft = fun.fromTo(0,3);
console.log(ft());
console.log(ft());
console.log(ft());
console.log(ft());

var ele = fun.element(["a","b","c","d"], fun.fromTo(1,3));
console.log(ele());
console.log(ele());
console.log(ele());

var ele2 = fun.element(["a","b","c","d"]);
console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());
console.log(ele2());

var con = fun.concat(fun.fromTo(0,3),fun.fromTo(0,2));
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());

var gh = fun.gensymf("H");
var gg = fun.gensymf("G");

console.log(gg());
console.log(gg());
console.log(gg());
console.log(gh());
console.log(gh());
console.log(gh());

var gsf = fun.gensymff(fun.inc, 0);
gh = gsf("H");
gg = gsf("G");

console.log(gg());
console.log(gg());
console.log(gg());
console.log(gh());
console.log(gh());
console.log(gh());

var fib = fun.fibonaccif(0,1);
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

var o = fun.counter(10),
    up = o.up, down = o.down;

console.log(up());
console.log(down());
console.log(down());
console.log(up());

var sae = [fun.mult,5,11];
console.log(fun.exp(sae));
console.log(fun.exp(42));

var nae = [
    Math.sqrt,
    [
        fun.add,
        [fun.square, 3],
        [fun.square, 4]
    ]
];
console.log(fun.exp(nae));

console.log(fun.addg());
console.log(fun.addg(2)());
console.log(fun.addg(2)(7)());
console.log(fun.addg(3)(0)(4)());
console.log(fun.addg(1)(2)(4)(8)());

console.log(fun.liftg(fun.mult)());
console.log(fun.liftg(fun.mult)(3)());
console.log(fun.liftg(fun.mult)(3)(0)(4)());
console.log(fun.liftg(fun.mult)(1)(2)(4)(8)());

console.log(fun.arrayg())
console.log(fun.arrayg(3)())
console.log(fun.arrayg(3)(4)(5)())

var sq = fun.continuez(Math.sqrt);
console.log(sq(console.log,81));
*/

getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody += `<tr>
        <td> <a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById("users").innerHTML = userBody;

    const deleteLinks = global.document.getElementsByClassName("deleteUser");
    Array.from(deleteLinks, link => {
        link.onClick = function (event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            console.log("delete");
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});

