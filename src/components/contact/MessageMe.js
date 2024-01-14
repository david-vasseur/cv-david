import React, { Component } from 'react';

class MessageMe extends Component {
    state = {
        showForm : false
    }

    handleForm =() => {
        this.setState ({
            showForm:!this.state.showForm
        })
    }

    handleCloseForm = () => {
        this.setState({
          showForm: false
          
        }, () => {
            console.log(this.state.showForm);
            this.props.onClose();
        });
      };

    render() {
        return (
            <div className='MessageMe'>
            <div className='MessageMeContent'>
                <div className='MessageMeTitle'>
                    <h3>POSEZ-MOI VOS QUESTIONS !</h3>
                </div>
                
                <div className='MessageMeForm'>
                    <form action='http://localhost:8000/sendEmail.php' method='post'>
                        <ul>
                            <li>
                                <label for="name">Nom :</label>
                                <input type="text" placeholder='Votre nom' id='name' name='userName' />
                            </li>
                            <li>
                                <label for="mail">E-mail :</label>
                                <input type="email" placeholder='Votre email' id="mail" name="userEmail" />
                            </li>
                            <li>
                                <label for="msg">Message :</label>
                                <textarea id="msg" placeholder='Votre message...' name="userMessage"></textarea>
                            </li>
                        </ul>
                        <div className='button'>
                            <button type='submit'>ENVOYEZ VOTRE MESSAGE</button>
                            <button onClick={this.handleCloseForm}>Fermer</button>
                        </div>
                        </form>    
                </div>    
            </div>            
        </div>
        );
    }
}

export default MessageMe;
