import './App.css';

function App() {
  const printLooping = () => {
    alert("please check console.log")
    for (var x=1; x <= 100; x++){
      if( x % 3 && x % 5 ) {
          console.log(x);
      } else {
          if( x % 3 == 0 ) {
              console.log("fish");
          }
          if( x % 5 == 0 ) {
              console.log("bash");
          }
      }
    }
  }

  const printSort = () => {
    alert("please check console.log")
    var numbers = [5, 10, 15, 11, 14, 20, 16];
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < numbers.length; i += 1) {
        if (numbers[i - 1] > numbers[i]) {
          done = false;
          var tmp = numbers[i - 1];
          numbers[i - 1] = numbers[i];
          numbers[i] = tmp;
        }
      }
    }

    console.log("numbers sort", numbers)
  }

  const checkReversed = () => {
    alert("please check console.log")
    var word = "cel";
    var reverseWord = "lec";
    var reverseWordFalse = "leci";
    console.log("true condition", word.split("").reverse().join("") === reverseWord);
    console.log("false condition", word.split("").reverse().join("") === reverseWordFalse);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button aria-label="A1" onClick={() => printLooping()}>
          Jawaban nomor 1
        </button>
        <button aria-label="A2" style={{marginTop: 10}} onClick={() => printSort()}>
          Jawaban nomor 2
        </button>
        <button aria-label="A3" style={{marginTop: 10}} onClick={() => checkReversed()}>
          Jawaban nomor 3
        </button>
      </header>
    </div>
  );
}

export default App;
