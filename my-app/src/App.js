import Accordion from './Accordion';
import './App.css';
import Questions from './Questions'
function App() {
  return (
   <main>
    <div className='container'>
      <h1>Accordion</h1>
      <section>
        {Questions.map((question) => {
          return (
            <Accordion key={question.id} {...question} />
          )
        })}
      </section>
    </div>
   </main>
  );
}

export default App;
