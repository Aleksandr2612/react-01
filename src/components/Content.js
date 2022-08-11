function Content({person}) {
    console.log(person)
    return <div>

    <h3>{person.name}</h3>
        <span>{person.age}</span>
        <p>{person.gender}</p>

    </div>
}

export default Content;