const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Parts = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Parts key={part.id} {...part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Total{" "}
      {parts.reduce((acc, curr) => {
        return acc + curr.exercises;
      }, 0)}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </div>
  );
};

export default Course;
