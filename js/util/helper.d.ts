export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const isMap: (val: unknown) => val is Map<any, any>;
export declare const isSet: (val: unknown) => val is Set<any>;
export declare const isDate: (val: unknown) => val is Date;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isString: (val: unknown) => val is string;
export declare const isSymbol: (val: unknown) => val is symbol;
export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
