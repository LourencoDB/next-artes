function Course({ name, path }) {
  return (
    <div>
      <h1 className='bg-clip-border'>{name}</h1>
      <a href={/courses${path}}></a>
    </div>
  );
}

export function Home() {
  const courses = [
    { name: 'React', path: '/react' },
    { name: 'Vue', path: '/vue' },
    { name: 'Svelte', path: '/svelte' },
    { name: 'Angular', path: '/angular' },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course name={course.name} />
      ))}
    </div>
  );
}