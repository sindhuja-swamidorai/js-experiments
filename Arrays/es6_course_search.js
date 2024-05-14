let courses = [
        {
            CourseId: "PROG100",
            Title: "Introduction to HTML/CSS/Git",
            Location: "Classroom 7",
            StartDate: "09/08/24",
            Fee: "100.00",
        },
        {
            CourseId: "PROG200",
            Title: "Introduction to JavaScript",
            Location: "Classroom 9",
            StartDate: "11/22/24",
            Fee: "350.00",
        },
        {
            CourseId: "PROG300",
            Title: "Introduction to Java",
            Location: "Classroom 1",
            StartDate: "01/09/24",
            Fee: "50.00",
        },
        {
            CourseId: "PROG400",
            Title: "Introduction to SQL and Databases",
            Location: "Classroom 7",
            StartDate: "03/16/24",
            Fee: "50.00",
        },
        {
            CourseId: "PROJ500",
            Title: "Introduction to Angular",
            Location: "Classroom 1",
            StartDate: "04/25/24",
            Fee: "50.00",
        }
    ];


    let found = courses.find(w => w.CourseId === 'PROG200');
    console.log(`When does the PROG200 course start? Answer: ${found.StartDate}`);

    found = courses.find(w => w.CourseId === 'PROJ500');
    console.log(`What is the title of the PROJ500 course? Answer: ${found.Title}`);

    //What are the titles of the courses that cost $50 or less?
    let list = courses.filter(w => w.Fee <= 50);
    console.log(`What are the titles of the courses that cost $50 or less?`);
    for (let i=0; list[i]; i++) console.log(`${list[i].Title}`)


   // What  classes meet in "Classroom 1"?
   list = courses.filter(w => w.Location === "Classroom 1");
   console.log(`What  classes meet in "Classroom 1"?`);
   for (let i=0; list[i]; i++) console.log(`${list[i].Title}`)


