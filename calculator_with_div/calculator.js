var default_val = 1;
var dot_index = 1;
var num_index = 1;
var add_input_value;
var min_input_value;
var mul_input_value;
var div_input_value;
var sec_add_inp_value;
var sec_div_inp_value;
var sec_mul_inp_value;
var sec_min_inp_value;
var add_sighn = 1;
var min_sighn = 1;
var mul_sighn = 1;
var div_sighn = 1;
var mem_index;
var his_index;
var clear_inp_val_index;

function closeCalculator() {
    document.getElementById("main-block").style.display = 'none';
}
function large_or_small_calculator() {
    var size_calculator = document.getElementById('main-block');
    if (size_calculator.style.width == '99%' & size_calculator.style.height == '100%') {
        size_calculator.style.width = '70%';
        size_calculator.style.height = '70%';
    }
    else {
        size_calculator.style.width = '99%';
        size_calculator.style.height = '100%';
    }
}
function goToTaskbarCalculator() {
    var whole_calculator = document.getElementById('main-block');
    var main_calculator = document.getElementById('main-block');
    if ( main_calculator.style.display != 'none') {
        main_calculator.style.display = 'none';
        var calculator_image = document.createElement('div');
        calculator_image.style.width = '20px';
        calculator_image.style.height = '20px';
        calculator_image.textContent = 'calculator';
        whole_calculator.appendChild(calculator_image);
        calculator_image.onclick = function () {
            whole_calculator.removeChild(calculator_image);
            main_calculator.style.display = 'inline-block';
        }
    }
}
//var add_final_value;
function add() {
   if(add_sighn == 2 && document.getElementById('input-block').value != ""){
        sec_add_input_val = document.getElementById('input-block').value;
        if(sec_add_input_val == ""){
            sec_add_input_val =   document.getElementById('input-block').placeholder;
        }
        var result; 
        result = Number(sec_add_input_val) + Number(add_input_value);
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = result;
        add_input_value = result;
        add_sighn = 2;
        num_index = 1;
        dot_index = 1;
        return add_sighn, num_index,dot_index,add_input_value;
        }
    else if ( add_sighn == 1 ) {
        add_input_value = document.getElementById('input-block').value;
        if(add_input_value == ""){
            add_input_value =   document.getElementById('input-block').placeholder;
        }
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = add_input_value;
        num_index = 1;
        dot_index = 1;
        add_sighn =2;
        return add_input_value, add_sighn, num_index,dot_index;
    }

    return add_sighn;
    
}
function divide() {
    if(div_sighn == 2 && document.getElementById('input-block').value != ""){
        sec_div_input_val = document.getElementById('input-block').value;
        if(sec_div_input_val == ""){
            sec_div_input_val =   document.getElementById('input-block').placeholder;
        }
        var result; 
        result = Number(div_input_value) / Number(sec_div_input_val);
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = result;
        div_input_value = result;
        div_sighn = 2;
        num_index = 1;
        dot_index = 1;
        return div_sighn,div_input_value, num_index,dot_index;
        }
    else if ( div_sighn == 1 ) {
        div_input_value = document.getElementById('input-block').value;
        if(div_input_value == ""){
            div_input_value =   document.getElementById('input-block').placeholder;
        }
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = div_input_value;
        num_index = 1;
        dot_index = 1;
        div_sighn =2;
        return div_input_value, div_sighn, num_index,dot_index;
    }
    
    return div_sighn;
}

function mul() {
    if(mul_sighn == 2 && document.getElementById('input-block').value != ""){
        sec_mul_input_val = document.getElementById('input-block').value;
        if(sec_mul_input_val == ""){
            sec_mul_input_val =   document.getElementById('input-block').placeholder;
        }
        var result; 
        result = Number(mul_input_value) * Number(sec_mul_input_val);
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = result;
        mul_input_value = result;
        mul_sighn = 2;
        num_index = 1;
        dot_index = 1;
        return mul_sighn,mul_input_value, num_index,dot_index;
        }
    else if ( mul_sighn == 1 ) {
        mul_input_value = document.getElementById('input-block').value;
        if(mul_input_value == ""){
            mul_input_value =   document.getElementById('input-block').placeholder;
        }
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = mul_input_value;
        num_index = 1;
        dot_index = 1;
        mul_sighn =2;
        return mul_input_value, mul_sighn, num_index,dot_index;
    }
    
    return mul_sighn;
}
function reduce() {
    if(min_sighn == 2 && document.getElementById('input-block').value != ""){
        sec_min_input_val = document.getElementById('input-block').value;
        if(sec_min_input_val == ""){
            sec_min_input_val =   document.getElementById('input-block').placeholder;
        }
        var result; 
        result = Number(sec_min_input_val) * Number(min_input_value);
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = result;
        min_input_value = result;
        min_sighn = 2;
        num_index = 1;
        dot_index = 1;
        return min_sighn,min_input_value, num_index,dot_index;
        }
    else if ( min_sighn == 1 ) {
        min_input_value = document.getElementById('input-block').value;
        if(min_input_value == ""){
            min_input_value =   document.getElementById('input-block').placeholder;
        }
        document.getElementById('input-block').value = "";
        document.getElementById('input-block').placeholder = min_input_value;
        num_index = 1;
        dot_index = 1;
        min_sighn =2;
        return min_input_value, min_sighn, num_index,dot_index;
    }
    
    return min_sighn;
    
}
function percent() {
    if (min_sighn == 2) {
        var second_input_value = document.getElementById('input-block').value;
        var percent_result = (Number(second_input_value) * Number(min_input_value)) / 100;
        document.getElementById('input-block').value = Number(percent_result);
        min_sighn = 1;
    }
}
function equal() {
    if (add_sighn == 2) {
        var second_input_value = document.getElementById('input-block').value;
        var add_result = Number(add_input_value) + Number(second_input_value);
        document.getElementById('input-block').value = Number(add_result);
    }
    else if (min_sighn == 2) {
        var second_input_value = document.getElementById('input-block').value;
        var min_result = Number(min_input_value) - Number(second_input_value);
        document.getElementById('input-block').value = Number(min_result);
    }
    else if (mul_sighn == 2) {
        var second_input_value = document.getElementById('input-block').value;
        var mul_result = Number(mul_input_value) * Number(second_input_value);
        document.getElementById('input-block').value = Number(mul_result);
    }
    else if (div_sighn == 2) {
        var second_input_value = document.getElementById('input-block').value;
        var div_result = Number(div_input_value) / Number(second_input_value);
        document.getElementById('input-block').value = Number(div_result);
    }
    add_sighn = 1;
    min_sighn = 1;
    div_sighn = 1;
    mul_sighn = 1;
    mul_index = 1;
}

function negativePositive() {
    var input_value = document.getElementById('input-block').value;
    document.getElementById('input-block').value = input_value * -1;
}
function clearAllNumber() {
    document.getElementById('input-block').value = "";
    document.getElementById('input-block').placeholder = "0";
    num_index = 1;
    dot_index = 1;
    return num_index,dot_index;
}
function clearAllNumbers() {
    document.getElementById('input-block').value = "";
    document.getElementById('input-block').placeholder = "0";
    num_index = 1;
    dot_index = 1;
    return num_index,dot_index;
}
function clearOneNumber() {
    var input_value =document.getElementById('input-block').value;
    if (Number.isInteger(Number(input_value)) == true) {
        var input_value =document.getElementById('input-block').value;
        var input_arr = input_value.split('');
        var clear_input_arr = [];
        for (let i = 0; i < input_arr.length - 1; i++) {
            clear_input_arr[i] = input_arr[i];
        }

        document.getElementById('input-block').value = clear_input_arr.join('');
    }
    else if(Number.isInteger(Number(input_value)) != true){
        var input_value =document.getElementById('input-block').value;
        var input_arr = input_value.split('');
        var clear_input_arr = [];
        for (let i = 0; i < input_arr.length - 1; i++) {
            clear_input_arr[i] = input_arr[i];
        }
var new_inp_val = clear_input_arr.join('');
        document.getElementById('input-block').value = clear_input_arr.join('');
    }
}
var inner_message;
function memory() {
    var memIcon = document.getElementById("memory-icon");
    var hisIcon = document.getElementById("history-icon");
    memIcon.style.borderBottom = "3px solid rgb(0, 120, 215)";
    hisIcon.style.borderBottom = "none";
    if(document.getElementById('memicon-clear').style.color != 'black'){
     document.getElementById('his-message').innerHTML="There's nothing saved in memory";}
     if(document.getElementById('memicon-clear').style.color == 'black'){
        document.getElementById('his-message').innerHTML=inner_message;
     }
    his_index = 0;
    mem_index = 1;
    return his_index,mem_index;
}
function His() {
    var memIcon = document.getElementById("memory-icon");
    var hisIcon = document.getElementById("history-icon");
    hisIcon.style.borderBottom = "3px solid rgb(0, 120, 215)";
    memIcon.style.borderBottom = "none";
    document.getElementById('his-message').innerHTML="There's no history yet";
    his_index = 1;
    mem_index = 0;
    return his_index,mem_index;
}
function mems() {
    var input_value = document.getElementById('input-block').value;
    var mem_text = document.getElementById('his-message');
    var old_saved = inner_message;
   
    if (document.getElementById('memicon-clear').style.color != 'black') {
        inner_message = input_value;
    }
    else if (document.getElementById('memicon-clear').style.color == 'black') {
        var old_value = old_saved;
        var new_value = input_value + ',' + old_value;
        inner_message = new_value;
    }
    var memc_color = document.getElementById('memicon-clear');
    memc_color.style.color = 'black';
    var memr_color = document.getElementById('memicon-replace');
    memr_color.style.color = 'black';
    if(mem_index == 1){
        mem_text.innerHTML = inner_message; 
    }
    return inner_message;
}
function memp() {
    var input_value = document.getElementById('input-block').value;
    var mem_text = document.getElementById('his-message');
    if (document.getElementById('memicon-clear').style.color != 'black') {
        inner_message = input_value;
    }
    else if (document.getElementById('memicon-clear').style.color == 'black') {
        var old_value =   mem_text.innerHTML;
        var first_number = old_value.split(",");
        var new_value = [];
        new_value = first_number;
        new_value[0] = Number(first_number[0]) + Number(input_value);

        inner_message = new_value;
    }

    var memc_color = document.getElementById('memicon-clear');
    memc_color.style.color = 'black';
    var memr_color = document.getElementById('memicon-replace');
    memr_color.style.color = 'black';
    if(mem_index == 1){
        mem_text.innerHTML = inner_message; 
    }
    return inner_message;

}
function memn() {
    if(mem_index == 1){
    var input_value = document.getElementById('input-block').value;
    var mem_text = document.getElementById('his-message');
    if (document.getElementById('memicon-clear').style.color != 'black') {
        var new_negative_value = -1 * Number(input_value);
        inner_message = new_negative_value;
    }
    else if (document.getElementById('memicon-clear').style.color == 'black') {
        var old_value = mem_text.innerHTML;
        var first_number = old_value.split(",");
        var new_value = [];
        new_value = first_number;
        new_value[0] = Number(first_number[0]) - Number(input_value);

        inner_message = new_value;
    }
}
var memc_color = document.getElementById('memicon-clear');
memc_color.style.color = 'black';
var memr_color = document.getElementById('memicon-replace');
memr_color.style.color = 'black';
if(mem_index == 1){
    mem_text.innerHTML = inner_message; 
}
return inner_message;
}
function memc() {
    if (document.getElementById('memicon-clear').style.color == 'black') {
    if(mem_index == 1){
        document.getElementById('his-message').innerHTML = "There's nothing saved in memory";

}

else if(his_index == 1){
    document.getElementById('his-message').innerHTML = "There's nothing history";
}
var memc_color = document.getElementById('memicon-clear');
memc_color.style.color = 'darkgrey';
var memr_color = document.getElementById('memicon-replace');
memr_color.style.color = 'darkgrey';
}
}
function memr() {
    
    if (document.getElementById('memicon-replace').style.color == 'black') {
        var number = inner_message;
        if(document.getElementById('his-message').innerHTML == inner_message){
        var first_number = document.getElementById('his-message').innerHTML.split(",");
        var new_value = first_number[0];
        document.getElementById('input-block').value = new_value;}
        else if(document.getElementById('his-message').innerHTML != inner_message){
            document.getElementById('his-message').innerHTML = inner_message;
            var first_number = document.getElementById('his-message').innerHTML.split(",");
        var new_value = first_number[0];
        document.getElementById('input-block').value = new_value;
        document.getElementById('his-message').innerHTML = "There's no history yet";
        }
    }
}



function onex() {
    var input_value = document.getElementById('input-block').value;
    var one_div_inputVal = 1 / input_value;
    document.getElementById('input-block').value = one_div_inputVal;
}
function xtwo() {
    var input_value = document.getElementById('input-block').value;
    var x_power_two = input_value * input_value;
    document.getElementById('input-block').value = x_power_two;
}
function xthree() {
    var input_value = document.getElementById('input-block').value;
    var x_power_three = input_value * input_value * input_value;
    document.getElementById('input-block').value = x_power_three;
}
function radical() {
    var input_value = document.getElementById('input-block').value;
    if(input_value > 0){
    var radical_val = Math.sqrt(input_value);}
    else if(input_value < 0){
        var radical_val = "000";
    }
    document.getElementById('input-block').value = radical_val;
}


function dot() {
    dot_index = dot_index + default_val;
   return dot_index;
}
function one() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "1";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "1";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "1";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "1";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "1";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "1";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "1";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "1";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "1";
    }
    return num_index;
}
function two() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "2";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "2";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "2";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "2";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "2";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "2";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "2";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "2";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "2";
    }
    return num_index;

}
function three() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "3";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "3";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "3";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "3";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "3";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "3";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "3";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "3";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "3";
    }
    return num_index;

}
function four() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "4";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "4";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "4";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "4";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "4";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "4";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "4";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "4";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "4";
    }
    return num_index;

}
function five() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "5";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "5";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "5";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "5";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "5";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "5";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "5";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "5";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "5";
    }
    return num_index;

}
function six() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "6";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "6";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "6";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "6";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "6";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "6";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "6";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "6";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "6";
    }
    return num_index;

}
function seven() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "7";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "7";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "7";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "7";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "7";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "7";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "7";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "7";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "7";
    }

    return num_index;

}
function eight() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "8";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "8";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "8";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "8";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "8";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "8";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "8";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "8";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "8";
    }

    return num_index;
}
function nine() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "9";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "9";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "9";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "9";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "9";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "9";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "9";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "9";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "9";
    }

    return num_index;


}
function zero() {
    var input_value = document.getElementById('input-block').value;
    if (input_value == 0 & dot_index == 1) {
        document.getElementById('input-block').value = "0";
    }
    else if (input_value != 0 & dot_index == 1) {
        document.getElementById('input-block').value = input_value + "0";
    }
    else if (input_value == 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = '0' + "." + "0";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index == 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "0";
        num_index = 2;
    }
    else if (num_index == 2) {
        document.getElementById('input-block').value = input_value + "0";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "0";
        num_index = 2;
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 1) {
        document.getElementById('input-block').value = input_value + "." + "0";
        num_index = 2;
    }
    else if (input_value != 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "0";
    }
    else if (input_value == 0 & dot_index > 2 & num_index == 2) {
        document.getElementById('input-block').value = input_value + "0";
    }
    return num_index;
}

