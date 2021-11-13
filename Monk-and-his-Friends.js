// https://www.thecscience.com/2021/10/hackerearth-monk-and-his-friends-problem-solution.html
// https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/practice-problems/algorithm/monk-and-his-friends/
 
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = " ";
                                                              // Reading input from STDIN

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function (){
  main(stdin_input);
})


function main(input)
{
  input = input.split('\n');
  
  for(var i=1;i<input.length;i+=2)
    getMonk(parseInt(input[i].split(' ')[0]),input[i+1].split(' '));
}


function getMonk(n, candies)
{
  var cached={};
  
  for(var j=0; j<n;j++)
    cached[candies[j]] = true;
    
   for(var i=n; i<candies.length;i++)
    if(cached[candies[i]]===true)
      process.stdout.write('YES\n');
     
     else{
        cached[candies[i]] = true;
        process.stdout.write('NO\n');
        }
}
