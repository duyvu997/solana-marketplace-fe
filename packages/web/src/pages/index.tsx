/* eslint-disable react/react-in-jsx-scope */
import dynamic from 'next/dynamic';

const CreateReactAppEntryPoint = dynamic(() => import('../App'), {
  ssr: false,
});

function App() {
  return <CreateReactAppEntryPoint />;
}

export default App;
