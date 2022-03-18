import './index.css';
import store from './lib/store';

import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';

function App() {
  let data = [
    { id: '1', title: 'hi 1', state: 'TASK_INBOX' },
    { id: '2', title: 'hello 2 (pinned)', state: 'TASK_PINNED' },
    { id: '3', title: 'hey there 3', state: 'TASK_INBOX' },
    { id: '4', title: 'hi 4', state: 'TASK_INBOX' },
    { id: '5', title: 'hello 5 (pinned)', state: 'TASK_PINNED' },
    { id: '6', title: 'hey there 6', state: 'TASK_INBOX' }
  ];
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
