import { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <ChildAsFc color="red" onClick={() => console.log("prova")}>
      sdfsdfsfsfsfsdfsdf
    </ChildAsFc>
  );
};

export default Parent;
