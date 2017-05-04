function allInputs () {
  $('#nameOutput').text($('#nameInput').val());
  $('#textOutput').text($('#textInput').val());
  $('#colorOutput').text($('#colorInput').val());
  $('#checkOutput').text($('#checkInput:checked').val());
  $('#radioOutput').text($('#radioInput:checked').val());
  $('#dateOutput').text($('#dateInput').val());
  $('#numberOutput').text($('#numberInput').val());  
  $('#rangeOutput').text($('#rangeInput').val());  
  $('#telOutput').text($('#telInput').val()); 
  $('#emailOutput').text($('#emailInput').val());  
  $('#passwordOutput').text($('#passwordInput').val());    
}

$('document').ready(allInputs); 
$('form').change(allInputs); 