let user = {};

function A() {return user};
function B() {return user};

alert(new A() == new B());