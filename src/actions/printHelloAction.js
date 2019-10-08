export const PRINT_HELLO = 'PRINT_HELLO';

export const printHelloWorld = ()=> {
  console.log('hello action')
  // api call here
  return { type:PRINT_HELLO, payload: {message: 'hello worldddd'}}
}
