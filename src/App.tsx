import '@/App.css';
import viteLogo from '@/assets/logo.svg';

function App() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-svh text-center">
        <h1>A boilerplate code for ReactJs, TypeScript, NodeJs, Vite, TailwindCss and ESLint</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo size-50" alt="Vite logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
