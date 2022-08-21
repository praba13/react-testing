type GreetProps = {
  name?: string;
};

export const Greet = (props: GreetProps) => {
  return <div>Hallo {props.name}</div>;
};

export default Greet;
