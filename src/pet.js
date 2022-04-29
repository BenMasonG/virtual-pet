
function Pet(name) {
    this.name = name;
    this.age = 0;
};


Pet.prototype.growUp = function () {
    this.age = this.age + 1;
    console.log(this.age)
}

module.exports = Pet;