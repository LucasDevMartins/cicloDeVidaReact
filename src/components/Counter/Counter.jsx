import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        this.state = {contador: 0}

        console.log('Construindo a classe Counter...')
    }

     //Depreciado
    UNSAFE_componentWillMount() {
        console.log('O nosso componente contador será montado...')
    }
    // É acionado apenas depois do render()
    componentDidMount() {
        console.log('O componente foi montado! ')

        document.addEventListener('scroll', this.consoleScroll)
    }
    //método chamado sempre que uma prop ou estado for atualizado.
    shouldComponentUpdate() {
        return true;
    }

    //depreciado
    UNSAFE_componentWillUpdate() {
        console.log('O componente será atualizado')
    }

    componentDidUpdate() {
        console.log('Aviso! O componente já foi atualizado!!!')
    }
    

    componentWillUnmount() {
        console.log('O componente será desmontado...')

        document.removeEventListener('scroll', this.consoleScroll)
    }

    consoleScroll() {
        console.log('Rolando a página...')
    }

    render() {
        console.log('Renderizando o componente Counter...')
        return(
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={() => this.setState({contador: this.state.contador -1})}>
                    Diminuir
                </button>

                <button onClick={() => this.setState ({contador: this.state.contador +1})}>
                    Aumentar
                </button>
            </div>

        )
    }
}