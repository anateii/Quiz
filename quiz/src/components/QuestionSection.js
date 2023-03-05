import React from "react";

const QuestionSection = ({ data, currentQuestion, handleClick }) => {
  return (
    <>
      <div>
        Domanda {currentQuestion + 1}/{data.length}
      </div>
      <div className="question">{data[currentQuestion].question}</div>
      <ul>
        {data[currentQuestion].answers.map((answer, index) => (
          <button key={answer.index} onClick={() => handleClick(index)}>
            {answer}
          </button>
        ))}
      </ul>
    </>
  );
};

export default QuestionSection;

//1)Step: Passiamo i dati del db.json come PROPS da App a QuestionSection
//2)Step: I dati ricevuti possono essere passati come props.data oppure attraverso la DESTRUTTURAZIONE che non è altro che
//        uno spacchettamento dei valori di un array/oggetto in variabili distinte
//3)Step 3: Aggiungiamo manualmente i dati dal json per verificare se i dati sono corretti.
//4)Step 4: Se gli oggetti sono delle collezioni di valori non-ordinati associati alle rispettive chiavi, gli array
//        invece sono una collezione ordinata di elementi che possono essere, stringhe, numeri, oggetti.
// 5) data[0].question . Zero è l'indice dell'oggetto. Gli array in JS partono sempre da zero. Mentre .question è la dot notation
//    utilizzata per accedere alle proprietà degli oggetti

//6) Abbiamo bisogno di:
//   1. Di cambiare domanda e risposte ogni volta che clicchiamo sulla risposta
//   2. Di salvare la risposta giusta e aggiungerla al punteggio finale
//   3. Di renderizzare in modo dinamico i dati

//7) Sicuramente I due components , Questions e Results dovranno avere accesso entrambi ai nostri dati, scelgo App come parent component
//8) In App userò useState per ritrovare le domande e passarle come props al componente che racchiude le domande e risposte
//9) Siccome answers è un array e voglio mostrare tutti gli elementi in una lista decido di usare MAP(). Map è una funzione di iterazione
//   che modifica gli elementi di un array usando una funzione callback che può ricevere due argomenti: uno è l'elemento singolo dell'array,
//   l'altro l'index di questo elemento. Il risultato è una nuova array contenente il risultato che quella funzione ha avuto su ogni singolo elemento.

//10) Abbiamo bisogno di cambiare domanda ogni volta che clicchiamo sulla risposta. In questo caso aggiungiamo un event handler al nostro onClick.
//    Gli event handler in React sono funzioni che vengono eseguite in risposta a un evento che si verifica nell'interfaccia utente,
//    come un clic del mouse, un'attivazione della tastiera o una modifica di un campo di input.
//    onClick(handleClick) non vuole le parentesi perchè non vogliamo chiamare la funzione. Senza parentesi vuol dire che React chiamerà la funzione
//    solo quando si clicca sul bottone. Mettere le parentesi vuol dire che React eseguirà questa funzione ancora prima del click, quando il componente
//    sarà renderizzato. Questo perchè JavaScript viene eseguito immediatamente all'interno delle parentesi graffe. Allo stesso modo se vogliamo
//    scrivere la funzione inline, sarà scritta cosi onClick(() => alert("Hello")) e NON onClick={alert("Hello")}

//11)PROBLEMA: si arriva alla fine del quiz e viene mostrata una pagina bianca. Ma noi vogliamo mostrare il componente "Results".
//             1. Questo perchè nel nostro database abbiamo un massimo di 3 oggetti. Quando arriva al 4 non c'è e React lo legge come undefined
//             2. Quello che dobbiamo fare è aggiungere un check al nostro handleClick. Se la lunghezza della nostra nextQuestion è
//                 minore di tutta la lunghezza del nostro db, allora vai avanti con la prossima domanda. Altrimenti fammi setShow to true.
//             3. Se show è true allora fammi vedere Results section. Se non si è ancora arrivati alla lunghezza finale del nostro db, show è false.

//12)Abbiamo bisogno di due cose:
//         - Verificare se l'user clicca sulla risposta giusta, in tal caso bisogna salvare, memorizzare la risposta come punto in setScore
//          (Qui bisogna verificare fare un paragone tra l'indice di correct e l'indice della risposta giusta che si trova nell'array answers)
//         - Mandare il punteggio finale al componente Results

//13) In Results abbiamo un'ultimo problema. In base al nostro punteggio vogliamo far vedere diverse frasi.
//         - Creiamo un nuovo array chiamato scoreMessages
//         - Lo passiamo a un  h1 tra parentesi graffe e usiamo score come indice per far vedere il messaggio finale
