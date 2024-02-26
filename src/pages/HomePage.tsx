import { useThemeCtx } from '../store/ThemeProvider';

export default function HomePage() {
  // pasiimti spalva is konteksto

  const themeCtx = useThemeCtx();
  console.log('themeCtx ===', themeCtx);
  return (
    <div className='container'>
      <button>Toggle Dark Mode</button>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed qui tenetur maxime
        repellendus, aliquid, voluptatum maiores rerum ipsa optio iusto alias quo culpa animi,
        perspiciatis sapiente harum vitae nostrum.
      </p>
      <button>click me</button>
    </div>
  );
}
