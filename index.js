var number = 0

function takeANumber() {
  number++
  return `Welcome, you are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliCurrentLine) {
 if (katzDeliCurrentLine.length === 0) {
   return `The line is currently empty.`;
 } 
   var line = [];
   for (let i = 0; i < katzDeliCurrentLine.length; i++) {
    line.push(`${i+1}. ${katzDeliCurrentLine[i]}`);
   }
  return `The line is currently: ${line.join(', ')}`;
 }