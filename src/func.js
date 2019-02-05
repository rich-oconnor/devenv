/**
 * funcs module.
 * @module src/func
 * @since 1.0
 * @todo document all functions
 */


/**
 * Add 2 arguments to return result
 *
 * @export
 * @param {number} first
 * @param {number} second
 * @returns {number} product
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function add(first,second) {
    return first + second;
}

export function square(value){
    return mult(value,value);
}

/**
 * Subtract second argument from first
 *
 * @export
 * @param {number} first - the first argument
 * @param {number} second - the second srgument
 * @returns {number} result - result of first - second
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function sub(first,second) {
    return first - second;
}

/**
 * Multiply two arguments
 *
 * @export
 * @param {number} first - first number
 * @param {number} second - second number
 * @returns number
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function mult (first,second) {
    return first * second;
}

/**
 * returns a function that returns arg
 *
 * @export
 * @param {*} arg
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function identityf(arg){
    return function(){

        return arg;
    }
}


/**
 * {@link addf}
 * returns a function that receives a number as an argument and adds the argument of the initiaizer to the argument of the invocation
 *
 * @export
 * @param {number} arg
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function addf(arg){
    return function(arg2){
        return arg + arg2;
    }
}

/**
 * returns a function that receives a function argument
 *
 * @export
 * @param {function} func
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function liftf(func){
    return function(first){
        return function(second){
            return func(first, second);
        }
    }
}

/**
 * Curry-fy binary function with any number of arguments
 *
 * @export
 * @param {function} binary
 * @param {number} args
 * @returns function
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 * @see {@link module:src/func.liftf liftf} for further information.
 *
 */
export function curry(binary, ...args){
    return function(...args2){
        return liftf(binary)(...args)(...args2);
    }
}

/**
 * increment a value by 1
 *
 * @export
 * @param {number} arg
 * @returns {number}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 * @see {@link module:src/func.add add} for further information.
 */
export function inc(arg){
    return add(arg,1);
}

/**
 * increment a value by 1 (curry)
 *
 * @export
 * @param {*} arg
 * @returns {number}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 * @see {@link module:src/func.curry curry} for further information.
 */
export function inc2(arg){
    return curry(inc,arg,1)();
}


/**
 *
 *
 * @export
 * @param {number} arg
 * @returns {number}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 * @see {@link module:src/func.addf addf} for further information.
 */
export function inc3(arg){
    return addf(arg)(1);
}

/**
 *
 *
 * @export
 * @param {function} binary
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function twice(binary){
    return function(arg){
        return binary(arg,arg)
    }
}

/**
 *
 *
 * @export
 * @param {*} binary
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function reverse(binary){
    return function(...arg){
        return binary(...arg.reverse())
    }
}


/**
 *
 *
 * @export
 * @param {function} func1
 * @param {function} func2
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function composeu(func1, func2){
    return function(...args){
        return func2(func1(...args));
    }
}

/**
 *
 *
 * @export
 * @param {function} func1
 * @param {function} func2
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function composeb(func1, func2){
    return function(arg1, arg2, arg3){
        return func2(func1(arg1,arg2), arg3);
    }
}

/**
 *
 *
 * @export
 * @param {function} func
 * @param {function} count
 * @returns {function}
 * @author Rich O'Connor <rich.oconnor@outlook.com>
 */
export function limit(func,count){
    return function(...args){
        if(count >= 1)
        {
            count -= 1;
            return func(...args);
        }
        return undefined;
    }
}

/**
 * from Generator function
 *
 * @export
 * @param {number} val -  the number to start our generator from
 * @returns {function} - generator function
 */
export function from(val){
    return function(){
        var start = val;
        val += 1;
        return start;
    }
}

/**
 * return a generator that produces a value until end
 *
 * @export
 * @param {function} gen - the generator
 * @param {number} end - the limit
 * @returns {function} - generator
 */
export function to(gen,end){
    return function(){
        var value = gen();
        if(value < end)
        {
            return value;
        }
        return undefined;
    }
}

/**
 * return a generator that will produce values from start - end
 *
 * @export
 * @param {number} start
 * @param {number} end
 * @returns {function} - generator
 */
export function fromTo(start, end){
    return to( from(start), end);
}

export function element (array, gen){
    if(typeof gen !== "function" ){
        gen = fromTo(0,array.length);
    }
    return function (){
        var index = gen();
        if( index !== undefined){
            return array[index];
        }
    }
}

export function concat(...gens){
    var next = element(gens),
        gen = next();

    return function recur(){
        var value = gen();
        if( value === undefined){
            gen = next();
            if( gen !== undefined){
                return recur();
            }
        }
        return value;
    }
}

export function gensymf(prefix){
    var number = 0;
    return function() {
        number += 1;
        return prefix.trim() + number;
    }
}

export function gensymff(unary, seed){

    return function(prefix) {
        var number = seed;
        return function(){
            number = unary(number);
            return prefix + number;
        }
    }
}

export function fibonaccif(a, b){
    return function (){
        var next = a;
        a = b;
        b += next;
        return next;
    }
}

export function counter(value){
    return {
        up: function(){
            value += 1;
            return value;
        },
        down: function(){
            value -= 1;
            return value;
        }
    };
}

export function revokable(binary){
    return{
        invoke: function(...args){
            if(binary !== undefined){
                return binary(...args);
            }
        },
        revoke: function(){
            binary = undefined;
        }
    }
}

export function m(value, source){
    return {
        value: value,
        source: (typeof source === "string") ? source : String(value)
    };
}

export function addm(m1,m2){
    return m(
        m1.value + m2.value,
        `(${m1.source}+${m2.source})`
    );
}

export function liftm(binary,op){
    return function(a,b){
        if( typeof a === "number"){
            a = m(a);
        }
        if( typeof b === "number"){
            b = m(b);
        }
        return m(binary(a.value,b.value),`(${a.source}${op}${b.source})`);
    };
}

export function exp(value){
    return (Array.isArray(value)) ? value[0]( exp(value[1]),exp(value[2]) )  : value;
}

export function addg(first){
    function more(next){
        if( next == undefined){
            return first;
        }
        first += next;
        return more;
    }
    if( first !== undefined){
        return more;
    }
}

export function liftg(binary){
    return function (first){
        if( first == undefined){
            return first;
        }
        return function more(next){
            if( next == undefined){
                return first;
            }
           first = binary(first,next);
            return more;
        }
    }
}

export function arrayg(first){
    var array = [];
    function more(next){
        if( next == undefined){
            return array;
        }
        array.push(next);
        return more;
    }
    return more(first);
}

export function continuez(any){
    return function(callback, ...x){
        return callback(any(...x));
    }
}
