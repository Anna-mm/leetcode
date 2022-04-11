function cache(fn) {
    const _cache = new Map();
    return (a, b) => {
        const key = Array.from(arguments);
        if (_cache.get(key)) {
            print('from cache');
            return _cache.get(key);
        }
        else {
            const res = fn(a, b);
            _cache.set(key, res);
            print('from calc');
            return res;
        }
    }
}

function complex(a, b) {
   return a+b;
}

const cachedComplex = cache(complex);
print(cachedComplex(1, '2'));
print(cachedComplex(1, 2));