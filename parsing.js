
function parseAndDisplayName(name) 
{
    let spacePos = name.indexOf(' ');

    let firstName=name.substring(0,spacePos);
    let lastName = name.substring(spacePos+1);

    console.log(`Name: ${name}, First Name: ${firstName}, Last Name: ${lastName}`);
}



parseAndDisplayName("Brenda Kaye")
parseAndDisplayName("Ian Auston")
parseAndDisplayName("Siddalee Grace")