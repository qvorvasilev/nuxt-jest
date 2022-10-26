// export type IDynamicObject = {
//   [key: string|number]: any
// }

export type IDynamicObject<T = unknown> = Record<string|number|symbol, T>
