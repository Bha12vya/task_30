let students = [
    { id: 1, s_name: "nandhu", city: "Hyd" },
    { id: 2, s_name: "malli", city: "Sec" },
    { id: 3, s_name: "manisha", city: "Vizag" },
    { id: 4, s_name: "sujatha", city: "Bengaluru" },
    { id: 5, s_name: "rahul", city: "Chennai" },
    { id: 6, s_name: "ammu", city: "Mumbai" }
];
for(i in students)
    {
        console.log(`${students[i].s_name}    from     ${students[i].city}`)
}
for(students of students)
    {
        console.log(`${students.s_name} from  ${students.city}`)
}