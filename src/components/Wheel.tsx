import { FormEvent, useState } from "react";
import { TextInput, NumberInput } from "@mantine/core";

type Chore = {
  name: string;
  pond: number;
};

type Chores = Chore[];

export const Wheel = () => {
  const [chores, setChores] = useState<Chores>([]);
  const [winner, setWinner] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // better than spread operator if multiple states to set. So using this syntax avoids to have to wait for the state to actualize.
    setChores((chores) => [
      ...chores,
      {
        //@ts-expect-error sssh
        name: e.target.elements["chore"].value,
        //@ts-expect-error sssh
        pond: Number(e.target.elements["pond"].value),
      },
    ]);
    //     // e.target.reset();
  };

  const segments = chores
    .map(({ name, pond }) => Array(pond).fill(name))
    .flat();

  //    const winner = segments[(Math.floor(Math.random() * segments.length))]

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          label="Chore options"
          name="chore"
          placeholder="Type one of the options"
        />
        <NumberInput
          label="Ponderation"
          name="pond"
          placeholder="Enter a number 1-5"
          min={1}
          max={5}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {chores.map((ch) => (
            <ul key={ch.name}>{ch.name}</ul>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={
            // setWinner(segments[Math.floor(Math.random() * segments.length)]);
            console.log("coucou")
          }
        >
          Select Winner
        </button>
        <div style={{ color: "red" }}>{winner}</div>
      </div>
    </div>
  );
};
