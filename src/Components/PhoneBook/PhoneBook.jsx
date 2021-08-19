
import React, {Component} from 'react'

class PhoneBook extends Component{
    state = {
        inputValue: '',
        name: 'name',
    };
    handleInputChange = event => {
        console.log(event.target.value);
        this.setState({inputValue:event.target.value})
    }


    render(){
        return (
            <input
                type="text"
                name="name"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
    />)
        }
}
export default PhoneBook