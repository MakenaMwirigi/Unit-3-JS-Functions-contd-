// code your solution here
// Function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function that returns a function
  function wrapAdjective(wrap = "%") {
    return function(adjective = "a dedicated programmer") {
        return `You are ${wrap}${adjective}${wrap}!` ;
    };
  }