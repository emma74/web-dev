let globalScopeVar = "I am a globaly scoped variable"

const scopeFunction = () => {
  let localScopeVar = "I am a locally scoped variable";
  console.log(globalScopeVar);
  console.log(localScopeVar);
}

console.log(scopeFunction());

//Try accessing local variable outside the function. Throws an error
// console.log(localScopeVar);