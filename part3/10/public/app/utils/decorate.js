export const decorate = (clazz, handler) => {
    Object.keys(handler).forEach(property => {
        const decorators = handler[property].reverse();
        decorators.forEach(decorator => {
            const method = clazz.prototype[property];
            clazz.prototype[property] = function (...args) {
                return decorator(method.bind(this), property, args);
            };  
        });
    });    
};