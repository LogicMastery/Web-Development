var Logic = {
    'Math': "Basic Math",
    'Algebra': "Advance Math",
    'LinearAlgebra': "Complex Math",
    'Calculus': "The Hardest Math"
}

console.log(Logic)

Logic.M = function() {
    alert(this.Calculus + " Do you really want to learn " + "Calculus? " + this.LinearAlgebra + " That's a Complex Math!!!! " )
}