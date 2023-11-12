
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [currentOperacao,setcurrentOperacao]= useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
    setcurrentOperacao('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    setcurrentOperacao(currentOperacao + ' ' + num)
  }

  const handleSumNumbers = () => {
    setcurrentOperacao(currentOperacao + ' +')
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const operacao = (oper) => {

       switch(oper){
          case '+':
            if(firstNumber === '0'){
              setFirstNumber(String(currentNumber));
              setCurrentNumber('0')
              setOperation('+')
              }else {
                const sum = Number(firstNumber) + Number(currentNumber);
                setCurrentNumber(String(sum))
                setOperation('')
              }
          setcurrentOperacao(currentOperacao + ' ' + oper)
            break;
          case '-':
            if(firstNumber === '0'){
              setFirstNumber(String(currentNumber));
              setCurrentNumber('0')
              setOperation('-')
              }else {
                const sum = Number(firstNumber) - Number(currentNumber);
                setCurrentNumber(String(sum))
                setOperation('')
              }
          setcurrentOperacao(currentOperacao + ' ' + oper)
            break;
            case '/':
            if(firstNumber === '0'){
              setFirstNumber(String(currentNumber));
              setCurrentNumber('0')
              setOperation('/')
              }else {
                const sum = Number(firstNumber) / Number(currentNumber);
                setCurrentNumber(String(sum))
                setOperation('')
              }
          setcurrentOperacao(currentOperacao + ' ' + oper)
            break;
            case 'x':
              if(firstNumber === '0'){
                setFirstNumber(String(currentNumber));
                setCurrentNumber('0')
                setOperation('x')
                }else {
                  const sum = Number(firstNumber) * Number(currentNumber);
                  setCurrentNumber(String(sum))
                  setOperation('')
                }
            setcurrentOperacao(currentOperacao + ' ' + oper)
            break;
          default: 
            break;
        }
    

  }

  const igual = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      
        switch(operation){
          case '+':
            var sum=0
          if(firstNumber === '0'){
              setFirstNumber(String(currentNumber));
              setCurrentNumber('0')
              setOperation('+')
          }else {
            sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
          }
          setcurrentOperacao(currentOperacao + ' = ' + String(sum))
            break;
          case '-':
            var sum=0
            if(firstNumber === '0'){
                setFirstNumber(String(currentNumber));
                setCurrentNumber('0')
                setOperation('-')
            }else {
              sum = Number(firstNumber) - Number(currentNumber);
              setCurrentNumber(String(sum))
              setOperation('')
            }
            setcurrentOperacao(currentOperacao + ' = ' + String(sum))
             
            break;
            case '/':
              var sum=0
              if(firstNumber === '0'){
                  setFirstNumber(String(currentNumber));
                  setCurrentNumber('0')
                  setOperation('/')
              }else {
                sum = Number(firstNumber) / Number(currentNumber);
                setCurrentNumber(String(sum))
                setOperation('')
              }
              setcurrentOperacao(currentOperacao + ' = ' + String(sum))
               
              break;
              case 'x':
                var sum=0
                if(firstNumber === '0'){
                    setFirstNumber(String(currentNumber));
                    setCurrentNumber('0')
                    setOperation('x')
                }else {
                  sum = Number(firstNumber) * Number(currentNumber);
                  setCurrentNumber(String(sum))
                  setOperation('')
                }
                setcurrentOperacao(currentOperacao + ' = ' + String(sum))
                 
                break;

          default: 
            break;
        }
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentOperacao}/>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"  onClick={() => operacao('x')}/>
          <Button label="/"  onClick={() => operacao('/')}/>
          <Button label="Limpar" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => operacao('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => operacao('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
        <Row>
          <Button label="=" onClick={igual}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
