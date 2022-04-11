function classNames(...params) {
    let result = [];

    print(params);

    for(let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'string' || typeof params[i] === 'number') {
            isValid = !!params[i];
            if (isValid) {
                result.push(params[i]);
            }
        }
        else if (Array.isArray(params[i])) {
            result = result.concat(classNames(...params[i]));
        }
        else if (typeof params[i] === 'object') {
            Object.keys(params[i]).forEach(key => {
                if (!!params[i][key]) {
                    result.push(key);
                }
            })
        }
    }

    return result.join(' ');
}

const res = classNames('a',['d',0,false,{x:0,y:1}],'c');
print(res);
