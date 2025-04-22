// Code Keypad Component Here

function Keypad (){
    
    function handleChange () {
        console.log ("Entering password...")
    }
    <input type="password" onChange={handleChange}/>
}

export default Keypad;