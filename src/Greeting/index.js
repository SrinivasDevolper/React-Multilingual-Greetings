import {Component} from 'react'

import LanguageButton from './LanguageButton'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeButton: languageGreetingsList[0].buttonText,
    imageUrl: languageGreetingsList[0].imageUrl,
    imageText: languageGreetingsList[0].imageAltText,
  }

  changeLanguage = (name, imageAltText, imageUrl) =>
    this.setState({activeButton: name, imageUrl, imageText: imageAltText})

  render() {
    const {activeButton, imageUrl, imageText} = this.state

    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachButton => (
            <LanguageButton
              key={eachButton.id}
              id={eachButton.id}
              name={eachButton.buttonText}
              imageUrl={eachButton.imageUrl}
              imageAltText={eachButton.imageAltText}
              changeLanguage={this.changeLanguage}
              isActive={activeButton === eachButton.buttonText}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageText} />
      </div>
    )
  }
}

export default Greetings
