import React from 'react'
import './Calculator.css'
import Button from './button'

export default class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            leftSide: '0',
            rightSide: '0',
            operator: '',
            display: ''
        }
    }

    clearDisplay() {
        console.log('clear')

        this.setState({
            leftSide: '0',
            rightSide: '0',
            operator: '',
            display: ''
        })
    }

    addOperation(operator) {
        console.log('operation')

        const newLeftSide = this.state.display

        this.setState({
            leftSide: newLeftSide,
            operator: operator
        })
    }

    addDigit(n) {
        console.log('digit', n)

        let previousDisplay = this.state.display

        if (this.state.operator && previousDisplay === this.state.leftSide) {
            previousDisplay = ''
        }

        let newDisplay = previousDisplay + n.toString()

        if (previousDisplay === '0') {
            if (n === '.') return
            newDisplay = n.toString()
        }

        if (previousDisplay.includes('.') && n === '.') return

        this.setState({
            display: newDisplay
        })
    }

    finishOperation() {
        console.log('finishOperation')
        const { operator, display, leftSide } = this.state

        const leftNumber = Number(leftSide)
        const rightNumber = Number(display)
        let total = 0

        switch (operator) {
            case '+':
                total = leftNumber + rightNumber
                break
            case '-':
                total = leftNumber - rightNumber
                break
            case '/':
                total = leftNumber / rightNumber
                break
            case '*':
                total = leftNumber * rightNumber
                break
            case '%':
                total = leftNumber * (rightNumber / 100)
                break
        }

        this.setState({
            display: total
        })
    }

    render() {
        console.log('vai renderizar')

        return <div className="calc">
            <span className="display">
                {this.state.display}
            </span>
            <div className="buttons">
                <div className="row">
                    <Button label="AC" handleClick={() => this.clearDisplay()} operator={true} />
                    <Button label="+/-" handleClick={() => this.addOperation()} operator={true} />
                    <Button label="%" handleClick={() => this.addOperation('%')} operator={true}/>
                    <Button label= "/" handleClick={() => this.addOperation('/')} operator={true} />
                </div>
                <div className="row">
                    <Button label="7" handleClick={() => this.addDigit(7)} />
                    <Button label="8" handleClick={() => this.addDigit(8)} />
                    <Button label="9" handleClick={() => this.addDigit(9)} />
                    <Button label="*" handleClick={this.addOperation} operator={true} />
                </div>
                <div className="row">
                    <Button label="4" handleClick={() => this.addDigit(4)} />
                    <Button label="5" handleClick={() => this.addDigit(5)} />
                    <Button label="6" handleClick={() => this.addDigit(6)} />
                    <Button label="-" handleClick={() => this.addOperation('-')} operator={true} />
                </div>
                <div className="row">
                    <Button label="1" handleClick={() => this.addDigit(1)} />
                    <Button label="2" handleClick={() => this.addDigit(2)} />
                    <Button label="3" handleClick={() => this.addDigit(3)} />
                    <Button label="+" handleClick={() => this.addOperation('+')} operator={true} />
                </div>
                <div className="row">
                    <Button label="0" handleClick={() => this.addDigit(0)} double={true} />
                    <Button label="." handleClick={() => this.addDigit('.')} />
                    <Button label="=" handleClick={() => this.finishOperation()} operator={true} />
                </div>

            </div>
        </div>
    }
}