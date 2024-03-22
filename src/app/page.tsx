import Input from "@/components/input";


export default function Home() {
  return (
    <main className="container">
      <h1 className="text-red">Olá Bet dos estudos</h1>
      <form>
        <Input label="Nome" id="nome" type="text" />
        <Input label="Email" id="email" type="email" />
      </form>
    </main>
  );
}
