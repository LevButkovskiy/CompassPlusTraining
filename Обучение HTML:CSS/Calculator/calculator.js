		var doc = document.getElementById("show");
		var sign = "";

		var firstNumber = 0;
		var secondNumber = null;

		function show(number){
			doc.innerHTML == 0 ? doc.innerHTML = number : doc.innerHTML += number;
		}

		function saveNumber(number){
			if(firstNumber == 0){
				if(number == 0 || sign != ""){
					if(secondNumber == null){
						secondNumber = number;
					}
					else{
						secondNumber += number;
					}
					firstNumber = 0;
				}
				else{
					firstNumber = number
				}
			}
			else if(sign == ""){
				firstNumber += number
			}
			else{
				if(secondNumber == null){
					secondNumber = number;
				}
				else{
					secondNumber += number
				}
			}
		}

		// Buttons
		function nullButton(){
			saveNumber("0");
			show(0);
		}

		function oneButton(){
			saveNumber("1");
			show(1);
		}

		function twoButton(){
			saveNumber("2");
			show(2);
		}

		function threeButton(){
			saveNumber("3");
			show(3);
		}

		function fourButton(){
			saveNumber("4");
			show(4);
		}

		function fiveButton(){
			saveNumber("5");
			show(5);
		}

		function sixButton(){
			saveNumber("6");
			show(6);
		}
		
		function sevenButton(){
			saveNumber("7");
			show(7);
		}

		function eigthButton(){
			saveNumber("8");
			show(8);
		}

		function nineButton(){
			saveNumber("9");
			show(9);
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

		function checkSign(signValue){
			if (sign == "") {
				addSign(signValue)
			}
			else{
				sign = ""
				secondNumber = null;
				addSign(signValue);
			}
		}

		function addSign(signValue){
			sign = signValue;
			doc.innerHTML = firstNumber + signValue;
		}

		function delButton(){
			setNil();
		}

		function equalButton(){
			if(sign != ""){
				if(secondNumber != null)
				switch(sign){
					case "+": plus(); break;
					case "-": minus(); break;
					case "*": multiply(); break;
					case "/": devide(); break;

				}
			}
		}

		// Mathematic functions
		function plus(){
			sum = Number(firstNumber) + Number(secondNumber);
			doc.innerHTML = sum;
			firstNumber = sum;
		}

		function minus(){
			sum = Number(firstNumber) - Number(secondNumber)
			doc.innerHTML = sum;
			firstNumber = sum;
		}

		function multiply(){
			sum = Number(firstNumber) * Number(secondNumber)
			doc.innerHTML = sum;
			firstNumber = sum;
		}

		function devide(){
			if(secondNumber == 0){
				alert("На ноль делить нельзя");
				setNil();
				return ;
			}
			sum = Number(firstNumber) / Number(secondNumber)
			doc.innerHTML = sum;
			firstNumber = sum;
		}

		function setNil(){
			doc.innerHTML = 0
			firstNumber = 0;
			secondNumber = null; 
			sign = "";
		}
