	var doc = document.getElementById("show");
	var sign = "";
	var firstNumber = "0";
	var secondNumber = null;

	function setNull(){
		doc.innerHTML = "0"
		firstNumber = "0";
		clearMemory();
	}

	function clearMemory(){
		secondNumber = null; 
		sign = "";
	}

	function show(value){
		if(value == "."){
			doc.innerHTML += value
		}
		else{
			doc.innerHTML == "0" ? doc.innerHTML = value : doc.innerHTML += value;
		}
	}

	function saveNumber(number){
		if(firstNumber == "0"){
			sign == "" ? setFirstNumber(number) : updateSecondNumber(number)
		}
		else if(sign == ""){
			addNumberToFirstNumber(number);
		}
		else{
			updateSecondNumber(number);
		}
	}

	function setFirstNumber(number){
		firstNumber = number;
		show(number);
	}

	function addNumberToFirstNumber(number){
		if(String(firstNumber).length < 15){	
			firstNumber += number
			show(number);
		}
	}

	function setSecondNumber(number){
		secondNumber = number;
		show(number);
	}

	function addNumberToSecondNumber(number){
		if(String(secondNumber).length < 15){	
			secondNumber += number
			show(number);
		}
	}

	function updateSecondNumber(number){
		secondNumber == null ? setSecondNumber(number) : addNumberToSecondNumber(number);
	}

	// Buttons
	function nullButton(){
		saveNumber("0");
	}

	function oneButton(){
		saveNumber("1");
	}

	function twoButton(){
		saveNumber("2");
	}

	function threeButton(){
		saveNumber("3");
	}

	function fourButton(){
		saveNumber("4");
	}

	function fiveButton(){
		saveNumber("5");
	}

	function sixButton(){
		saveNumber("6");
	}
	
	function sevenButton(){
		saveNumber("7");
	}

	function eigthButton(){
		saveNumber("8");
	}

	function nineButton(){
		saveNumber("9");
	}

	//Sign's
	function plusButton(){
		checkSign("+");
	}

	function minusButton(){
		checkSign("-");
	}

	function multiplyButton(){
		checkSign("*");
	}

	function devideButton(){
		checkSign("/");
	}

	// Other buttons
	function delButton(){
		setNull();
	}

	function equalButton(){
		if(sign != "" && secondNumber != null){
			switch(sign){
				case "+": plus(); break;
				case "-": minus(); break;
				case "*": multiply(); break;
				case "/": devide(); break;
			}
		}
	}

	function dotButton(){
		dot = ".";
		if(sign == "" || doc.innerHTML == firstNumber){
			if(!isFloat(firstNumber)){
				addNumberToFirstNumber(dot);
			}
		}
		else{
			if(!isFloat(secondNumber)){
				addNumberToSecondNumber(dot);
			}
		}
	}

	function percentButton(){
		if(sign == ""){
			firstNumber *= 0.01;
			doc.innerHTML = firstNumber; 
		}
		else if(secondNumber != null){
			if(doc.innerHTML == firstNumber){
				firstNumber *= 0.01;
				doc.innerHTML = firstNumber;
				clearMemory();
			}
			else{
				secondNumber = firstNumber * secondNumber * 0.01;
				doc.innerHTML = firstNumber + sign + secondNumber; 
			}	
		}
	}

	function plusMinusButton(){
		if(sign == ""){
			firstNumber *= -1;
			doc.innerHTML = firstNumber; 
		}
		else if(secondNumber != null){
			if(doc.innerHTML == firstNumber){
				firstNumber *= -1;
				doc.innerHTML = firstNumber;
				clearMemory();
			}
			else{
				secondNumber *= -1;
				if(secondNumber < 0){
					doc.innerHTML = firstNumber + sign + "(" + secondNumber + ")"; 	
				}
				else{
					doc.innerHTML = firstNumber + sign + secondNumber; 	
				}
			}
		}
	}

	// Mathematic functions
	function plus(){
		showResult(Number(firstNumber) + Number(secondNumber))
	}

	function minus(){
		showResult(Number(firstNumber) - Number(secondNumber))
	}

	function multiply(){
		fPow = Math.pow(10, f(firstNumber));
		sPow = Math.pow(10, f(secondNumber));
		isFloat(firstNumber) ? fPow / 10 : sPow / 10;
		firstNumber *= fPow;
		secondNumber *= sPow;
		showResult(((Number(firstNumber.toFixed(15)) * Number(secondNumber.toFixed(15))) / fPow) / sPow);
	}

	function devide(){
		if(secondNumber == 0){
			alert("На ноль делить нельзя");
			setNull();
			return ;
		}
		showResult(Number(firstNumber) / Number(secondNumber));
	}

	function f(n) {
	    n = (typeof n == 'string') ? n : n.toString();
	    if (n.indexOf('e') !== -1) return parseInt(n.split('e')[1]) * -1;
	    var separator = (1.1).toString().split('1')[1];
	    var parts = n.split(separator);
	    return parts.length > 1 ? parts[parts.length - 1].length : 0;
	}

	//Additional functions 
	function showResult(result){
		doc.innerHTML = result;
		firstNumber = result;
	}

	function checkSign(signValue){
		if (sign == "") {
			addSign(signValue);
		}
		else{
			clearMemory();
			addSign(signValue);
		}
	}

	function addSign(signValue){
		sign = signValue;
		doc.innerHTML = firstNumber + signValue;
	}

	//Other
	function isFloat(n){
    	return Number(n) === n && n % 1 !== 0;
	}