import './index.css';
import { useState } from 'react';
import { FiTwitter } from 'react-icons/fi';
import { TfiTumblr } from 'react-icons/tfi';
import { FaQuoteLeft } from 'react-icons/fa';

function App() {
  const allColors = ['black', 'red', 'orange', 'green', 'blue', 'purple', 'grey', 'brown']
  const allTexts = [
    ['The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.', 'Jesse Owens'],
    ['Teach thy tongue to say, “I do not know,” and thous shalt progress.', 'Maimonides'],
    ['It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.', 'Mae Jemison'],
    ['Challenges are what make life interesting and overcoming them is what makes life meaningful.', 'Joshua J. Marine'],
    ['I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.', 'Leonardo da Vinci'],
    ['The most difficult thing is the decision to act, the rest is merely tenacity.', ' Amelia Earhart'],
    ['Either write something worth reading or do something worth writing.', 'Benjamin Franklin']
  ]

  console.log(allTexts[0].author)
  
  const [color, setColor] = useState(allColors[Math.floor(Math.random()*allColors.length)]);

  const changeColor = () => {
      setColor(allColors[Math.floor(Math.random()*allColors.length)]);
  }

  const i = Math.floor(Math.random()*allTexts.length)

  return (
     <div className="app" style={{
      backgroundColor: color
     }}>
      <header className="app-header">
        <div className="main-block">

          <FaQuoteLeft style={{
            fontSize: '25px',
            color: color
          }}/>
          
          <span className="text" style={{
            color: color
          }}>{(allTexts[i][0])}</span>

          <p className="author-text" style={{
            color: color
          }}>- {(allTexts[i][1])}</p>

          <div className="buttons">
              <a className="button-icon" href="twitter.com/intent/tweet" style={{
                backgroundColor: color
              }}><FiTwitter style={{
                fontSize: '20px'
              }}/></a>

              <a className="button-icon" href="https://www.tumblr.com/login?language=pt_BR" style={{
                backgroundColor: color
              }}><TfiTumblr style={{
                fontSize: '20px',
                color: 'white'
              }}/></a>

              <button onClick={changeColor} className="button-quote" style={{
                backgroundColor: color
              }}>New quote</button>
          </div>
        </div>
        <section id="link">
          <p id="tweet-quote">by <a id="link-tweet-quote" href="google.com">hezag</a></p>
        </section>
      </header>
    </div> 
  );
}

export default App;
