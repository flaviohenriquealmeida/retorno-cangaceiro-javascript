export const partialize = (fn, ...params) => 
    fn.bind(null, ...params);

export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value);    

export const pipe = (...fns) => value => 
    fns.reduce((previousValue, fn) => 
        fn(previousValue), value);        