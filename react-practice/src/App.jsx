import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import Register from './components/Register';

function App() {
  return (
    <>
      <Header />
      <Main />
      
      <Button text={"홈"} color={"purple"}/>
      <Button text={"마이페이지"} color={"red"}/>
      <Button text={"도움말"}>
        <div>도움이 필요하시면 클릭하세요.</div>
      </Button>

      <Footer />

      <Register />
    </>
  );
}

export default App;
