import { useContext } from 'react';
import ListContext from '../components/ListContext';

const Home = () => {

  const { lists } = useContext(ListContext);
  console.log('context list:', lists)

  return (
    <div>
      <h1>All Lists</h1>
      {lists.map((list, index) => (
        <div key={index}> 
          <h3>{list.title}</h3>
          <ul>
            {list.list.map((list) => (
              <li key={list.id}>{list.content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
