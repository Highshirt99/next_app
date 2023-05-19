export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const getDetails = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const ninja = await data.json();
  
    return ninja;
  };
  

const Details = async ({
    params: { id },
  }) => {
const ninja = await getDetails(id);
  return (
    <div>
      <h1>{ninja?.name}</h1>
      <p>{ninja?.email}</p>
      <p>{ninja?.website}</p>
      <p>{ninja?.address?.city}</p>
    </div>
  );
};

export default Details;
