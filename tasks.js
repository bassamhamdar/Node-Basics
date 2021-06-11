
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
const arr = ["study", "eat","drink","live"];

function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  var todo = text.split(' ')[1];
  var name = text.split(' ')[1];
  var toBeRemoved = text.split(' ')[1];
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.split(' ')[0].trim() === 'hello'){
    hello(text);
  }else if(text.trim() === 'help'){
    help();
  }else if(text.trim() === 'list'){
    list(arr)
  }else if(text.split(' ')[0].trim() === 'add'){
    if(typeof todo === 'undefined'){
      error()
    }else{
      add(todo,arr)
    }
  }else if(text.split(' ')[0].trim() === 'remove'){
    remove(toBeRemoved,arr)
  }else if(text.split(' ')[0].trim() === 'edit'){
    edit(text, arr)
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.trim()+'!');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// help function lists all the possible commands
function help(){
  console.log('all possible commands:\nhello\nquit\nlist\nadd\nremove');
}
function list(arr){
  for(i=0; i <arr.length; i++){
    console.log(i+1, arr[i]);
  }
}
function error(){
  console.log('error')
}
function add(todo, arr){

    arr.push(todo.trim())
  
}
function remove(toBeRemoved, arr){
  if(toBeRemoved < 1 || toBeRemoved > arr.length){
    console.log("number does not exist")
  }
  else if(typeof toBeRemoved === 'undefined'){
    arr.pop()
  }else{
    arr.splice(toBeRemoved -1,toBeRemoved)
  }

}
function edit(text, arr){
  console.log(text.split(' ')[1] == 'number')
if(typeof text.split(' ')[1] === 'undefined'){
  console.log('error')
}else if(typeof text.split(' ')[1] =='number'){
  
  for(i=2; i<text.split(' '); i++){
    arr[text.split(' ')[1].trim()] += text.split(' ')[i]
  }
}else {
  arr[arr.length-1] = text.split(' ')[1].trim()
  }

}
// The following line starts the application
startApp("Bassam Hamdar")
