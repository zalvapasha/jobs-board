export default async function Home() {
  const resp = await fetch(`${process.env.API_URL}/jobs`);
  const datas: Job[] = await resp.json();

  console.log(datas);

  return (
    <div>
      <h1>JOBS BOARD</h1>
      {datas.map((job) => (
        <li>{job.title}</li>
      ))}
    </div>
  );
}
