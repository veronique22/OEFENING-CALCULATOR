const crel = require('crel')

function renderCalculator() {
   return crel('main',
       renderScreen(),
       renderButtons())
}

function renderScreen() {
   return crel('input', { id: "screen"})
}

function renderButtons() {
   const buttons = "0123456789+-*/".split('').map(renderInputButton)
   return crel('div',
       buttons,
       renderEvaluateButton())
}

function renderInputButton(data) {
   const button = crel('button', data)

   button.addEventListener('click', function() {
       const screen = document.getElementById('screen')
       screen.value = screen.value + data
   })

   return button
}

function renderEvaluateButton() {
   const button = crel('button', 'Evaluate')

   button.addEventListener('click', function() {
       const screen = document.getElementById('screen')
       screen.value = eval(screen.value)
   })

   return button
}

/*document.getElementById('root')
   .appendChild(renderCalculator())*/

let a="",b="";

let sign="";

function operate()
{
	switch(sign)
	{
		case '+':
			a=String(Number(a)+Number(b))
			document.getElementById('display').innerHTML=a;
			b="";sign="";
			break;
		case '-':
			a=String(Number(a)-Number(b))
			document.getElementById('display').innerHTML=a;
			b="";sign="";
			break;
		case '*':
			a=String(Number(a)*Number(b))
			document.getElementById('display').innerHTML=a;
			b="";sign="";
			break;
		case '/':
			if(b==='0')
			{
				document.getElementById('display').innerHTML="Cannot divide by zero!";
				a="";b="";
				break;
			}
			else
			{
				a=String(Number(a)/Number(b))
				document.getElementById('display').innerHTML=a;
				b="";sign="";
				break;
      }
      default:
      {}
	}
}
/*document.getElementById('root')
   .appendChild(operate)*/