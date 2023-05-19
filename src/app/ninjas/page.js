import Link from 'next/link';
import styles from '../styles/Ninjas.module.css';


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

// export const getStataicProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   return {
//     props: {
//       ninjas: data,
//     },
//   };
// };

const index = async () => {
  const ninjas = await getData();
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas?.map((ninja) => (
        <div key={ninja.id}>
          <Link href={`/ninjas/${ninja.id}` }className={styles.single}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;
